import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const FormBlock: Block = {
  slug: 'formBlock',
  labels: {
    singular: 'Formulář',
    plural: 'Formuláře',
  },
  imageURL: '',
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
    },
    richText({
      name: 'introContent',
      label: 'Intro Content',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
    }),
  ],
}
