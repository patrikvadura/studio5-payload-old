'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { Card, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './index.module.scss'

interface DataType {
  title: string
  category: string
}
;[]

const portfolio_slider: DataType[] = [
  {
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
  },
  {
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
  },
  {
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
  },
  {
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
  },
  {
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
  },
  {
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
  },
]

const Portfolio = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="container my-16">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className={classes.subtitle}>Případové studie</div>
              <h2 className={classes.title}>Zde promlouvá naše práce. Příběhy úspěchu.</h2>
            </div>
          </div>
        </div>

        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="1"
          modules={[Navigation]}
          navigation={{
            nextEl: '.sliderNext',
            prevEl: '.sliderPrev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="container mb-16"
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link href="#">
                  <Card className="bg-secondary h-[400px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start space-y-4">
                      <p className="text-white/60">{item.category}</p>
                      <h4 className="text-white font-bold text-3xl">{item.title}</h4>
                    </CardHeader>
                    <Image
                      removeWrapper
                      isZoomed
                      alt="Card background"
                      className="!opacity-75 z-0 w-full h-full object-cover"
                      src="/assets/img/case_study_2.jpg"
                    />
                  </Card>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          <div className={classes.slider}>
            <div style={{ cursor: 'pointer' }} className={`${classes.sliderPrev} sliderPrev`}>
              <Icon icon="material-symbols-light:arrow-left-alt" className="text-5xl" />
            </div>
            <div style={{ cursor: 'pointer' }} className={`${classes.sliderNext} sliderNext`}>
              <Icon icon="material-symbols-light:arrow-right-alt" className="text-5xl" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default Portfolio
