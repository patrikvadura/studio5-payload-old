import React from 'react'
import { Props } from 'payload/components/views/Cell'

import classes from './index.module.scss'

const Cell: React.FC<Props> = props => {
  const { cellData } = props

  if (!cellData) return null

  return <div className={classes.chip} style={{ backgroundColor: cellData as string }} />
}

export default Cell
