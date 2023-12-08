<h1 align="center">🕯️ Antic - Landing Page 🛋️</h1>

<p align="center">
  Landing page created as demostration with Next 14
</p>

<h3 align="center">
  <a href="https://pf-landing.vercel.app/">Live Version Here</a>
</h3>

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

### Installation and usage

#### For development:


1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ivandipaolo/pf-landing.git
   ```
   
2. Install dependencies

   ```bash
   npm install
   ```

3. Run dev server
(Default port 3000)
   ```bash
   npm run dev
   ```

4. Open and start developing

   ```bash
   localhost:3000
   ```

#### For deployment:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ivandipaolo/pf-landing.git
   ```
   
2. Install dependencies

   ```bash
   npm install
   ```

3. Create build

   ```bash
   npm run build
   ```

4. Run preview server
(Default port 4173)
   ```bash
   npm run preview
   ```

5. Open preview

   ```bash
   localhost:4173
   ```


## Folders structure:
<details>
  <summary>Complete</summary>
  
```

└── 📁pf-landing
    └── .eslintrc.json
    └── next-env.d.ts
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── 📁icons
            └── arrowleft.svg
            └── arrowright.svg
            └── burgermenu.svg
            └── contact.svg
            └── scrolldown.svg
            └── white-scrolldown.svg
        └── 📁images
            └── 📁carrousel
                └── carr10.png
                └── carr11.png
                └── carr2.png
                └── carr3.png
                └── carr4.png
                └── carr5.png
                └── carr6.png
                └── carr7.png
                └── carr8.png
                └── carr9.png
            └── img-1.svg
            └── img-2.svg
            └── 📁social-icons
                └── Facebook.svg
                └── Instagram.svg
                └── Linkedin.svg
                └── Twitter.svg
    └── README.md
    └── 📁src
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── page.tsx
        └── 📁components
            └── Carrousel.tsx
            └── Footer.tsx
            └── Header.tsx
            └── HeroSection.tsx
            └── Icon.tsx
            └── index.ts
            └── Inspirations.tsx
            └── MaxWidthWrapper.tsx
            └── Perks.tsx
            └── SocialNetworks.tsx
            └── Trends.tsx
        └── 📁lib
            └── footerSections.ts
            └── icons.tsx
            └── index.ts
            └── utils.ts
    └── tailwind.config.ts
    └── tsconfig.json

```

</details>
<details>
  <summary>Abbreviated</summary>

```
└── 📁src
    └── 📁app
        └── favicon.ico
        └── globals.css
        └── page.tsx
    └── 📁components
        └── Carrousel.tsx
        └── Footer.tsx
        └── Header.tsx
        └── HeroSection.tsx
        └── Icon.tsx
        └── index.ts
        └── Inspirations.tsx
        └── MaxWidthWrapper.tsx
        └── Perks.tsx
        └── SocialNetworks.tsx
        └── Trends.tsx
    └── 📁lib
        └── footerSections.ts
        └── icons.tsx
        └── index.ts
        └── utils.ts

```

</details>