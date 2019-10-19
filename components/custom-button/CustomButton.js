import React from 'react';
import './custom-button.css';

/* eslint-disable no-tabs */
const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button'>
    {children}
  </button>
)

export default CustomButton
