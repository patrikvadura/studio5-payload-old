'use client'
import React from 'react'
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
        className={`${classes.slider}`}
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
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className={`${classes.sliderNext} sliderNext`}>
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  )
}
