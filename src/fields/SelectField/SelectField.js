import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import SelectInput from './SelectInput'
import SelectInputWithDialog from './SelectInputWithDialog'
import * as validators from '../../validators'

import { VALIDATE_MESSAGES } from './constants'

export default class SelectField extends PureComponent {
  validate = (value) => {
    const { max, min, required } = this.props

    if ((required || min) && validators.required(value)) {
      return VALIDATE_MESSAGES.REQUIRED
    }
    if (max && max > 1 && value && validators.max(max)(value.length)) {
      return VALIDATE_MESSAGES.MAX(max)
    }
    if (min && validators.min(min)(value.length)) {
      return VALIDATE_MESSAGES.MIN(min)
    }
    return null
  }

  render() {
    const { multiple, ...props } = this.props

    return (
      <Field
        {...props}
        component={multiple ? SelectInputWithDialog : SelectInput}
        validate={this.validate}
      />
    )
  }
}