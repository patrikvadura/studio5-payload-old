'use client'
import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Item = {
  title: string
  richText: string
  links: any
}

type Props = Extract<Page['layout'][0], { blockType: 'service' }> & {
  title: string
  subtitle: string
  mainLinks: any
  items: Item[]
}
export const Service: React.FC<
  Props & {
    id?: string
  }
> = ({ title, subtitle, mainLinks, items }) => {
  return (
    <>
      <section className={classes.service}>
        <div className="container px-8 md:px-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-24 md:mb-8">
            <div className="max-w-screen-md">
              <div className={classes.subtitle}>{subtitle}</div>
              <h2 className={`${classes.title} !leading-[1.3]`}>{title}</h2>
            </div>

            {(mainLinks || []).map(({ link }, i) => {
              return <CMSLink key={i} className="text-white hover:text-white" {...link} />
            })}
          </div>

          <div className={classes.cards}>
            {items.map((item, index) => (
              <div key={index} className={classes.cardsItem}>
                <div className="w-[120px]">
                  {(item.links || []).map(({ link }, a) => {
                    return (
                      <Link key={a} href={link.url}>
                        <div className={classes.cardsItemNumber}>0{index + 1}</div>
                      </Link>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between space-x-16">
                  <div className="py-8 border-b-1 border-white/50">
                    <div className="space-y-4">
                      {(item.links || []).map(({ link }, a) => {
                        return (
                          <Link key={a} className="hover:text-primary" href={link.url}>
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                          </Link>
                        )
                      })}
                      <RichText className="mb-0 text-white opacity-75" content={item.richText} />
                    </div>
                  </div>

                  <div>
                    {(item.links || []).map(({ link }, a) => {
                      return <CMSLink key={a} className={classes.link} {...link} />
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
