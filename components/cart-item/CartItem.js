import React from 'react'

import './cart-item.styles.css'

export default function CartItem ({ cartItem, onRemoveClick }) {
  const { url } = cartItem.item.image.fields.file
  const { amount, price } = cartItem
  const { title } = cartItem.item

  return (
    <div className='cart-item'>
      <div className='image-div'>
        <img src={url} className='cart-image' />
      </div>
      <div className='info-div father-vertical'>
        <div className='child-vertical'>
          <b>{title}</b><br />
          <b>AMOUNT: </b> {amount}<br />
          <b>PRICE: </b> {price}$
        </div>
      </div>
      <div className='remove-div father-vertical'>
        <a
          className='child-vertical'
          onClick={() => onRemoveClick(cartItem)}>X</a>
      </div>
    </div>
  )
}
