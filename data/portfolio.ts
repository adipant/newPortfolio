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
    id: 'VakeelSaab',
    title: 'VakeelSaab',
    category: 'work',
    tagline: 'Legal Consulatation & Tech Platform',
    description:
      'Built a high-performance web platform using SSR, ISR, and CSR for optimized rendering and smooth UX. Integrated MongoDB for data management and Payload CMS for dynamic content with full CRUD capabilities, ensuring a scalable and maintainable foundation.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'PayloadCMS'],
    links: {
      live: 'https://vakeelsaab.com',
      code: '#'
    },
    image: '/assets/vakeelsaabimg.png'
  },
  {
    id: 'atlas-shop',
    title: 'Atlas Commerce',
    category: 'featured',
    tagline: 'A premium commerce experience designed for motion and conversion.',
    description:
      'Built a high-performance storefront with frictionless checkout, modular CMS-driven pages, and immersive product storytelling. The result improved time-to-interaction and increased conversion on mobile-first traffic.',
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Sanity'],
    links: {
      live: '#',
      code: '#'
    },
    image: '/images/atlasImg.png'
  },
  {
    id: 'MyFitnessPro',
    title: 'MyFitnessPro',
    category: 'featured',
    tagline: 'Smart, personalized fitness planning.',
    description:
      'Designed and developed a React Native application that generates personalized fitness and nutrition plans based on user inputs like height, weight, age, and goals (muscle gain, bulking, or fat loss). Implemented smart logic to deliver structured workouts and diet recommendations, focusing on simplicity, fast onboarding, and actionable insights.',
    stack: ['React Native', 'TypeScript', 'Firebase'],
    links: {
      live: '#',
      code: '#'
    },
    image: '/mockups/pulse-care.svg'
  },
  
  // {
  //   id: 'enterprise-dashboard',
  //   title: 'DataInsight CRM',
  //   category: 'work',
  //   tagline: 'Internal Tooling for scalable data management.',
  //   description:
  //     'Engineered a comprehensive CRM dashboard for a logistics firm, streamlining fleet management and real-time package tracking. Optimized data fetching strategies to handle large-scale datasets with minimal latency.',
  //   stack: ['React', 'Redux', 'D3.js', 'PostgreSQL', 'AWS'],
  //   links: {
  //     live: '#',
  //     code: '#'
  //   },
  //   image: '/images/dashboard-preview.png'
  // }
] as const;

export const experience = [
  {
    year: '2025 - Present',
    role: 'Software Developer',
    company: 'VakeelSaab (MV HUMHAINA Pvt Ltd)',
    details: 'Leading end-to-end delivery of React, Next.js, and React Native products for startups and scaling teams.'
  },
] as const;
