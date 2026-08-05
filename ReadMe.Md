# Emmanuel Okunlola — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript — no build step, no server, no framework. Deployable straight to GitHub Pages.

## 🌐 Live Site

Once deployed, the site can be served from:

`https://<your-username>.github.io/<repo-name>/`

## 📁 Project Structure

```text
.
├── index.html              # Home page
├── about.html              # About Me page
├── projects.html           # Research & Projects page
├── courses.html            # Courses page
├── cv.html                 # Curriculum Vitae page
│
├── css/
│   └── site.css            # All site styling, including the theme system
│
├── js/
│   └── theme.js            # Light/dark theme toggler and localStorage persistence
│
├── images/                 # Site images and thumbnails
│
├── favicons/               # Favicons and platform icons
│
└── files/                  # Downloadable assets (CV, portfolio files, etc.)
```

Every page is fully self-contained HTML. There is no runtime templating engine, so shared page elements (header, navigation, footer) are duplicated across files. That makes the site work cleanly on GitHub Pages and any static host.

## 🎨 Theme System

The site includes a theme toggle in the header.

- **Normal** — a lighter, more traditional portfolio theme.
- **Mechanical** — a darker, schematic-style theme.

The selected theme is stored in `localStorage` and restored on page load without a flash of the wrong theme.

## 🛠 How it Works

- `index.html`, `about.html`, `projects.html`, `courses.html`, and `cv.html` contain the page content and shared navigation.
- `css/site.css` contains all styling and theme variables.
- `js/theme.js` handles the theme switch and saves the selection to `localStorage`.
- `images/` holds visual assets used by the pages.
- `favicons/` holds the site icons.
- `files/` holds downloadable documents.

## 🚀 Deploying to GitHub Pages

1. Push this folder to a GitHub repository as the repository root.
2. Go to **Settings → Pages** in the repository.
3. Under **Source**, select your default branch and the **/ (root)** folder.
4. Save.

Your site will be available at `https://<username>.github.io/<repo-name>/` shortly.

No build step is required because the site is purely static.

## 🧪 Local Preview

You can open `index.html` directly in a browser, or run a local server for the best result:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## ✏️ Making Changes

- **Content**: edit the relevant `.html` file directly. Shared page elements are repeated across pages, so updating navigation or site-wide content may require editing multiple files.
- **Styling**: all styles live in `css/site.css`.
- **Theme toggle**: `js/theme.js` controls the theme switch and persistence.
- **Images/favicons**: replace files in `images/` and `favicons/` or update the HTML references if filenames change.

## 📄 License

Personal portfolio content © Emmanuel Okunlola. Reuse the code and structure freely; please do not reuse the personal content (bio, CV, project descriptions) as your own.