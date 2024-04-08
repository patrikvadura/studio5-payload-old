import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  imageURL:
    'https://res.cloudinary.com/patrik-vadura/image/upload/v1710759866/Payload/Blocks/block_media-block_ayshne.webp',
  fields: [
    invertBackground,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
