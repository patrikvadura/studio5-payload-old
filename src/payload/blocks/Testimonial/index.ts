import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const Testimonial: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Hodnocení klientů',
    plural: 'Hodnocení klientů',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759878/Payload/Blocks/block_testimonial_wagqii.webp',
  fields: [
    {
      name: 'title',
      label: 'Nadpis sekce',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      label: 'Položky',
      type: 'array',
      minRows: 1,
      fields: [
        richText(),
        {
          name: 'name',
          label: 'Jméno klienta',
          type: 'text',
          required: true,
        },
        {
          name: 'other',
          label: 'Pozice / Firma',
          type: 'text',
          required: false,
        },
        {
          name: 'media',
          label: 'Profilová fotografie',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
