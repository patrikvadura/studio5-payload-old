import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const BeforeNavLinks: React.FC = () => {
  return (
    <div className="mb-4 pb-4 border-b-2">
      <Link href="/" className="flex flex-row items-center space-x-2 hover:underline">
        <Icon icon="mage:preview" className="text-2xl" />
        <h4 className="text-base font-semibold m-0">Náhled webu</h4>
      </Link>
    </div>
  )
}

export default BeforeNavLinks
