# Recruiter Ready - Personal Portfolio

This is a minimal, recruiter-focused personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The design is clean, professional, and optimized for quick scanning by technical recruiters and hiring managers.

## Features

- **Dark Mode Only**: A sleek, Ayu Dark-inspired theme.
- **Single-Page Layout**: All information is accessible on a single, scrollable page.
- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Component-Based**: Built with reusable React components.
- **SEO Optimized**: Includes metadata for better search engine visibility.
- **Easy to Customize**: Content is centralized in `src/lib/data.ts` for quick updates.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, pnpm, or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Your Portfolio

All the content for the website is located in `src/lib/data.ts`. Open this file to replace the placeholder content with your own information.

### 1. Site Configuration

In `src/lib/data.ts`, update the `siteConfig` object with your name, description, and domain URL.

```typescript
export const siteConfig = {
  name: 'Your Name',
  description: 'A short, professional tagline about you.',
  url: 'https://your-domain.com',
  // ... other fields
};
```

### 2. Navigation

Update the `navLinks` array to change the navigation items in the header.

### 3. Hero, About, and Contact Sections

Modify the `hero`, `about`, and `contact` objects with your personal details.

### 4. Skills

Update the `skills` array. You can group your skills into categories.

```typescript
export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python'],
  },
  // ... other categories
];
```

### 5. Projects

-   **Content**: Update the `projects` array in `src/lib/data.ts`.
-   **Images**: Project images are defined in `src/lib/placeholder-images.json`. For best results, replace the `picsum.photos` URLs with direct links to your own screenshots (e.g., hosted on Vercel Blob, Cloudinary, or in your `public` folder).

### 6. Experience & Achievements

Update the `experience` and `achievements` arrays with your professional history and accomplishments.

### 7. Resume

Place your resume PDF file in the `public` directory and name it `resume.pdf`. The "Download Resume" button will automatically link to it.

### 8. Theme Colors

The color palette is inspired by Ayu Dark and can be customized in `src/app/globals.css`. The theme is dark-mode only.

```css
@layer base {
  :root {
    --background: 210 8% 15%;    /* Dark slate gray */
    --foreground: 210 17% 82%;   /* Light text */
    --primary: 180 34% 53%;      /* Desaturated cyan */
    --accent: 33 70% 45%;        /* Muted orange */
    /* ... other CSS variables */
  }
}
```

## Deployment

This project is optimized for one-click deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Go to the Vercel dashboard and click "Add New... > Project".
3.  Select your GitHub repository.
4.  Vercel will automatically detect that you're using Next.js and configure the build settings.
5.  Click "Deploy".

That's it! Your portfolio will be live.
