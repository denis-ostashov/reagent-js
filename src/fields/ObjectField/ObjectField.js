import React, { Component } from 'react'
import { object, string } from 'prop-types'

import ObjectInput from './ObjectInput'
import OneOf from './OneOf'

import './style.less'

export default class ObjectField extends Component {
  static propTypes = {
    properties: object,
    name: string,
    title: string,
  }

  static defaultProps = {
    properties: {},
  }

  renderInput = () => this.props.oneOf ? (
    <OneOf
      {...this.props}
    />
  ) : (
    <ObjectInput {...this.props} />
  )

  render() {
    return (
      <div className='c-object-field'>
        <FieldTitle title={this.props.title}/>
        <div className='c-object-field__content'>
          { this.renderInput() }
        </div>
      </div>
    )
  }
}

const FieldTitle = ({title}) => (
  title ? <h4 className='c-object-field__title'>{title}</h4> : null
)
