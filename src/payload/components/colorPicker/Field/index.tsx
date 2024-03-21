import React from 'react'
import { Props } from 'payload/components/fields/Text'
import { Label, useFieldType } from 'payload/components/forms'

import { validateHexColor } from '../../../fields/colorField'

import classes from './index.module.scss'

const defaultColors = ['#0F0F0F', '#9A9A9A', '#F3F3F3', '#FF6F76', '#FDFFA4', '#B2FFD6', '#F3DDF3']

const InputField: React.FC<Props> = props => {
  const { path, label, required } = props

  const { value = '', setValue } = useFieldType({
    path,
    // @ts-expect-error
    validate: validateHexColor,
  })

  return (
    <div className={classes.picker}>
      <Label htmlFor={path} label={label} required={required} />
      <ul className={classes.pickerColors}>
        {defaultColors.map((color, i) => (
          <li key={i}>
            <button
              type="button"
              key={color}
              className={`${classes.chip} ${color === value ? classes.chipSelected : ''} ${
                classes.chipClickable
              }`}
              style={{ backgroundColor: color }}
              aria-label={color}
              onClick={() => setValue(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InputField
