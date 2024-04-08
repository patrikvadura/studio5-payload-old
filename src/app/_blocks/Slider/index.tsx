'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Page } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Slide = {
  title: string
  subtitle: string
  richText: string
  media: any
}

type Props = Extract<Page['layout'][0], { blockType: 'slider' }> & {
  slides: Slide[]
}
export const Slider: React.FC<
  Props & {
    id?: string
  }
> = ({ slides }) => {
  return (
    <>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.sliderNext',
          prevEl: '.sliderPrev',
        }}
        pagination={{
          el: '.sliderPagination',
          clickable: true,
          type: 'fraction',

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> /
                     <span class="${totalClass}"></span>`
          },
        }}
        className={`${classes.slider} py-16`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={classes.swiperSlide}>
            <div className={classes.about}>
              {slide.media && typeof slide.media === 'object' && (
                <Media resource={slide.media} className={classes.background} priority />
              )}
              <div className="container">
                <div className={classes.textWrapper}>
                  <div className={classes.subtitle}>{slide.subtitle}</div>
                  <h2 className={classes.title}>{slide.title}</h2>
                  <RichText className="mb-0" content={slide.richText} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className={classes.sliderControll}>
            <div className={`sliderPagination ${classes.sliderPagination}`}></div>
            <div className={classes.sliderNavigationWrap}>
              <div style={{ cursor: 'pointer' }} className={`${classes.sliderPrev} sliderPrev`}>
                <Icon icon="material-symbols-light:arrow-left-alt" className="text-5xl" />
              </div>
              <div style={{ cursor: 'pointer' }} className={`${classes.sliderNext} sliderNext`}>
                <Icon icon="material-symbols-light:arrow-right-alt" className="text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  )
}
