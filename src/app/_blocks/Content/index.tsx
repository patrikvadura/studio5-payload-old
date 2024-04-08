import React from 'react'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { invertBackground, reverse, columns } = props

  return (
    <div className={`${invertBackground ? '!bg-secondary' : ''} py-16`}>
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { media, enableLink, richText, link, size } = col

              const sizes = {
                full: 'col-span-12',
                oneFourth: 'col-span-12 md:col-span-6 lg:col-span-3',
                oneThird: 'col-span-12 lg:col-span-4',
                half: 'col-span-12 lg:col-span-6',
                twoThirds: 'col-span-12 lg:col-span-8',
                threeFourth: 'col-span-12 lg:col-span-9',
              }

              const tailwindClass = sizes[size]

              const imageAlignmentClass =
                size === 'full' ? 'flex flex-col md:flex-row items-center md:space-x-16' : ''

              const imageHeightClass = size === 'full' ? '!w-full h-96' : 'h-64'

              const reverseClass =
                reverse === true
                  ? size === 'full'
                    ? 'flex-col-reverse md:flex-row-reverse'
                    : 'flex flex-col-reverse'
                  : ''

              const reverseImageClass =
                reverse === true ? (size === 'full' ? 'mt-8 md:mt-0' : 'mt-8') : 'my-8'

              return (
                <div
                  key={index}
                  className={[tailwindClass, imageAlignmentClass, reverseClass]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="md:basis-1/2">
                    {media && typeof media === 'object' && (
                      <Media
                        className={[classes.image, imageHeightClass, reverseImageClass]
                          .filter(Boolean)
                          .join(' ')}
                        resource={media}
                        priority
                      />
                    )}
                  </div>

                  <div className={`${reverse === true ? 'ms-0' : ''} md:basis-1/2`}>
                    <RichText
                      className={invertBackground ? 'prose-headings:!text-white !text-white' : ''}
                      content={richText}
                    />
                    {enableLink && (
                      <CMSLink
                        className={`${invertBackground ? '!text-white' : ''} mt-4`}
                        {...link}
                      />
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
