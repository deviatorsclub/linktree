# Deviators Club Linktree

A modern, responsive linktree implementation built with Next.js 15, featuring glassmorphism design and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, glassmorphism UI with liquid glass effects
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Next.js 15 and optimized assets
- **Accessible**: WCAG compliant with proper focus management
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
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

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
