import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import Link from 'next/link'
import PaypalButton from './../components/paypal-button/PaypalButton'
import { Container, SelectWrapper, Select, ResetAmount } from '../styles/components/product'
import { Button } from '../styles'
import { Image, Grid, GridItem } from '../styles/pages/painting'

function Painting ({ storePaintings, cart, print, id, addItemToCart }) {
  const [amount, setAmount] = useState(0)
  const [wantsToBuy, setWantsToBuy] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)

  useEffect(() => {
    let found

    cart.forEach((element) => {
      const painting = getPainting()

      if (element.item.id === painting.id && element.type === 'painting') {
        found = true
        return
      }

      setAddedToCart(found)
    })
  })

  const handleBuyClick = () => {
    if (amount >= 1 && amount <= 2) setWantsToBuy(true)
  }

  const handleChange = e => {
    setAmount(parseInt(e.target.value))
  }

  const handleResetSelect = e => {
    e.preventDefault()
    setAmount(parseInt(0))
  }

  const addToCart = () => {
    const painting = getPainting()

    let price = 35
    if (amount !== 2) {
      price = 20
    };

    addItemToCart({
      type: 'painting',
      item: painting,
      amount,
      price
    })

    setAddedToCart(true)
  }

  const checkout = () => {
    console.log('Bought')

    setIsCheckout(true)
  }

  const getPainting = () => {
    const painting = storePaintings.filter((item) => {
      return item.id === parseInt(id)
    })[0]

    return painting
  }

  const painting = getPainting()

  const { url } = painting.picture.fields.file
  const { title, measurements, description, material } = painting

  let price = 35
  let paypalPrice = 17.5
  if (amount !== 2) {
    price = 20
    paypalPrice = 20
  }

  const item = [
    {
      name: title,
      description: 'Huebris Arts Painting',
      quantity: `${amount}`,
      price: `${paypalPrice}`,
      currency: 'USD'
    }
  ]

  return (
    <Layout title={`${title} | Huebris Arts`}>
      <div className='painting-modal'>
        <Grid>
          <GridItem>
            <Image src={url} alt={title} />
          </GridItem>

          <GridItem>
            <h3 className='label'><b>TITLE: </b>{title}</h3>
            <h3 className='label'><b>MATERIAL: </b>{material}</h3>
            <h3 className='label'><b>DESCRIPTION: </b>{description}</h3>
            <h3 className='label'><b>ORIGINAL MEASUREMENTS: </b>{measurements}</h3>
            <h3 className='label'><b>PRINT MEASUREMENTS (for sale): </b>11 x 14in</h3>

            <h2 className='text-center'>LIKE IT?</h2>
            {price && price ? (
              <Container>
                <SelectWrapper>
                  <Select onChange={handleChange} value={amount}>
                    <option disabled value='0'>Choose an amount</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </Select>
                </SelectWrapper>
                {amount === 0 ? <b style={{ color: 'red' }}>You need to select an amount to buy</b> : (
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
                      total={price}
                      items={item}
                      id={id}
                      onSuccess={checkout}
                    />
                }
                <div className='margin-div' />
                {
                  addedToCart
                    ? <h5 className='added'>ADDED TO CART</h5>
                    : <Button onClick={addToCart}>ADD TO CART</Button>
                }
              </div>
              : <Button onClick={handleBuyClick}>BUY NOW</Button> : ''}
          </GridItem>
        </Grid>

        <div style={{ marginTop: 48 }}>
          <Link href='/store'>
            <Button>RETURN TO STORE</Button>
          </Link>
        </div>

        <style jsx>
          {`

          .added{
          text-align: center;
          margin: 10px 0;
        }
        .amount-div{
          text-align: center;
        }
        .amount-div label{
          margin-right: 5px;
        }
        .amount-input{
          margin-right: 5px;
          width:20%;
        }
          .return{
            padding: 10px 20px;
            min-width: 165px;
            width: auto;
            height: 50px;
            letter-spacing: 0.5px;
            line-height: 50px;
            font-size: 15px;
            background-color: black;
            color: white;
            text-transform: uppercase;
            font-family: 'Open Sans Condensed';
            font-weight: bolder;
            border: none;
            cursor: pointer;
        }

        .return:hover{
          background-color: white;
          color: black;
          border: 1px solid black;
        }
          .painting-modal {
            text-align:center;
            align-content: center;
          }
  `}
        </style>
      </div>
    </Layout>
  )
}

Painting.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

function mapStateToProps (state) {
  const { paintings, cart } = state
  return { storePaintings: paintings, cart }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch({
      type: 'ADD_ITEM_TO_CART',
      item
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Painting)
