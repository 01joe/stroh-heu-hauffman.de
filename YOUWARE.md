# Firma Kolb GmbH & Co. KG - Website Clone

This project is a React-based clone of the Firma Kolb GmbH & Co. KG website (https://firma-kolb.de). It replicates the design, structure, and content of the original site using modern web technologies.

## Project Overview

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Features Implemented

- **Perfect Clone**: The website structure, layout, and content have been faithfully replicated.
- **Responsive Design**: Fully responsive layout adapting to mobile and desktop screens.
- **Custom Fonts**: Integrated 'Merriweather' (Serif) and 'Open Sans' (Sans-serif) to match the original typography.
- **Routing**: Preserved original URL paths for all pages:
  - `/` - Home (Über uns)
  - `/fuhrpark` - Unser Fuhrpark
  - `/agrarprodukte` - Agrarprodukte
  - `/spedition-logistik` - Spedition & Logistik
  - `/zertifikate` - Zertifikate
  - `/kontakt` - Kontakt
  - `/impressum` - Impressum
  - `/datenschutzerklaerung` - Datenschutzerklärung
- **Hero Slider**: Custom image slider component on the homepage and other pages.
- **Assets**: Original images and certificates have been integrated.

## Project Structure

```
src/
  assets/            # Images and certificates
  components/        # Reusable components (HeroSlider, etc.)
  layouts/           # MainLayout (Header, Footer)
  pages/             # Page components (Home, Fuhrpark, etc.)
  App.tsx            # Main application routing
  main.tsx           # Entry point
  index.css          # Global styles and Tailwind imports
```

## Development

To start the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Notes

- The backend functionality (contact form submission) is UI-only.
- Some legal texts (Impressum, Datenschutz) are placeholders or abbreviated and should be verified against the original for legal compliance if used in production.
