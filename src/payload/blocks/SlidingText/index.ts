import type { Block } from 'payload/types'

export const SlidingText: Block = {
  slug: 'slidingText',
  labels: {
    singular: 'Rotující text',
    plural: 'Rotující texty',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1711130449/Payload/Blocks/block_sliding-text_ndsnyt.webp',
  fields: [
    {
      name: 'first',
      label: 'První text',
      type: 'text',
      required: true,
    },
    {
      name: 'second',
      label: 'Druhý text',
      type: 'text',
      required: true,
    },
    {
      type: 'select',
      name: 'type',
      label: 'Typ',
      required: false,
      defaultValue: 'outline',
      options: [
        {
          label: 'Obrys textu',
          value: 'outline',
        },
        {
          label: 'Výplň textu',
          value: 'solid',
        },
      ],
    },
  ],
}
