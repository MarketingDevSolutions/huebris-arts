import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import Link from 'next/link'
import CustomButton from './../components/custom-button/CustomButton';
import PaypalButton from './../components/paypal-button/PaypalButton';

class Painting extends React.Component {
  static async getInitialProps ({ query }) {
    const { id } = query

    return { id }
  }

  constructor(){
    super();

    this.state = {
      amount: 0,
      wantsToBuy: false,
      addedToCart: false,
      isCheckout: false
    }
  }
  handleBuyClick = (event) => {
    const { amount } = this.state
    if (amount >=1 && amount <= 2) {
      this.setState({
        wantsToBuy: true
      });
    }
  }

  handleChange =(event)=>{
    this.setState({
      amount: parseInt(event.target.value)
    });
  }

  addToCart = (event) =>{
    const painting = this.getPainting();
    const { title, id } = painting;
    const { amount } = this.state;

    let price = 35;
    if(amount != 2){
      price = 20;
    };

    this.props.addItemToCart({
      type: 'painting',
      item: painting,
      amount,
      price
    });

    this.setState({
      addedToCart: true
    });
  }

  checkout = (event) =>{
    console.log('Bought');

    this.setState({
      isCheckout: true
    });
  }

  getPainting = () => {
    const { storePaintings, id } = this.props

    const painting = storePaintings.filter((item) => {
      return item.id === parseInt(id)
    })[0]

    return painting;
  }

  componentDidMount() {
    const { cart, id } = this.props;
    let found = false

    cart.forEach((element)=>{
      if (element.item.id === print.id && element.type === 'painting'){
        found = true;
        return
      }

      this.setState({
          addedToCart: found 
        });
    })




  }

  render () {
    const { storePaintings, id } = this.props

    const painting = this.getPainting();

    const { url } = painting.picture.fields.file
    const { title, measurements, description, material } = painting

    const { amount, addedToCart, isCheckout, wantsToBuy } = this.state

    let price = 35;
    let paypalPrice = 17.5;
    if(amount !== 2){
      price = 20;
      paypalPrice = 20;
    }

    let item = [
      {
        name: title,
        description: 'Huebris Arts Painting',
        quantity: `${amount}`,
        price: `${paypalPrice}`,
        currency: "USD"
      }
      ]

    return (<Layout title={`${title} | Huebris Arts`}><div className='painting-modal'>
      <img src={url} alt={title} className='image' />
      <h3 className='label'><b>TITLE: </b>{title}</h3>
      <h3 className='label'><b>MATERIAL: </b>{material}</h3>
      <h3 className='label'><b>DESCRIPTION: </b>{description}</h3>
      <h3 className='label'><b>MEASUREMENTS: </b>{measurements}</h3>
      <Link href='/'>
        <span className='return'>
          <b>RETURN TO HOME</b>
        </span>
      </Link>

      <h2 className="text-center">LIKE IT?</h2>
      <div className="amount-div">
         <label>AMOUNT:</label>
         <input 
           className="amount-input" 
           type="number" 
           name="amount" 
           min="1" 
           max="2"
           onChange={this.handleChange}
           /><br/>
         <label>PRICE: {price}$</label>
      </div>
      
    {
      wantsToBuy ?
      <div className="buttons">
            {
              isCheckout ?
              <h5 className="added">THANK YOU!</h5> : 
                <PaypalButton
                  total={price}
                  items={item}
                  id={id} 
                  onSuccess={this.checkout}/>
            }
            <div className="margin-div"></div>
            {
              addedToCart ?
              <h5 className="added">ADDED TO CART</h5> : 
    
              <span onClick={this.addToCart}>
                <CustomButton>ADD TO CART</CustomButton>
              </span>
            }
        </div> : 
        <span onClick={this.handleBuyClick}>
          <CustomButton>BUY NOW</CustomButton>
        </span> }

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

        .image {
          width: 60vw;
          height: 75vh;
          background-position: center;
          display: block;
          margin: 5px auto;
        }
  `}
      </style>
    </div></Layout>)
  }
}

function mapStateToProps (state) {
  const { paintings, cart } = state
  return { storePaintings: paintings, cart }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart: (item) => dispatch({
      type: 'ADD_ITEM_TO_CART',
      item
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Painting)
