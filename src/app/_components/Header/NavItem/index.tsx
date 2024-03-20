'use client'

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'

export const NavItem: React.FC<{ link: Header['navItems'][0]['link']; className?: string }> = ({
  link,
  className,
}) => {
  let href: string | undefined = undefined
  if (link) {
    if (link.type === 'reference' && link.reference?.value) {
      if (typeof link.reference.value === 'string') {
        href = link.reference.value
        // @ts-ignore
      } else if ('slug' in link.reference.value) {
        href = link.reference.value.slug
      }
    } else if (link.type === 'custom') {
      href = link.url || undefined
    }
  }

  return href ? (
    <Link href={href} className={className}>
      {link.label}
    </Link>
  ) : null
}
