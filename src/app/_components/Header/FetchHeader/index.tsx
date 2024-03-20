'use client'

import { useEffect, useState } from 'react'

import { fetchHeader } from '../../../_api/fetchGlobals'
import HeaderComponent from '../index'

const FetchHeader = () => {
  const [header, setHeader] = useState(null)

  useEffect(() => {
    fetchHeader().then(header => {
      setHeader(header)
    })
  }, [])

  return header ? <HeaderComponent header={header} /> : null
}

export default FetchHeader
