# Book Keeping Website (React)

A copy of the Colorlib "Bookkeeping" template, built with React + Vite.
It works on mobile and desktop.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Folders

```
public/images/        all photos and logos
src/
  main.jsx            starts the app
  App.jsx             puts all sections together
  index.css           common styles (colors, buttons, headings)
  components/         one file per section (+ its own .css file)
    TopBar.jsx        grey bar with phone and email
    Header.jsx        logo, menu, social icons, mobile menu
    Hero.jsx          big image slider
    About.jsx         About Us
    Numbers.jsx       32,594 clients, 25 years ...
    Services.jsx      6 service cards with hexagon icons
    CallToAction.jsx  "We Are Here To Help Grow Your Business"
    Testimonials.jsx  client reviews slider
    News.jsx          latest news
    Subscribe.jsx     email form
    Footer.jsx        footer links + copyright
```

## Screen sizes

- Desktop: above 991px
- Tablet: 768px – 991px
- Mobile: below 768px

Design: [Colorlib](https://colorlib.com)
