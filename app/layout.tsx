import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'David Rivard | Software Engineer',
    template: '%s | David Rivard',
  },
  description:
    'Software Engineer specializing in scalable backend services, cloud infrastructure, container orchestration, and fault tolerant data pipelines.',
  openGraph: {
    title: 'David Rivard | Software Engineer',
    description:
      'Software Engineer specializing in scalable backend services, cloud infrastructure, container orchestration, and fault tolerant data pipelines.',
    url: baseUrl,
    siteName: 'David Rivard Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'dark text-neutral-900 bg-neutral-50 dark:text-neutral-100 dark:bg-neutral-950 transition-colors duration-200',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-12 min-h-screen flex flex-col justify-between">
        <main className="flex-auto min-w-0 mt-4 flex flex-col">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
