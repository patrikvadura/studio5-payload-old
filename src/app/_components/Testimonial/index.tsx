'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Page } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Item = {
  richText: string
  name: string
  other: string
  media: any
}

type Props = Extract<Page['layout'][0], { blockType: 'testimonial' }> & {
  title: string
  items: Item[]
}
export const Testimonial: React.FC<
  Props & {
    id?: string
  }
> = ({ title, items }) => {
  return (
    <>
      <section className="!bg-secondary">
        <div className={classes.testimonial}>
          <h2 className={classes.title}>{title}</h2>
          <Swiper
            loop={true}
            speed={2000}
            autoplay={true}
            modules={[Autoplay]}
            pagination={{
              el: '.cs_pagination',
              clickable: true,
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="flex flex-col items-center text-center">
                  <Icon icon="material-symbols:format-quote" className={classes.quoteIcon} />

                  <RichText className="mb-0" content={`" ${item.richText} "`} />

                  <div className={classes.meta}>
                    <Media resource={item.media} className={classes.avatar} priority />

                    <div className={classes.avatarInfo}>
                      <h3>{item.name}</h3>
                      <div className="opacity-50">{item.other}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="cs_pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Testimonial
