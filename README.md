# dkmkei.com: DKM Consulting Group website

This folder is the complete website. GitHub Pages builds it (Jekyll) and publishes it at **dkmkei.com**. You edit the text and photos in **Pages CMS**, so you do not need to touch code for small changes.

## What is where

| You want to change | Where (in Pages CMS) | File |
|---|---|---|
| Email, phone, location, form connection | Contact details and form | `_data/site.yml` |
| Home page headline and section text | Home page text | `_data/home.yml` |
| The six service cards and photos | Services | `_data/services.yml` |
| Client quotes | Client quotes | `_data/testimonials.yml` |
| Project table | Projects | `_data/projects.yml` |
| About page | About page | `_data/about.yml` |
| Our Experience page | Our Experience page | `_data/experience.yml` |
| Contact page and the project type menu | Contact page | `_data/contact.yml` |

Design files (only for bigger changes): `assets/css/site.css`, `_layouts/default.html`, and the page files `index.html`, `about.html`, `experience.html`, `contact.html`. The animated circuit is `_includes/circuit.svg`.

## Step 1: Put the site on GitHub

1. Sign in to GitHub (or make a free account).
2. Make a new **public** repository, for example `dkmkei-site`.
3. Upload all the files in this folder. Use **GitHub Desktop**, or **Add file > Upload files** on github.com.
   - Caution: `.pages.yml` starts with a dot, so Finder and Windows Explorer can hide it. Make sure it is uploaded. If it is missing, use **Add file > Create new file**, name it `.pages.yml`, and paste its contents.
4. In the repository, go to **Settings > Pages**.
   - Source: **Deploy from a branch**. Branch: **main**, folder **/ (root)**. Click **Save**.
   - Custom domain: `dkmkei.com`. Click **Save**. (The `CNAME` file already contains this.)
5. Recommended before DNS: verify the domain on your GitHub account (**your profile Settings > Pages > Add a domain**). GitHub gives you one TXT record to add at Squarespace. This stops other people from taking over the domain.

## Step 2: Point dkmkei.com to GitHub (Squarespace DNS)

In Squarespace, open **Domains > dkmkei.com > DNS**.

1. Remove the Squarespace default records for the website only: the `@` A records and the `www` CNAME that point to Squarespace.
2. **Do not change** the MX records, or any TXT records for email (SPF, DKIM, DMARC). Email runs on this domain.
3. Add these records:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

4. Wait. DNS changes can take from a few minutes to 24 hours.
5. Back in **Settings > Pages** on GitHub, when the DNS check passes, turn on **Enforce HTTPS**.

## Step 3: Connect the contact forms (Formspree)

The forms are in **preview mode** until you do this. In preview mode they show a message and send nothing.

1. Make a free account at formspree.io with the email address that should get the messages.
2. Make a new form. Formspree shows an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Copy only the ID (`abcdwxyz`) into **Contact details and form > Formspree form ID** in Pages CMS. Save.
4. Send a test message from the live site. Formspree asks you to confirm the first one.

Each message has a subject like **"[Commissioning support] Website inquiry from Jane Doe"**. The part in brackets comes from the "Project type" menu, so you can make email filters or labels for each service. You change the menu choices in **Contact page > Project types**.

## Step 4: Set up Pages CMS (the editor)

1. Go to **app.pagescms.org** and sign in with GitHub.
2. Allow it to access the website repository.
3. Open the repository. The left menu shows the sections in the table above.
4. To let David edit too, use the invite option in Pages CMS. He needs only an email address.

Each **Save** in Pages CMS commits the change to GitHub. The live site updates in about a minute.

## The holding page ("under construction")

While **Contact details and form > Under construction** is on, every page of dkmkei.com shows only the holding page: the circuit animation, a short message, and the contact email. Search engines are asked not to list the site during this time.

To put the full site live, turn that switch **off** in Pages CMS and click **Save**. The full site is live in about a minute. To go back, turn it on again.

## Before launch: checklist

- [ ] Replace all text in [square brackets].
- [ ] Get written permission for every client quote and client name.
- [ ] Confirm the contact email address in `_data/site.yml`.
- [ ] Replace David's placeholder photo (the cowboy hat one), unless he insists on keeping it.
- [ ] Confirm each item under "Systems we know".
- [ ] Connect Formspree and send a test message.
- [ ] Turn off **Under construction** in Pages CMS.
