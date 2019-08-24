import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import Link from 'next/link'
import PaypalButton from './../components/paypal-button/PaypalButton'
import { Container, SelectWrapper, Select, ResetAmount } from '../styles/components/product'
import { Button } from '../styles'
import { Image, Grid, GridItem } from '../styles/pages/painting'
import { formatPrice } from '../helpers'

function Combo ({ storeCombos, cart, print, id, addItemToCart, stickers, paintings }) {
  const [amount, setAmount] = useState(0)
  const [wantsToBuy, setWantsToBuy] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)

  useEffect(() => {
    let found

    cart.forEach((element) => {
      const combo = getCombo()

      if (element.item.id === combo.id && element.type === 'combo') {
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

  

    

  const getCombo = () => {
    const combo = storeCombos.filter((item) => {
      return item.id === parseInt(id)
    })[0]

    return combo
  }

  const combo = getCombo()

  const { url } = combo.image.fields.file
  const { title, description, price } = combo


  return (
    <Layout title={`${title} | Huebris Arts`}>
      <div className='painting-modal'>
        <Grid>
          <GridItem>
            <Image src={url} alt={title} />
          </GridItem>

          <GridItem>
            <h3 className='label'><b>TITLE: </b>{title}</h3>
            <h3 className='label'><b>DESCRIPTION: </b>{description}</h3>
            <h3 className='label'><b>PRICE: </b>{formatPrice(price)} + Shipping and Handling</h3>

          </GridItem>
        </Grid>

        <div style={{ marginTop: 48 }}>
          <h2 className='text-center'>LIKE IT?</h2>
          <Button>BUY NOW</Button>
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

Combo.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

function mapStateToProps (state) {
  const { combos, cart, paintings, stickers } = state
  return { storeCombos: combos, cart, paintings, stickers }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch({
      type: 'ADD_ITEM_TO_CART',
      item
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Combo)
