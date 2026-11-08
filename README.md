# Book Keeping Website (React)

A copy of the Colorlib "Bookkeeping" template, built with React + Vite + React Router.
It works on mobile and desktop.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Pages

| Address     | Page                               |
|-------------|------------------------------------|
| `/`         | Home                               |
| `/about`    | About Us (with team)               |
| `/services` | Services                           |
| `/blog`     | Blog (search: `/blog?q=tax`)       |
| `/single`   | One blog post with comments        |
| `/contact`  | Contact form                       |
| `/register` | Open a Client Account form         |

## Folders

```
public/images/        all photos and logos
src/
  main.jsx            starts the app
  App.jsx             header + page + footer, and the list of pages
  index.css           common styles (colors, buttons, headings, forms)
  pages/              one file per page
  components/         one file per section (+ its own .css file)
  hooks/useSlider.js  logic for the image and testimonial sliders
  data/posts.js       blog posts (used by Home and Blog)
```

## Screen sizes

- Desktop: 992px and wider
- Tablet: 768px – 991px
- Mobile: below 768px

Design: [Colorlib](https://colorlib.com)
