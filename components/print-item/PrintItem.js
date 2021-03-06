import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import CustomButton from '../custom-button/CustomButton'
import PaypalButton from '../paypal-button/PaypalButton'
import { Container, SelectWrapper, Select, ResetAmount } from '../../styles/components/product'
import { formatPrice } from '../../helpers';
import './print-item.css';

function PrintItem ({ cart, print, addItemToCart }) {
  const [amount, setAmount] = useState(0)
  const [wantsToBuy, setWantsToBuy] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    let found = false

    cart.forEach((element) => {
      if (element.item.id === print.id) {
        found = true
        return
      }

      setAddedToCart(true)
    })
  }, [])

  const handleBuyClick = e => {
    if (amount >= 1 && amount <= 2) {
      setWantsToBuy(true)
    }
  }

  const handleChange = e => {
    setAmount(parseInt(e.target.value))
  }

  const handleResetSelect = e => {
    e.preventDefault()
    setAmount(parseInt(0))
  }

  const addToCart = e => {
    let price = 35
    if (amount !== 2) {
      price = 20
    };

    addItemToCart({
      type: 'print',
      item: print,
      amount,
      price
    })

    setAddedToCart(true)
  }

  const checkout = (event) => {
    console.log('Bought')

    setIsCheckout(true)
  }

  const { url } = print.image.fields.file
  const { title, id } = print

  let price = 35
  let paypalPrice = 17.5
  if (amount !== 2) {
    price = 20
    paypalPrice = 20
  }

  const item = [
    {
      name: title,
      description: 'Huebris Arts Print',
      quantity: `${amount}`,
      price: `${paypalPrice}`,
      currency: 'USD'
    },
    {
      name: 'Shipping and handling',
      description: 'Services',
      quantity: '1',
      price: '5',
      currency: 'USD'
    }
  ];

  return (
    <>
      <Helmet>
        <script>
          {`
          if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              img.src = img.src;
              img.loading = 'lazy';
              img.setAttribute('data-src', img.src);
            });
          } else {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              img.classList.add('lazyload');
            });
          }
        `}
        </script>
      </Helmet>
      <div className='print-item'>
        <img src={url} className='image' alt={title} />
        <h2 className='title'><b>{title}</b></h2>
        <p className='price'>PRICE: <b>{formatPrice(price)}</b> + Shipping and Handling</p>

        {price && price ? (
          <Container>
            <SelectWrapper>
              <Select onChange={handleChange} value={amount}>
                <option disabled value='0'>Choose an amount</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
              </Select>
            </SelectWrapper>
            {amount === 0 ? '' : (
              <ResetAmount onClick={handleResetSelect}>Reset amount</ResetAmount>
            )}
          </Container>
        ) : ''}

        {amount !== 0 ? wantsToBuy
          ? <div className='buttons'>
            {
              isCheckout
                ? <h5 className='added'>THANK YOU!</h5>
                : <PaypalButton
                  total={price + 5}
                  items={item}
                  id={id}
                  onSuccess={checkout}
                />
            }
            <div className='margin-div' />
            {
              addedToCart
                ? <h5 className='added'>ADDED TO CART</h5>

                : <span onClick={addToCart}>
                  <CustomButton>ADD TO CART</CustomButton>
                </span>
            }
          </div>
          : <span onClick={handleBuyClick}>
            <CustomButton>BUY NOW</CustomButton>
          </span> : ''}
      </div>
    </>
  )
}

function mapStateToProps (state) {
  const { cart } = state
  return { cart }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch({
      type: 'ADD_ITEM_TO_CART',
      item
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintItem)
