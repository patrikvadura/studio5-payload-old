'use client'
import React from 'react'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="text-white opacity-75">
        <Icon icon="tabler:map-pin" className="text-2xl mb-2" />
        <span className="font-bold">STUDIO 5, v.o.s.</span> <br />
        Sokolovská 418, Uherské Hradiště, 68601
      </div>

      <div className="text-white opacity-75">
        <Icon icon="tabler:phone" className="text-2xl mb-2" />
        +420 572 554 247 <br />
        +420 572 554 248
      </div>

      <div className="text-white opacity-75">
        <Icon icon="tabler:id" className="text-2xl mb-2" />
        IČO: 63493365 <br />
        DIČ: CZ63493365
      </div>
    </div>
  )
}
