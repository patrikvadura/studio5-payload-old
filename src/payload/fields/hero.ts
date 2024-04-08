import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
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
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
    },
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'none',
      options: [
        {
          label: 'Žádný',
          value: 'none',
        },
        {
          label: 'Velká sekce s obrázkem',
          value: 'highImpact',
        },
        {
          label: 'Malá sekce s obrázkem',
          value: 'mediumImpact',
        },
        {
          label: 'Pouze text',
          value: 'lowImpact',
        },
      ],
    },
    richText({
      required: false,
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
    {
      type: 'select',
      name: 'imageStyle',
      label: 'Styl obrázku',
      required: false,
      defaultValue: 'none',
      options: [
        {
          label: 'Žádný',
          value: 'none',
        },
        {
          label: 'Zprůhlednění',
          value: 'opacity',
        },
        {
          label: 'Rozostření',
          value: 'blur',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['highImpact'].includes(type),
      },
    },
  ],
}
