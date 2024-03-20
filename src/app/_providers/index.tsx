'use client'

import React, { useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { gsap } from 'gsap'

import { ScrollSmoother } from '../../plugins'
import { scrollSmother } from '../../utils/scrollSmother'
import MouseMove from '../_components/MouseMove'
import ScrollToTop from '../_components/ScrollToTop'
import { AuthProvider } from './Auth'

gsap.registerPlugin(ScrollSmoother)

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
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
    scrollSmother()
  }, [])

  return (
    <NextUIProvider>
      <AuthProvider>
        <MouseMove />
        {children}
        <ScrollToTop />
      </AuthProvider>
    </NextUIProvider>
  )
}
