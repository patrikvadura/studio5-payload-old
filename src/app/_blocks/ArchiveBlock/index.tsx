import React from 'react'

import { CollectionArchive } from '../../_components/CollectionArchive'
import { CollectionSlider } from '../../_components/CollectionArchive/Slider'
import RichText from '../../_components/RichText'
import { ArchiveBlockProps } from './types'

import classes from './index.module.scss'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = props => {
  const {
    title,
    subtitle,
    introContent,
    displayType,
    relationTo,
    populateBy,
    limit,
    populatedDocs,
    populatedDocsTotal,
    selectedDocs,
    categories,
  } = props

  const CollectionComponent = displayType === 'slider' ? CollectionSlider : CollectionArchive

  return (
    <div>
      <div className="py-16">
        {(title || subtitle || introContent) && (
          <div className="container my-16">
            <div className="max-w-screen-md mx-auto text-center">
              {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
              {title && <h2 className={classes.title}>{title}</h2>}
              {introContent && <RichText content={introContent} />}
            </div>
          </div>
        )}

        <CollectionComponent
          populateBy={populateBy}
          relationTo={relationTo}
          populatedDocs={populatedDocs}
          populatedDocsTotal={populatedDocsTotal}
          selectedDocs={selectedDocs}
          categories={categories}
          limit={limit}
          sort="-publishedAt"
        />
      </div>
    </div>
  )
}
