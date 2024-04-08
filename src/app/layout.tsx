import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

import { Footer } from './_components/Footer'
import FetchHeader from './_components/Header/FetchHeader'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import Loading from './loading'

const defaultFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

import '../styles/index.scss'
import '../main.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmID: string | undefined = 'ID'

  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="Google Analytics"
        data-category="analytics"
        data-service="Google Analytics"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmID}');
          `,
        }}
        strategy="lazyOnload"
      />

      <head>
        <link rel="icon" href="/assets/img/favicon.svg" />
      </head>

      <Suspense fallback={<Loading />}>
        <body className={`${defaultFont.className}`} suppressHydrationWarning>
          <Providers>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>

            <div id="smooth-wrapper">
              <div id="smooth-content">
                <FetchHeader />

                <main>{children}</main>
                {/* @ts-expect-error */}
                <Footer />
              </div>
            </div>
          </Providers>
        </body>
      </Suspense>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
  icons: 'favicon.ico',
}
