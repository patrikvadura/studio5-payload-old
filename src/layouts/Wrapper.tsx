'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

import DarkLight from '../components/common/DarkLight'
import Index from '../components/common/MouseMove'
import ScrollToTop from '../components/common/ScrollToTop'
import { ScrollSmoother } from '../plugins'
import animationTitle from '../utils/animationTitle'
import { buttonAnimation } from '../utils/buttonAnimation'
import { scrollSmother } from '../utils/scrollSmother'
gsap.registerPlugin(ScrollSmoother)

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      })
    }
  }, [])

  useEffect(() => {
    // buttonAnimation()
    // animationTitle()
    scrollSmother()
  }, [])

  return (
    <>
      <Index />
      {children}
      <ScrollToTop />
      <DarkLight />
    </>
  )
}

export default Wrapper
