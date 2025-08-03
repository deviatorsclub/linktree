# Deviators Club Linktree

A modern, responsive linktree implementation built with Next.js 15, featuring animated background, glassmorphism design and smooth animations.

## ✨ Features

- **Animated Background**: CSS-based particle system with floating elements and geometric shapes
- **Modern Design**: Clean, glassmorphism UI with liquid glass effects
- **Responsive**: Optimized for all device sizes and screen sizes
- **Fast Performance**: Built with Next.js 15 and optimized assets (149kB first load)
- **Accessible**: WCAG compliant with proper focus management
- **SEO Optimized**: Complete meta tags and social media cards
- **Production Ready**: Security headers and performance optimizations included
- **Type Safe**: Full TypeScript implementation
- **Animated**: Smooth animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Font**: Pixelify Sans (Google Fonts)

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd linktree-main
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization

### Update Links

Edit the links in `src/data/links.tsx`:

```typescript
const links: LinkData[] = [
  {
    name: "Website",
    icon: Globe,
    href: "https://your-website.com",
    subline: "Visit our website",
    color: "#0047AB",
  },
  // Add more links...
];
```

### Styling

The design uses Tailwind CSS classes and can be customized in:

- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Global styles
- Component files - Individual styling

## 📱 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run type-check` - Check TypeScript types

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by [Deviators Club](https://deviatorsclub.tech)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
