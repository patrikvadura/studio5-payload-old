'use client'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './index.module.scss'

interface DataType {
  img: string
  sub_title: string
  title: string
  des: string
}
;[]

const about_slider: DataType[] = [
  {
    img: '/assets/img/about_img.jpg',
    sub_title: 'Proč zrovna my?',
    title: `Vaše starosti máme na svých bedrech`,
    des: `Poskytujeme komplexní služby v oblasti reklamy, což znamená, že připravíme vše od grafického návrhu až po výrobu. Ovšem na prvním místě je kreativita, nápad a efektivita reklamy, co vám přinese očekávané výsledky.`,
  },
  {
    img: '/assets/img/about_img.jpg',
    sub_title: 'Our Mission',
    title: `Unleashing Creativity to Transform Your Business`,
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital.`,
  },
  {
    img: '/assets/img/about_img.jpg',
    sub_title: 'Our Mission',
    title: `Unleashing Creativity to Transform Your Business`,
    des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digital.`,
  },
]

const AboutComponent = () => {
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
            return `<span class="${currentClass}"></span>
             ${' / '}
             <span class="${totalClass}"></span>`
          },
        }}
        className={`${classes.slider} mt-16`}
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className={classes.swiperSlide}>
            <div className={classes.about}>
              <div
                className={classes.background}
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className={classes.textWrapper}>
                  <div className={classes.subtitle}>{item.sub_title}</div>
                  <h2 className={classes.title}>{item.title}</h2>
                  <p className="mb-0">{item.des}</p>
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

export default AboutComponent
