'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

import UseSticky from '../../../hooks/UseSticky'

import classes from './index.module.scss'

const Index = () => {
  const { sticky }: { sticky: boolean } = UseSticky()

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  return (
    <>
      <span
        className={`${classes.scrollToTop} ${sticky ? classes.scrollToTopShow : ''}`}
        onClick={scrollTop}
      >
        <Icon icon="material-symbols:arrow-upward" />
      </span>
    </>
  )
}

export default Index
