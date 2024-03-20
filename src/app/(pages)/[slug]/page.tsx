import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import HeroHomeOne from '../../../components/hero/HeroHomeOne'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import { Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'
import { generateMeta } from '../../_utilities/generateMeta'

import AboutHomeOne from '../../../components/about/AboutHomeOne'
import AwardsHomeOne from '../../../components/awards/AwardsHomeOne'
import BlogHomeOne from '../../../components/blog/BlogHomeOne'
import BrandHomeOne from '../../../components/brand/BrandHomeOne'
import MarqueeAreaHomeOne from '../../../components/brand/MarqueeAreaHomeOne'
import FunFactHomeOne from '../../../components/funfact/FunFactHomeOne'
import PortfolioHomeOne from '../../../components/portfolio/PortfolioHomeOne'
import ServiceHomeOne from '../../../components/service/ServiceHomeOne'
import SubscribeHomeOne from '../../../components/subscribe/SubscribeHomeOne'
import Testimonial from '../../../components/testimonial/Testimonial'
import FooterOne from '../../../layouts/footers/FooterOne'
import Wrapper from '../../../layouts/Wrapper'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // console.error(error)
  }

  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  return (
    <React.Fragment>
      <Wrapper>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Hero {...hero} />
              <Blocks
                blocks={layout}
                disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
              />
              <MarqueeAreaHomeOne />
              <AboutHomeOne />
              <ServiceHomeOne />
              {/*<PortfolioHomeOne />*/}
              {/*<AwardsHomeOne />*/}
              {/*<Testimonial />*/}
              <FunFactHomeOne />
              {/*<BlogHomeOne />*/}
              <SubscribeHomeOne />
              {/*<BrandHomeOne style_2={false} />*/}
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page) {
    if (slug === 'home') page = staticHome
  }

  return generateMeta({ doc: page })
}
