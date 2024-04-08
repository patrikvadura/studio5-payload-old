import type { Block } from 'payload/types'

import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const Service: Block = {
  slug: 'service',
  labels: {
    singular: 'Seznam služeb',
    plural: 'Seznamy služeb',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759856/Payload/Blocks/block_features_ki5swg.webp',
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
    linkGroup({
      overrides: {
        name: 'mainLinks',
        maxRows: 1,
      },
    }),
    {
      name: 'items',
      label: 'Položky',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Nadpis',
          type: 'text',
          required: true,
        },
        richText(),
        linkGroup({
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
  ],
}
