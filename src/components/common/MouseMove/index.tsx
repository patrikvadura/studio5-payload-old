import React, { useEffect, useRef } from 'react'

import classes from './index.module.scss'

const Index = () => {
  const cursor1Ref = useRef(null)
  const cursor2Ref = useRef(null)

  const mousemoveHandler = e => {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      })

      // Main Cursor Moving
      tl.to(cursor1Ref.current, {
        ease: 'power2.out',
      }).to(
        cursor2Ref.current,
        {
          ease: 'power2.out',
        },
        '-=0.4',
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mousemoveHandler)
    return () => {
      document.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [])

  return (
    <>
      <div ref={cursor1Ref} className={[classes.cursor, classes.cursor_1].join(' ')}></div>
      <div ref={cursor2Ref} className={[classes.cursor, classes.cursor_2].join(' ')}></div>
    </>
  )
}

export default Index
