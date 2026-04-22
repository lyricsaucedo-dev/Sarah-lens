# Sarah's Lens — Static HTML/CSS/JS

A static, dependency-free version of the Sarah's Lens photography site.

## Pages
- `index.html` — Home
- `portfolio.html` — Portfolio
- `about.html` — About
- `services.html` — Investment
- `contact.html` — Contact
- `404.html` — Not found

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Deploy
Upload the entire folder to any static host: Netlify, Vercel, GitHub Pages, S3, Cloudflare Pages, etc.
For most hosts, configure `404.html` as the not-found page.

## Structure
```
sarahs-lens/
├── index.html
├── portfolio.html
├── about.html
├── services.html
├── contact.html
├── 404.html
├── css/styles.css
├── js/main.js
└── assets/        (images)
```
