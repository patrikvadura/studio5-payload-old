'use client'

import React, { Fragment } from 'react'
import { Card, CardHeader } from '@nextui-org/react'
import Link from 'next/link'

import { Post, Project } from '../../../payload/payload-types'
import { Media } from '../Media'

import classes from './index.module.scss'

export const CardItem: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'projects' | 'posts'
  doc?: Project | Post
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const {
    relationTo,
    showCategories,
    title: titleFromProps,
    doc,
    className,
    orientation = 'vertical',
  } = props

  const { slug, title, categories, meta } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <Link href={href}>
      <Card className="!bg-secondary h-[400px] group !relative">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start space-y-4 p-8">
          {showCategories && hasCategories && (
            <div className="text-white">
              {showCategories && hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <Fragment key={index}>
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}

          {titleToUse && (
            <h3 className="text-white font-bold text-3xl">
              {titleToUse}
            </h3>
          )}

          {description && (
            <div className="text-white">
              {sanitizedDescription.length > 32
                ? `${sanitizedDescription.substring(0, 60)}...`
                : sanitizedDescription}
            </div>
          )}
        </CardHeader>
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            imgClassName={`${classes.image} group-hover:scale-[110%] opacity-75 transition !duration-[.6s] ease-in-out`}
            // @ts-ignore
            resource={metaImage}
            fill
          />
        )}
      </Card>
    </Link>
  )
}
