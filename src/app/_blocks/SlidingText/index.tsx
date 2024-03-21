import React from 'react'

import { Page } from '../../../payload/payload-types'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'slidingText' }>

export const SlidingText: React.FC<
  Props & {
    id?: string
  }
> = ({ first, second, type }) => {
  const typeClass = type === 'outline' ? classes.outline : classes.solid

  return (
    <div className={classes.slidingText}>
      <div className={classes.slidingTextInner}>
        <div className={[classes.slidingTextContent, typeClass].join(' ')}>{first}</div>
        <div className={[classes.slidingTextContent, typeClass].join(' ')}>{second}</div>
      </div>
    </div>
  )
}
