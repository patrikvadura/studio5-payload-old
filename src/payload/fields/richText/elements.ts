import type { RichTextElement } from '@payloadcms/richtext-slate/dist/types'

import label from './label'
import largeBody from './largeBody'

const elements: RichTextElement[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'blockquote',
  'link',
  'ol',
  'ul',
  'textAlign',
  'indent',
  'relationship',
  'upload',
  'textAlign',
  largeBody,
  label,
]

export default elements
