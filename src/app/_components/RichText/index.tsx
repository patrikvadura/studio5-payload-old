import React from 'react'

import serialize from './serialize'

import classes from './index.module.scss'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={[`prose prose-h2:text-5xl prose-p:opacity-75 max-w-none`, className]
        .filter(Boolean)
        .join(' ')}
    >
      {serialize(content)}
    </div>
  )
}

export default RichText
