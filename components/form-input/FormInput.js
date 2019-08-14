import React from 'react'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  otherProps.textarea ? (
    <label className='d-form d-label-outline'>
      <textarea placeholder=' ' {...otherProps} />
      <span>{label}</span>
    </label>
  ) : (
    <label className='d-form d-label-outline'>
      <input type='text' placeholder=' ' {...otherProps} />
      <span>{label}</span>
    </label>
  )
)

export default FormInput
