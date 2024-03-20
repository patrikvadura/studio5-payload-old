import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    label: 'Velikost',
    type: 'select',
    defaultValue: 'full',
    options: [
      {
        value: 'oneFourth',
        label: '1/4 šířky',
      },
      {
        value: 'oneThird',
        label: '1/3 šířky',
      },
      {
        value: 'half',
        label: '1/2 šířky',
      },
      {
        value: 'twoThirds',
        label: '2/3 šířky',
      },
      {
        value: 'threeFourth',
        label: '3/4 šířky',
      },
      {
        value: 'full',
        label: 'Plná šířka',
      },
    ],
  },
  richText(),
  {
    name: 'media',
    label: 'Obrázek / ikona',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
  {
    name: 'enableLink',
    label: 'Přidat odkaz',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Obsah',
    plural: 'Obsah',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710625569/Payload/Blocks/block_content_kjylzr.webp',
  fields: [
    invertBackground,
    {
      name: 'columns',
      label: 'Rozložení',
      type: 'array',
      fields: columnFields,
    },
  ],
}
