import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Výzva k akci',
    plural: 'Výzvy k akci',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710625573/Payload/Blocks/block_cta_tpvntg.webp',
  fields: [
    invertBackground,
    richText(),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
