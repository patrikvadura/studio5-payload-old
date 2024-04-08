import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

const itemFields: Field[] = [
  {
    name: 'size',
    label: 'Velikost',
    type: 'select',
    defaultValue: 'normal',
    options: [
      {
        value: 'small',
        label: 'Malé',
      },
      {
        value: 'normal',
        label: 'Normální',
      },
      {
        value: 'large',
        label: 'Velké',
      },
    ],
  },
  {
    name: 'media',
    label: 'Logo',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
]

export const Brands: Block = {
  slug: 'brands',
  labels: {
    singular: 'Loga klientů',
    plural: 'Loga klientů',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759861/Payload/Blocks/block_logos_ldbqf4.webp',
  fields: [
    invertBackground,
    {
      name: 'title',
      label: 'Nadpis',
      type: 'text',
    },
    {
      name: 'items',
      label: 'Položka',
      type: 'array',
      fields: itemFields,
    },
  ],
}
