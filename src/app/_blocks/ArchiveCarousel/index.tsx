import React from 'react'

import { CollectionArchive } from '../../_components/CollectionArchive/Slider'
import RichText from '../../_components/RichText'
import { ArchiveCarouselProps } from './types'

import classes from './index.module.scss'

export const ArchiveCarousel: React.FC<
  ArchiveCarouselProps & {
    id?: string
  }
> = props => {
  const {
    title,
    subtitle,
    introContent,
    relationTo,
    populateBy,
    limit,
    populatedDocs,
    populatedDocsTotal,
    selectedDocs,
    categories,
  } = props

  return (
    <div>
      <div className="py-16">
        <div className="container my-16">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className={classes.subtitle}>{subtitle}</div>
              <h2 className={classes.title}>{title}</h2>
              {introContent && <RichText content={introContent} />}
            </div>
          </div>
        </div>

        <CollectionArchive
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
