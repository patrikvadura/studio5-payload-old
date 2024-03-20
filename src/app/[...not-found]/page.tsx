'use client'

import React from 'react'

import Error from '../../components/error'
import Wrapper from '../../layouts/Wrapper'

const index = () => {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Error />
          </main>
        </div>
      </div>
    </Wrapper>
  )
}

export default index
