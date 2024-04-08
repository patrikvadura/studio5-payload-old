import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

const numberListFields: Field[] = [
  {
    name: 'sizeField',
    label: 'Velikost pole',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneFourth',
        label: '1/4 šířky',
      },
      {
        value: 'oneThird',
        label: '1/3 šířky',
      },
    ],
  },
  {
    name: 'sizeNumber',
    label: 'Velikost čísla',
    type: 'select',
    defaultValue: 'default',
    options: [
      {
        value: 'small',
        label: 'Malá',
      },
      {
        value: 'default',
        label: 'Normální',
      },
      {
        value: 'medium',
        label: 'Velká',
      },
      {
        value: 'large',
        label: 'Největší',
      },
    ],
  },
  {
    name: 'number',
    label: 'Číslo',
    type: 'number',
    required: true,
  },
  {
    name: 'extension',
    label: 'Přípona za číslem',
    type: 'text',
    required: false,
    admin: {
      description: 'Přípona za textem je nepoviná. Slouží např. pro nastavení jednotky k číslu.',
    },
  },
  {
    name: 'title',
    label: 'Nadpis',
    type: 'text',
    required: false,
  },
  richText({
    required: false,
  }),
]

export const NumberList: Block = {
  slug: 'numberList',
  labels: {
    singular: 'Významná čísla',
    plural: 'Významná čísla',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1711130445/Payload/Blocks/block_numbers_xcvbbz.webp',
  fields: [
    invertBackground,
    {
      name: 'style',
      label: 'Styl',
      type: 'select',
      defaultValue: 'outlineSecondary',
      options: [
        {
          value: 'outlinePrimary',
          label: 'Obrys / primární',
        },
        {
          value: 'outlineSecondary',
          label: 'Obrys / sekundární',
        },
        {
          value: 'solidPrimary',
          label: 'Plná výplň / primární',
        },
        {
          value: 'solidSecondary',
          label: 'Plná výplň / sekundární',
        },
      ],
      admin: {
        description: 'Styl určuje vzhled čísla a barevné schéma.',
      },
    },
    {
      name: 'columns',
      label: 'Rozložení',
      type: 'array',
      fields: numberListFields,
      minRows: 3,
    },
  ],
}
