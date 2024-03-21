import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import AwardsHomeOne from '../../../components/awards/AwardsHomeOne'
import BlogHomeOne from '../../../components/blog/BlogHomeOne'
import BrandHomeOne from '../../../components/brand/BrandHomeOne'
import MarqueeAreaHomeOne from '../../../components/brand/MarqueeAreaHomeOne'
import FunFactHomeOne from '../../../components/funfact/FunFactHomeOne'
import HeroHomeOne from '../../../components/hero/HeroHomeOne'
import ServiceHomeOne from '../../../components/service/ServiceHomeOne'
import Testimonial from '../../../components/testimonial/Testimonial'
import { Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { Slider } from '../../_blocks/Slider'
import About from '../../_components/about'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'
import Portfolio from '../../_components/Portfolio'
import { generateMeta } from '../../_utilities/generateMeta'

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
      <Hero {...hero} />
      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />

      {/*<ServiceHomeOne />*/}
      {/*<AwardsHomeOne />*/}
      {/*<Testimonial />*/}
      {/*<FunFactHomeOne />*/}
      {/*<BlogHomeOne />*/}
      {/*<BrandHomeOne style_2={false} />*/}
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
  } catch (error) {}

  if (!page) {
    if (slug === 'home') page = staticHome
  }

  return generateMeta({ doc: page })
}
