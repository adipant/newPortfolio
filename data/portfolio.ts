export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
] as const;

export const skills = [
  { title: 'React', level: 90, summary: 'Component architecture, state orchestration, polished UI systems.' },
  { title: 'Next.js', level: 85, summary: 'App Router, SEO, streaming, performance-first delivery.' },
  { title: 'JavaScript', level: 80, summary: 'Core language for web development, ES6+ features, async programming, and DOM manipulation.' },
  // { title: 'Next.js', level: 85, summary: 'App Router, SEO, streaming, performance-first delivery.' },
  { title: 'React Native', level: 70, summary: 'Cross-platform mobile apps with native feel and smooth UX.' },
  { title: 'APIs / Backend', level: 60, summary: 'Basic REST/GraphQL requests, handling data, and simple authentication.' },
  { title: 'AI Tools', level: 100, summary: 'ChatGPT (GPT-5.1), Claude Opus & Sonnet 4.6, Gemini 3 Pro \u2014 used for code assistance, debugging, documentation, and UI/UX ideation.', isAi: true }
] as const;

export const projects = [
  {
    id: 'atlas-shop',
    title: 'Atlas Commerce',
    tagline: 'A premium commerce experience designed for motion and conversion.',
    description:
      'Built a high-performance storefront with frictionless checkout, modular CMS-driven pages, and immersive product storytelling. The result improved time-to-interaction and increased conversion on mobile-first traffic.',
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Sanity'],
    links: {
      live: '#',
      code: '#'
    },
    image: '/mockups/atlas-commerce.svg'
  },
  {
    id: 'pulse-care',
    title: 'Pulse Care Mobile',
    tagline: 'Healthcare coordination with native-quality interactions.',
    description:
      'Designed and shipped a React Native application for appointments, reminders, and secure messaging. Introduced resilient offline states and smooth transitions that reduced support tickets and improved retention.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    links: {
      live: '#',
      code: '#'
    },
    image: '/mockups/pulse-care.svg'
  },
  {
    id: 'VakeelSaab',
    title: 'VakeelSaab',
    tagline: 'Legal Consulatation & Tech Platform',
    description:
      'Built a high-performance web platform using SSR, ISR, and CSR for optimized rendering and smooth UX. Integrated MongoDB for data management and Payload CMS for dynamic content with full CRUD capabilities, ensuring a scalable and maintainable foundation.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'PayloadCMS'],
    links: {
      live: 'https://vakeelsaab.com',
      code: '#'
    },
    image: '/assets/vakeelsaabimg.png'
  }
] as const;

export const experience = [
  {
    year: '2025 - Present',
    role: 'Software Developer',
    company: 'VakeelSaab (MV HUMHAINA Pvt Ltd)',
    details: 'Leading end-to-end delivery of React, Next.js, and React Native products for startups and scaling teams.'
  },
] as const;
