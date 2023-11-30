import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from './components/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Nextflix',
  description: 'Nextjs 14 Server Actions',
  keywords: [
    'Nextjs',
    'Nextflix',
    'Server Actions',
    'Prisma',
    'NextAuth',
    'Tailwindcss',
    'Typescript',
    'Nextjs 14',
  ],
  authors: [
    {
      name: 'lace04, ',
      url: ' https://github.com/lace04',
    },
  ],
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://example.com',
    title: 'Nextflix',
    description: 'Nextjs 14 Server Actions',
    images: [
      {
        url: 'https://th.bing.com/th/id/OIG.xj06guMceSxwpVemhfZd?pid=ImgGn',
        width: 1200,
        height: 630,
        alt: 'Nextflix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luisace',
    title: 'Nextglix',
    description: 'Nextjs 14 Server Actions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
