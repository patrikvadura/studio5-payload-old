import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Výpis příspěvků',
    plural: 'Výpisy příspěvků',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759851/Payload/Blocks/block_archive_s2hhtn.webp',
  fields: [
    {
      name: 'title',
      label: 'Nadpis sekce',
      type: 'text',
      required: false,
    },
    {
      name: 'subtitle',
      label: 'Podnadpis',
      type: 'text',
      required: false,
    },
    richText({
      name: 'introContent',
      label: 'Úvodní popis',
      required: false,
    }),
    {
      type: 'select',
      name: 'displayType',
      label: 'Typ zobrazení',
      defaultValue: 'grid',
      options: [
        {
          label: 'Běžný výpis',
          value: 'grid',
        },
        {
          label: 'Slider',
          value: 'slider',
        },
      ],
    },
    {
      name: 'populateBy',
      label: 'Zdroj obsahu',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Kolekce',
          value: 'collection',
        },
        {
          label: 'Individuální výběr',
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: 'Výběr kolekce',
      defaultValue: 'posts',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: 'Příspěvky',
          value: 'posts',
        },
        {
          label: 'Projekty',
          value: 'projects',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'categories',
      label: 'Výběr kategorie',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'limit',
      label: 'Limit',
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: 'Výběr',
      relationTo: ['posts', 'projects'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: 'Předvyplněné dokumenty',
      relationTo: ['posts', 'projects'],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'Toto pole je automaticky vyplněno po přečtení.',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'populatedDocsTotal',
      label: 'Celkem předvyplněné dokumenty',
      admin: {
        step: 1,
        disabled: true,
        description: 'Toto pole je automaticky vyplněno po přečtení.',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
  ],
}
