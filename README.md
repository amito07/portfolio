# 🚀 Professional Portfolio - Amit Mandal

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases professional experience, skills, and projects with stunning animations and a mobile-first design.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with glassmorphism effects and gradient backgrounds
- **⚡ Performance**: Built with Next.js 15 and optimized for speed and SEO
- **📱 Responsive**: Mobile-first design that works perfectly on all devices
- **🎬 Animations**: Smooth animations and transitions using Framer Motion
- **🎯 SEO Optimized**: Comprehensive meta tags and structured data
- **🌙 Modern UI**: Beautiful gradients, shadows, and modern typography
- **🛠️ TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Fonts**: Inter & JetBrains Mono
- **Deployment**: Vercel Ready

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles and animations
├── components/
│   ├── Navigation.tsx     # Responsive navigation with smooth scroll
│   ├── Hero.tsx          # Hero section with animated elements
│   ├── About.tsx         # About section with stats
│   ├── Skills.tsx        # Skills with animated progress bars
│   ├── Experience.tsx    # Timeline-based experience section
│   ├── Projects.tsx      # Featured and other projects showcase
│   └── Contact.tsx       # Contact form and information
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):

   - Name and title
   - Professional description
   - Social media links

2. **About Section** (`src/components/About.tsx`):

   - Personal story and background
   - Statistics and achievements

3. **Experience Section** (`src/components/Experience.tsx`):

   - Work experience and roles
   - Company information and achievements

4. **Projects Section** (`src/components/Projects.tsx`):

   - Featured projects
   - Project descriptions and technologies
   - GitHub and live demo links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media profiles

### SEO and Metadata

Update the metadata in `src/app/layout.tsx`:

- Title and description
- Open Graph tags
- Twitter card information
- Author information

### Styling and Theme

Customize the design in:

- `src/app/globals.css` - Global styles and animations
- Tailwind classes throughout components
- Color scheme and gradients

## 🎨 Key Sections

### 🏠 Hero Section

- Animated introduction with floating elements
- Professional title and description
- Social media links with hover effects
- Call-to-action buttons

### 👨‍💻 About Section

- Personal story and background
- Key highlights with icons
- Achievement statistics
- Professional values

### 🛠️ Skills Section

- Animated skill progress bars
- Technology stack showcase
- Categorized skill sets
- Interactive hover effects

### 💼 Experience Section

- Timeline-based layout
- Detailed work history
- Key achievements and responsibilities
- Technology used in each role

### 🚀 Projects Section

- Featured project showcases
- Project cards with hover effects
- Technology badges
- GitHub and live demo links

### 📞 Contact Section

- Contact form with validation
- Contact information
- Social media links
- Location and availability

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you create improvements that could benefit others, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: [Lucide React](https://lucide.dev/) and [Heroicons](https://heroicons.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Framework**: [Next.js](https://nextjs.org/)

---

⭐ **If you found this portfolio template helpful, please give it a star!**

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
