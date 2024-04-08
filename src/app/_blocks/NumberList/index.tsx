import React from 'react'

import { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import Count from './Count'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'numberList' }>

export const NumberList: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { invertBackground, style, columns } = props

  return (
    <div className={invertBackground ? '!bg-secondary' : ''}>
      <div className="container py-24 px-4 md:px-0">
        <div className="grid grid-cols-12 gap-x-16 gap-y-16">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { richText, number, extension, title, sizeNumber, sizeField } = col

              const sizeFieldClass = {
                oneFourth: 'col-span-12 md:col-span-6 lg:col-span-3',
                oneThird: 'col-span-12 lg:col-span-4',
              }

              const sizeValueClass = {
                small: 'text-2xl font-black',
                default: 'text-3xl font-black',
                medium: 'text-5xl font-black',
                large: 'text-[90px] font-black',
              }

              const styleFieldClass = {
                outlinePrimary: `${invertBackground ? classes.textWhite : classes.textPrimary}`,
                outlineSecondary: `${invertBackground ? classes.textWhite : classes.textSecondary}`,
                solidPrimary: `${invertBackground ? classes.textWhite : classes.textPrimary}`,
                solidSecondary: `${invertBackground ? classes.textWhite : classes.textSecondary}`,
              }

              const styleValueClass = {
                outlinePrimary: `${classes.text} text-transparent ${classes.strokeTextPrimary}`,
                outlineSecondary: `${classes.text} text-transparent ${
                  invertBackground ? classes.strokeTextWhite : classes.strokeTextSecondary
                }`,
                solidPrimary: `${classes.text} !text-primary`,
                solidSecondary: `${classes.text} ${
                  invertBackground ? 'text-white' : 'text-secondary'
                }`,
              }

              const columnSizeClass = sizeFieldClass[sizeField]
              const valueSizeClass = sizeValueClass[sizeNumber]
              const columnStyleClass = styleFieldClass[style] || classes.textSecondary
              const valueStyleClass =
                styleValueClass[style] || `${classes.text} ${classes.strokeTextSecondary}`

              return (
                <div key={index} className={[columnSizeClass].filter(Boolean).join(' ')}>
                  <div className="cs_funfact cs_style1">
                    <div className="flex space-x-4 amin_auto_count">
                      <Count
                        number={number}
                        text={extension}
                        className={[valueStyleClass, valueSizeClass].filter(Boolean).join(' ')}
                      />
                    </div>
                    <div className={columnStyleClass}>{title}</div>
                    <RichText
                      className={invertBackground ? 'prose-headings:!text-white !text-white' : ''}
                      content={richText}
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
