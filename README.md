# Personal Portfolio

A sleek, modern portfolio website built with React, Tailwind CSS, and Vite featuring a dark glassmorphism design aesthetic.

## 🎨 Features

- **Dark Glassmorphism Design** - Modern frosted glass UI with cyan accent colors
- **Smooth Animations** - Scroll reveal effects, micro-interactions, and loading transitions
- **Fully Responsive** - Mobile-first design with breakpoints for all devices
- **Performance Optimized** - Built with Vite for fast loading and optimal bundle size
- **Sections**:
  - Hero with photo and tech stack showcase
  - Projects grid with GitHub repos and live demos
  - Medium articles with view counts
  - Awards & Recognition
  - Contact/Footer with CV download and Google Calendar booking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### 1. Add Your Assets

Place these files in the `/public` directory:
- `profile.jpg` - Your profile photo
- `cv.pdf` - Your CV/resume

### 2. Update Personal Information

Edit the following files to add your information:

**src/components/Hero.jsx**
- Line 25: Update "Your Name" with your actual name

**src/components/Contact.jsx**
- Line 47: Google Calendar booking URL
- Line 84: Email address
- Line 68: Location
- Lines 95-127: GitHub, LinkedIn, Medium URLs

**src/components/Projects.jsx**
- Update project details, GitHub repos, and live demo URLs

**src/components/Articles.jsx**
- Update Medium article URLs and details

**src/components/Awards.jsx**
- Update awards and achievements

### 3. Environment Variables (Optional)

Create a `.env.local` file (copy from `.env.example`) and add your values:

```env
VITE_YOUR_NAME=Your Full Name
VITE_YOUR_EMAIL=your.email@example.com
VITE_GOOGLE_CALENDAR_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_ID
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy
4. Your site will be live at `https://your-project.vercel.app`

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Run `npm run build` and deploy the `dist` folder
- **Cloudflare Pages**: Connect repo and set build command to `npm run build`

## 🎯 Tech Stack

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite 6** - Build tool and dev server
- **Custom Animations** - CSS keyframes and transitions
- **Intersection Observer** - Scroll reveal animations

## 📱 Mobile Breakpoints

- `sm:` - 640px+
- `md:` - 768px+ (tablets)
- `lg:` - 1024px+ (desktops)

## 🎨 Design System

### Colors
- Primary: Cyan (#06B6D4)
- Secondary: Blue (#3B82F6)
- Background: Slate-900/800
- Text: Slate-100/300/400

### Glassmorphism
- Background: `white/5` with backdrop blur
- Borders: `white/10` with cyan accents on hover
- Shadows: Subtle with cyan glow effects

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

Built with modern web technologies and design principles. Optimized for performance and accessibility.

---

**Built with React, Tailwind CSS & Vite** 🚀
