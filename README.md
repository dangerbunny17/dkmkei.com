# dkmkei.com: DKM Consulting Group website

This folder is the complete website. **Cloudflare Pages** builds it (Jekyll) from the GitHub repository and publishes it. Later, you can edit the text and photos in **Pages CMS**, so you do not need to touch code for small changes.

Order of setup: **1. GitHub, 2. Cloudflare Pages, 3. Formspree, 4. Pages CMS, 5. the domain (last).**

## What is where

| You want to change | File | Pages CMS section (after Step 4) |
|---|---|---|
| Email, phone, location, form connection, holding page | `_data/site.yml` | Contact details and form |
| Home page headline and section text | `_data/home.yml` | Home page text |
| The six service cards and photos | `_data/services.yml` | Services |
| Client quotes | `_data/testimonials.yml` | Client quotes |
| Project table | `_data/projects.yml` | Projects |
| About page | `_data/about.yml` | About page |
| Our Experience page | `_data/experience.yml` | Our Experience page |
| Contact page and the project type menu | `_data/contact.yml` | Contact page |

Design files (only for bigger changes): `assets/css/site.css`, `_layouts/default.html`, and the page files `index.html`, `about.html`, `experience.html`, `contact.html`. The animated circuit is `_includes/circuit.svg`.

## Step 1: GitHub (done)

The files are in the GitHub repository. You commit and push changes with GitHub Desktop.

- Make sure that the files are at the top level of the repository, not inside a subfolder.
- If GitHub Pages is still on, turn it off: **Settings > Pages > Source: None** (or **Unpublish site**). Cloudflare hosts the site now.
- After Cloudflare is connected (Step 2), you can make the repository **private**: **Settings > General > Danger Zone > Change visibility**.
- Turn on two-factor authentication on your GitHub account. Whoever controls the account controls the site.

## Step 2: Cloudflare Pages

1. Make a free account at cloudflare.com.
2. In the dashboard, open **Workers & Pages > Create > Pages > Connect to Git**.
3. Connect your GitHub account and select only the website repository.
4. Build settings:
   - Framework preset: **Jekyll** (or **None**)
   - Build command: `bundle exec jekyll build`
   - Build output directory: `_site`
5. Click **Save and Deploy**. The first build takes a few minutes.
6. Cloudflare gives the site a free address like `dkmkei-site.pages.dev`. Use this address to check the site. It is public, but nobody knows it unless you share it.

Every push to `main` builds and publishes the site again, in about one to two minutes.

If the build fails, copy the last lines of the build log and send them to Claude.

## Step 3: Connect the contact forms (Formspree)

The forms are in **preview mode** until you do this. In preview mode they show a message and send nothing.

1. Make a free account at formspree.io with the email address that should get the messages.
2. Make a new form. Formspree shows an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Copy only the ID (`abcdwxyz`) into `formspree_id` in `_data/site.yml`. Commit and push.
4. Send a test message from the `.pages.dev` site. Formspree asks you to confirm the first one.

Each message has a subject like **"[Commissioning support] Website inquiry from Jane Doe"**. The part in brackets comes from the "Project type" menu, so you can make email filters or labels for each service. The menu choices are in `_data/contact.yml`.

## Step 4: Pages CMS (the editor, optional)

1. Go to **app.pagescms.org** and sign in with GitHub.
2. Allow it to access the website repository.
3. Open the repository. The left menu shows the sections in the table above.
4. To let David edit too, use the invite option in Pages CMS. He needs only an email address.

Each **Save** in Pages CMS commits the change to GitHub, and Cloudflare publishes it.

## Step 5 (last): Put the site on dkmkei.com

Do this only when you are ready for the site, or the holding page, to be public on dkmkei.com.

Cloudflare Pages needs the domain's **DNS to be managed by Cloudflare** to use the main address (dkmkei.com without "www"). The domain stays registered at Squarespace. Only the DNS management moves.

1. In Cloudflare, click **Add a domain** and enter `dkmkei.com`. Choose the **Free** plan.
2. Cloudflare scans the existing DNS records from Squarespace. **Compare the list with Squarespace before you continue.** The email records must all be there: every **MX** record, and the **TXT** records for SPF, DKIM and DMARC. Add any record that is missing. If one is missing, email to @dkmkei.com stops working.
3. Cloudflare shows two nameservers. In Squarespace, open **Domains > dkmkei.com > DNS > Nameservers**, choose custom nameservers, and enter the two Cloudflare nameservers.
4. Wait until Cloudflare shows the domain as **Active** (minutes to 24 hours).
5. In your Pages project, open **Custom domains > Set up a custom domain** and add `dkmkei.com`. Add `www.dkmkei.com` too. Cloudflare makes the DNS records and HTTPS for you.
6. Send a test email to and from your @dkmkei.com address to confirm that email still works.

## The holding page ("under construction")

While `under_construction: true` is set in `_data/site.yml`, every page shows only the holding page: the circuit animation, a short message, and the contact email. Search engines are asked not to list the site during this time.

To put the full site live, change it to `false`, then commit and push (or turn the switch off in Pages CMS). To go back, set it to `true` again.

## Before launch: checklist

- [ ] Replace all text in [square brackets].
- [ ] Get written permission for every client quote and client name.
- [ ] Confirm the contact email address in `_data/site.yml`.
- [ ] Replace David's placeholder photo (the cowboy hat one), unless he insists on keeping it.
- [ ] Confirm each item under "Systems we know".
- [ ] Connect Formspree and send a test message.
- [ ] Set `under_construction` to `false`.
