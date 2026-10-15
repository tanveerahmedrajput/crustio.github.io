CRUSTIO website (static HTML5)
===============================

HOW TO UPLOAD
1. Log in to your hosting control panel (cPanel, Hostinger hPanel, etc.) and open File Manager.
2. Open the public_html folder of crustio.co (or the folder your domain points to).
3. Upload crustio-website.zip there and choose Extract. All files must sit directly inside
   public_html, so that index.html is at public_html/index.html.
4. Open https://crustio.co and check every page.

Any static host also works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Upload the unzipped folder.
No database, PHP or build step is needed.

FILES
index.html, about.html, menu.html, branches.html, founders.html, franchise.html, contact.html
css/style.css         all styling
js/main.js            menu data, menu tabs, pizza drawings, 3D hero, forms
js/three.min.js       3D library (three.js r128, MIT licence), served from your own host
images/               logo, photos, favicon, social share image
robots.txt, sitemap.xml, .htaccess, 404.html

THINGS TO FINISH BEFORE LAUNCH
- Founders: names are in. Add biographies and photos in js/main.js (search for PEOPLE).
- Opening hours: search for "To be confirmed" in index.html and branches.html (the branch card text is created in js/main.js, search "To be confirmed").
- Business email: contact.html, search for "To be added before launch".
- Social links: set in js/main.js (search for SOCIAL): Facebook, Instagram, TikTok and Snapchat.
- Google Analytics: in every .html file, uncomment the analytics block in <head> and replace G-XXXXXXXXXX with your Measurement ID.
- Google Search Console: add https://crustio.co as a property, verify it, then submit https://crustio.co/sitemap.xml.
- Forms: the franchise and contact forms only show a thank-you message. A static site cannot receive form data
  by itself. Connect them to a form service (Formspree, Web3Forms, Getform) or a PHP script, or use the
  WhatsApp and phone buttons for now.
- Prices: edit the arrays at the top of js/main.js (PIZZAS, BURGERS, PASTA, SANDS, APPS, DEALS).
- Menu note: the printed menu lists Chicken Tikka with "Fajita Chicken" and Chicken Fajita with "Tikka Chicken". Check which is right.

ADMIN PANEL / CMS
This package is the front end only. A password-protected admin panel for menu, images, branches and contacts
needs a CMS (for example WordPress, or a headless CMS) and is a separate piece of work.
