# Tyagi Estates

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Sanity](https://img.shields.io/badge/Sanity-5.7.0-F03E2F?logo=sanity)

A modern real estate portfolio website showcasing premium property listings with integrated content management. Built for Tyagi Estates, a trusted real estate brand established in 2005.


## Overview

Tyagi Estates is a full-stack real estate application featuring a Next.js frontend and Sanity CMS backend. The platform displays property listings, company legacy information, and consulting services for renting and selling properties. It uses server-side rendering for optimal performance and integrates with Sanity for dynamic content management.

## Screenshots

## Features

- **Property Portfolio**: Dynamic property listings fetched from Sanity CMS with filtering by status (For Sale, New Launch, Sold Out, Upcoming)
- **Property Detail Pages**: Individual pages for each property with image galleries, video tours, and detailed specifications
- **Hero Section**: Animated landing section with company branding
- **Why Invest Section**: Highlights trust, ROI, legal clarity, and planned colonies
- **Legacy Section**: Company history and values since 2005
- **Consulting Services**: Sections for strategic selling and rental management
- **WhatsApp Integration**: Direct contact via WhatsApp for inquiries
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Dark Theme**: Modern dark UI with blue accent colors
- **Animations**: Smooth transitions using Framer Motion
- **Sanity Studio**: Embedded CMS for managing property content

## Tech Stack

### Frontend
- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 0.563.0
- **Animations**: Framer Motion 12.29.2
- **Fonts**: Geist Sans & Geist Mono (via next/font/google)

### Backend / CMS
- **Headless CMS**: Sanity 5.7.0
- **Sanity Client**: next-sanity 12.0.14
- **Image Optimization**: @sanity/image-url 2.0.3
- **Styling**: styled-components 6.1.18 (for CMS studio)

### Tooling
- **Linting**: ESLint 9 with eslint-config-next
- **Code Formatting**: Prettier 3.5 (CMS only)
- **Package Manager**: npm

### Deployment
deployed  on vercel 
- Build command: `next build`

## Project Structure

```
tyagivansh372-gif/Tyagi-Estate/
├── real-estate-biz/              # Next.js frontend application
│   ├── app/
│   │   ├── layout.tsx           # Root layout with Navbar and Footer
│   │   ├── page.tsx             # Homepage with all sections
│   │   ├── property/[slug]/     # Dynamic property detail pages
│   │   │   └── page.tsx
│   │   └── studio/              # Sanity studio integration route
│   ├── components/
│   │   ├── Hero.jsx            # Hero section component
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   ├── PropertyCard.tsx    # Property listing card
│   │   └── PropertyDetailClient.tsx  # Property detail client component
│   ├── lib/
│   │   ├── sanity.ts           # Sanity client configuration
│   │   ├── client.js
│   │   ├── image.js
│   │   └── live.js
│   ├── public/                 # Static assets (images, logos)
│   ├── sanity/
│   │   └── env.js              # Environment variable exports
│   ├── next.config.ts          # Next.js configuration
│   ├── tsconfig.json           # TypeScript configuration
│   ├── postcss.config.mjs      # PostCSS/Tailwind configuration
│   └── package.json
└── tyagi-estates-cms/          # Sanity CMS studio
    ├── schemaTypes/
    │   ├── index.js            # Schema exports
    │   └── property.js         # Property content schema
    ├── sanity.config.js        # Sanity studio configuration
    ├── sanity.cli.js           # Sanity CLI configuration
    └── package.json
```

## Getting Started

### Prerequisites

- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Pitaji-gift
   ```

2. **Install frontend dependencies**
   ```bash
   cd real-estate-biz
   npm install
   ```

3. **Install CMS dependencies**
   ```bash
   cd ../tyagi-estates-cms
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cd ../real-estate-biz
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Sanity project credentials (see Environment Variables section below).

5. **Run the development server**
   ```bash
   cd real-estate-biz
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the `real-estate-biz` directory with the following variables:

| Variable Name | Purpose | Example Value |
|--------------|---------|---------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | `uzal2rqx` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | `2026-01-24` |

### CMS Setup

The Sanity CMS is located in the `tyagi-estates-cms` directory.

1. **Navigate to the CMS directory**
   ```bash
   cd tyagi-estates-cms
   ```

2. **Run the Sanity studio**
   ```bash
   npm run dev
   ```
   The studio will open at [http://localhost:3333](http://localhost:3333).

3. **Connect to your Sanity project**
   - The studio is configured with project ID `uzal2rqx` and dataset `production`
   - Ensure you have access to this Sanity project or update `sanity.config.js` with your credentials

4. **Manage content**
   - Use the studio to create and edit property listings
   - The property schema includes: title, slug, location, landmark, status, main image, gallery, video tour, property details, and price

## Scripts

### Frontend (real-estate-biz)

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start Next.js development server |
| `build` | `next build` | Build production bundle |
| `start` | `next start` | Start production server |
| `lint` | `eslint` | Run ESLint for code linting |

### CMS (tyagi-estates-cms)

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `sanity dev` | Start Sanity studio in development mode |
| `start` | `sanity start` | Start Sanity studio |
| `build` | `sanity build` | Build Sanity studio for production |
| `deploy` | `sanity deploy` | Deploy Sanity studio to Sanity hosting |
| `deploy-graphql` | `sanity graphql deploy` | Deploy GraphQL API |

## Testing


## Deployment

The application is deployed using vercel 

**Build command**: `next build`


## Design Decisions

- **Server-Side Rendering (SSR)**: Property data is fetched on the server using Next.js App Router for optimal SEO and performance
- **Sanity CMS Integration**: Content is managed separately in Sanity CMS, allowing non-technical users to update property listings without code changes
- **Monorepo Structure**: Frontend and CMS are kept in separate directories for clear separation of concerns
- **Hardcoded Sanity Config**: The Sanity client in `lib/sanity.ts` uses hardcoded project ID and dataset for stability in public client-side fetches, with environment variables available via `sanity/env.js`
- **Dynamic Routing**: Property detail pages use Next.js dynamic routes (`[slug]`) to generate individual pages for each property
- **Dark Theme UI**: Modern dark color scheme with blue accents for a premium real estate aesthetic
- **Component-Based Architecture**: Reusable components (Hero, Navbar, Footer, PropertyCard) for maintainability

## Roadmap

- [ ] Add search and filter functionality for property listings
- [ ] Implement contact form for inquiries
- [ ] Add user authentication for saved properties
- [ ] Integrate map view for property locations
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Set up CI/CD pipeline
- [ ] Add multi-language support
- [ ] Implement blog section for real estate insights

## Contact

**Vansh Tyagi**

- Portfolio: https://portfolio-orcin-seven-25.vercel.app/
- LinkedIn: https://www.linkedin.com/in/vansh-tyagi-069365328/
