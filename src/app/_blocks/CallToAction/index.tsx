import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, richText, invertBackground }) => {
  return (
    <div
      className={[classes.callToAction, invertBackground && classes.invert]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container py-24 md:py-32 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 lg:col-span-3">
          <RichText className={classes.richText} content={richText} />
        </div>

        <div className={`${classes.linkGroup} md:col-span-2 lg:col-span-1`}>
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} {...link} invert={invertBackground} />
          })}
        </div>
      </div>
    </div>
  )
}
