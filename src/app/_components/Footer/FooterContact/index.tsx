'use client'
import React from 'react'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className="col-lg-6 offset-lg-1">
      <ul className="cs_footer_contact_list cs_mp0">
        <li>
          <Icon icon="tabler:map-pin" className="!text-white text-2xl mb-2" />
          <span className="font-bold">STUDIO 5, v.o.s.</span> <br />
          Sokolovská 418, Uherské Hradiště, 68601
        </li>
        <li>
          <Icon icon="tabler:phone" className="!text-white text-2xl mb-2" />
          +420 572 554 247 <br />
          +420 572 554 248
        </li>
        <li>
          <Icon icon="tabler:id" className="!text-white text-2xl mb-2" />
          IČO: 63493365 <br />
          DIČ: CZ63493365
        </li>
      </ul>
    </div>
  )
}
