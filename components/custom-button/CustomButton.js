import React from 'react'

/* eslint-disable no-tabs */
const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button'>
    {children}
    <style jsx>
      {`
				.custom-button {
					padding: 12px 24px;
					border-radius: 8px;
					letter-spacing: 0.5px;
					font-size: 15px;
					background-color: black;
					color: white;
					border: 1px solid black;
					transition: all 0.3s ease-in-out;
					margin-top: 16px;
					cursor: pointer;
				}

				.custom-button:hover {
					background-color: white;
					color: black;
					border: 1px solid black;
				}
			`}
    </style>

  </button>
)

export default CustomButton
