import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'Slider',
    plural: 'Slidery',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759870/Payload/Blocks/block_slider_rmbnk9.webp',
  fields: [
    {
      name: 'slides',
      label: 'Slidy',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Nadpis sekce',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          label: 'Podnadpis',
          type: 'text',
          required: false,
        },
        richText(),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
