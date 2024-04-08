'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Page } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'brands' }>

export const Brands: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { invertBackground, title, items } = props

  return (
    <div className={`${invertBackground ? '!bg-secondary' : ''} py-16`}>
      <div className="container px-4 md:px-0">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          autoplay={{
            pauseOnMouseEnter: false,
            delay: 1000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          keyboard={true}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mt-8 py-16"
        >
          {items &&
            items.length > 0 &&
            items.map((item, index) => {
              const { media, size } = item

              const sizes = {
                small: 'w-20',
                normal: 'w-32',
                large: 'w-48',
              }

              const sizeClass = sizes[size] || sizes.normal

              return (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    {media && typeof media === 'object' && (
                      <Media
                        className={[classes.image, sizeClass].filter(Boolean).join(' ')}
                        resource={media}
                        priority
                      />
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}
