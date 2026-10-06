// Contact forms: tag the email subject with the chosen project type, then send through Formspree.
// While no Formspree ID is set in _data/site.yml, the forms stay in preview mode and send nothing.
document.querySelectorAll('form[data-form]').forEach(function (form) {
  var status = form.querySelector('[data-status]');
  var button = form.querySelector('button[type="submit"]');

  function show(message, kind) {
    status.textContent = message;
    status.className = 'form-status field-wide' + (kind ? ' is-' + kind : '');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var type = form.elements['project_type'].value || 'General';
    var name = form.elements['name'].value.trim() || 'website visitor';
    form.elements['subject'].value = '[' + type + '] Website inquiry from ' + name;

    if (form.dataset.live !== 'true') {
      show('Preview only: this form is not connected yet, so nothing was sent.', 'error');
      return;
    }

    button.disabled = true;
    show('Sending…');
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.reset();
        show('Thank you. Your message was sent, and we will reply soon.', 'ok');
      } else {
        throw new Error('Send failed');
      }
    }).catch(function () {
      var email = form.dataset.email;
      show('The message did not send. Please email us' + (email ? ' at ' + email : '') + '.', 'error');
    }).finally(function () {
      button.disabled = false;
    });
  });
});
