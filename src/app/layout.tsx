import React from 'react'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Wrapper from '../layouts/Wrapper'
import { Footer } from './_components/Footer'
import FetchHeader from './_components/Header/FetchHeader'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

const defaultFont: NextFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

import { NextFont } from 'next/dist/compiled/@next/font'

import '../styles/index.scss'
import '../main.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/assets/img/favicon.svg" />
      </head>

      <body className={`${defaultFont.className}`}>
        <Providers>
          <Wrapper>
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <main>
                  <FetchHeader />
                  {children}
                </main>
                {/* @ts-expect-error */}
                <Footer />
              </div>
            </div>
          </Wrapper>
        </Providers>
      </body>
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
}
