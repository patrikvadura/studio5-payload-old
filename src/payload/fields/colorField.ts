import type { Field } from 'payload/types'

import Cell from '../components/colorPicker/Cell'
import InputField from '../components/colorPicker/Field'

export const validateHexColor = (value: string): boolean | string => {
  return (
    value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/).length === 1 || `${value} is not a valid hex color`
  )
}

const colorField: Field = {
  name: 'color',
  type: 'text',
  // @ts-expect-error
  validate: validateHexColor,
  required: false,
  admin: {
    components: {
      Field: InputField,
      Cell,
    },
  },
}

export default colorField
