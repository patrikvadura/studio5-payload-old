import React from 'react'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import CookieConsentComponent from '../CookieConsent'
import { CMSLink } from '../Link'
import FooterContact from './FooterContact'
import FooterSocial from './FooterSocial'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className="!bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-16">
        <div className="md:col-span-5 flex flex-col space-y-8">
          <p className="mt-4 text-white opacity-75">
            Jsme kreativní reklamní agentura z Uherského Hradiště. Jsme připraveni pomoci vám a vaší
            firmě vizuálně růst.
          </p>

          <a
            href={`mailto:s5@s5.cz`}
            className="text-6xl font-black text-white hover:text-primary hover:underline animate-fade-up animate-once animate-ease-in"
          >
            s5@s5.cz
          </a>
        </div>

        <FooterContact />
      </div>

      <div className="container">
        <div className="flex flex-row items-center justify-between mt-12 py-8 text-base text-center opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="#fff" viewBox="0 0 807 170">
            <path
              d="M14.6 125.7c1-1.7 3.5-2 5-.5 4.5 4.8 9 8.5 13.5 11a31.9 31.9 0 0 0 16 4.7c5 0 9.1-1.3 12.3-4 3.2-2.7 4.8-6 4.8-10.2 0-4.5-1.4-8-4.1-10.4-2.8-2.5-9-5-18.8-7.6a61.1 61.1 0 0 1-28.3-14 33 33 0 0 1-8.3-23.8c0-13 4.4-23.7 13-31.9a47.8 47.8 0 0 1 34-12.3 69.1 69.1 0 0 1 40.5 12.2L83.6 63.2l-14-5.8a34.4 34.4 0 0 0-13.2-2.7c-4.4 0-8 1-10.9 3.2a10 10 0 0 0-4.2 8.2c0 3.5 1.3 6.2 3.7 8.2 2.5 2 7.2 4 14.2 5.9l1.7.5c15.1 4 25.1 8.6 29.9 13.5 3.2 3.3 5.7 7.3 7.3 12a46 46 0 0 1 2.5 15.6c0 14.5-4.7 26.1-14.2 34.9a53.7 53.7 0 0 1-38 13.2c-9.5 0-18.1-1.7-26-4.9A73.4 73.4 0 0 1 0 149.8l14.6-24ZM149 166.2v-104h-38.4V45.4c0-8.6 7-15.6 15.6-15.6h98.3v16.6c0 8.6-7 15.6-15.7 15.6h-22.7v104.1H149ZM241.8 30h37v66.3c0 9.8.3 16.8.8 21 .5 4.3 1.3 7.8 2.5 10.7a16 16 0 0 0 7.4 8c3.6 1.8 7.9 2.7 13 2.7 5 0 9.4-1 12.9-2.8 3.5-1.8 6-4.5 7.5-8 1.1-2.8 2-6.3 2.5-10.6.5-4.2.7-11.2.7-21V30h37v72c0 15-1 26-2.7 33.2a44.4 44.4 0 0 1-9.1 18.2 42 42 0 0 1-19.2 12.4c-8.1 2.8-18 4.2-29.6 4.2a92.6 92.6 0 0 1-29.7-4.2 42.7 42.7 0 0 1-19.2-12.4c-4.2-5-7.2-11.1-9-18.2-2-7.1-2.8-18.2-2.8-33.1V30Zm149.5 120.7V29.9h28.4c21.2 0 36.1 1 45 3 8.7 2 16.4 5.3 23 10 8.7 6 15.2 13.7 19.7 23.1a74 74 0 0 1 6.7 32.2 74 74 0 0 1-6.7 32.1 58.3 58.3 0 0 1-19.6 23.2 65 65 0 0 1-22.6 9.8c-8.4 2-21.5 3-39.3 3h-19c-8.6 0-15.6-7-15.6-15.7Zm36.8-15h6.2c14.6 0 25.2-3 32-8.9 6.7-6 10-15.5 10-28.5s-3.3-22.6-10-28.7c-6.8-6-17.4-9.1-32-9.1h-6.2v75.3Zm110.2 30.6V45.5c0-8.6 7-15.6 15.6-15.6h22v120.7c0 8.6-7 15.6-15.7 15.6h-21.9Z" />
            <path
              d="M806.6 0v.7c0 17.2-7.5 33.3-27 33.3h-63c-3.1 0-4.2 3.9-1.7 5.6a72.3 72.3 0 0 1 25.4 31.2 70.2 70.2 0 0 1 5.4 27.4 70.3 70.3 0 0 1-44.9 66.2 73.4 73.4 0 0 1-95.3-38.6 70.3 70.3 0 0 1 16-78.1 71.3 71.3 0 0 1 42.7-20.3v26.2a7.8 7.8 0 0 1-4.6 7.2c-4.7 2-8.6 4.9-12.2 9a41.8 41.8 0 0 0-10.2 28.5c0 11.8 3.5 21.4 10 29a32.8 32.8 0 0 0 25.8 11.2 32.8 32.8 0 0 0 25.5-11.4 42 42 0 0 0 10.1-28.8c0-11.4-3.4-21-10.3-28.6a34 34 0 0 0-12-8.7 7.8 7.8 0 0 1-4.7-7.2V21.5c0-12.5 4.7-21.5 21-21.5h104Z" />
          </svg>

          <div className="flex flex-row items-center justify-center space-x-4 text-center text-base normal-case">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink
                  key={i}
                  {...link}
                  className="text-white hover:text-white hover:underline"
                />
              )
            })}

            <CookieConsentComponent />
          </div>

          <FooterSocial />
        </div>
      </div>
    </footer>
  )
}
