import React from 'react'

import { Page } from '../../../../payload/payload-types'
import { CMSLink } from '../../Link'
import { Media } from '../../Media'
import RichText from '../../RichText'

import classes from './index.module.scss'

export const MediumImpactHero: React.FC<Page['hero']> = props => {
  const { title, subtitle, richText, media, links } = props

  return (
    <div className={classes.hero}>
      {typeof media === 'object' && <Media className={classes.media} resource={media} />}

      <div className={classes.content}>
        {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
        {title && <h2 className={classes.title}>{title}</h2>}
        {richText && <RichText className={classes.richText} content={richText} />}

        {Array.isArray(links) && (
          <ul className={classes.links}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink className={classes.link} {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
