# BLUEMIST.md

# BlueMist - Luxury Mineral Water Landing Page

This project is a professional landing page for BlueMist, a luxury custom water bottle business. It is built with React, TypeScript, Vite, and Tailwind CSS.

## Project Overview

- **Brand**: BlueMist (Luxury Mineral Water)
- **Goal**: Create a high-end, responsive landing page to showcase the brand and drive enquiries.
- **Key Features**:
    - **Hero Section**: Full-screen immersive background (video/image) with Cinzel typography.
    - **Responsive Design**: Optimized for mobile, tablet, and desktop.
    - **Modular Components**: Built using React components for scalability.
    - **Data-Driven Content**: Content is separated in `src/data/landing-content.ts` for easy updates.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
    - **Fonts**: Cinzel (Headings), Josefin Sans (Body)
    - **Colors**:
        - Primary: `#0e0e0e` (Black)
        - Secondary: `#ffffff` (White)
        - Tertiary: `#DD9951` (Gold/Bronze)
- **Animations**: Framer Motion

## Development Guide

### Commands

- **Install Dependencies**: `npm install`
- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

### Project Structure

```
src/
├── components/         # UI Components
│   └── HeroSection.tsx # Main Hero Section
├── data/
│   └── landing-content.ts # Text content for the landing page
├── assets/             # Static assets (images, etc.)
├── App.tsx             # Main Application Component
├── main.tsx            # Entry Point
└── index.css           # Global Styles & Tailwind Directives
```

### Customization

- **Content**: Update `src/data/landing-content.ts` to change text, links, or contact info.
- **Styles**: Modify `tailwind.config.js` to adjust the color palette or fonts.
- **Assets**: Place new images in `src/assets/`. For usage in components, import them (e.g., `import logo from '../assets/logo.jpg'`) to ensure they are bundled correctly by Vite.

## Next Steps

1.  **Implement Remaining Sections**:
    - Features Section (Why BlueMist Exists)
    - Product Range (Table/Grid)
    - Quality & Certification
    - Use Cases (Perfect For)
    - Custom Branding (Private Label)
    - Testimonials
    - Footer
2.  **Backend Integration**:
    - Connect the "Enquire Now" CTA to a backend service (Youware Backend) to handle form submissions.
3.  **Video Optimization**:
    - Replace the hero background image with a high-quality optimized video (`<video>` tag) for the full luxury experience.

