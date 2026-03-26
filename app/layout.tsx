import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // metadataBase: new URL('https://yourdomain.com'),

  title: {
    default: 'Aditya Pant | Web & Mobile App Developer',
    template: '%s | Aditya Pant'
  },

  description:
    'Aditya Pant is a Web & Mobile App Developer specializing in React, Next.js, and React Native. Explore premium, product-focused engineering projects and portfolio.',

  keywords: [
    'Aditya Pant',
    'React developer',
    'Next.js developer',
    'React Native developer',
    'Frontend developer portfolio',
    'Full stack developer'
  ],

  authors: [{ name: 'Aditya Pant' }],
  creator: 'Aditya Pant',

  // openGraph: {
  //   title: 'Aditya Pant | Web & Mobile App Developer',
  //   description:
  //     'Premium portfolio showcasing React, Next.js, and React Native projects focused on performance and user experience.',
  //   url: 'https://yourdomain.com',
  //   siteName: 'Aditya Pant Portfolio',
  //   type: 'website',
  //   images: [
  //     {
  //       url: '/og-image.png', // place inside /public
  //       width: 1200,
  //       height: 630,
  //       alt: 'Aditya Pant Portfolio Preview'
  //     }
  //   ]
  // },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Aditya Pant | Web & Mobile App Developer',
  //   description:
  //     'Explore projects built with React, Next.js, and React Native.',
  //   images: ['/og-image.png']
  // },

  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
