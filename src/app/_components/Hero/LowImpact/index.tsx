import React from 'react'

import { Page } from '../../../../payload/payload-types'

import classes from './index.module.scss'

export const LowImpactHero: React.FC<Page['hero']> = ({ title }) => {
  return (
    <div className={classes.hero}>
      <div className={`${classes.content} animate-fade-up animate-once animate-ease-in`}>
        {title && <h2 className={classes.title}>{title}</h2>}
      </div>
    </div>
  )
}
