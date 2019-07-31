import React from 'react';
import CustomButton from './../custom-button/CustomButton';
import CartItem from './../cart-item/CartItem';
import { connect } from 'react-redux';
import PaypalButton from '../paypal-button/PaypalButton';
import './cart.styles.css'

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPaypal: false
    }
  }

  handleCloseCart = () => {
  	this.props.closeCart();
  }

  handleClearCart = () =>{
  	this.props.emptyCart();
  } 

  handleShowClick = () =>{
    this.setState({
      showPaypal: true
    });
  }

  handleRemoveItem = (product) => {
    this.props.removeCartItem(product);
  }

  render() {

  	const { cart } = this.props;
    const { showPaypal } = this.state;

  	let totalPrice = 0;

  	cart.forEach((cartItem)=>{
  		totalPrice += cartItem.price;
  	})

  	const cartList = cart.map((cartItem)=>{
  		return <CartItem 
  				key={cartItem.item.id} 
  				cartItem={cartItem} 
  				onRemoveClick={this.handleRemoveItem}/>
  	})

    const paypalCart = cart.map((cartItem)=>{
      let paypalPrice;
      cartItem.amount === 1 ?  paypalPrice = 20 : paypalPrice = 17.5;
      return (
          {
            name: cartItem.item.title,
            description: 'Huebris Arts Print',
            quantity: `${cartItem.amount}`,
            price: `${paypalPrice}`,
            currency: "USD"
          }
          )
    })

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''} father-vertical`}>
      	<div className="cart-header">
      		<div className="cart-title">
	      		<h1>
	      			YOUR CART
	      		</h1>
      		</div>
	      	<span className="close-span">
	      		<a className="close-button" onClick={this.handleCloseCart}>
	      		X
	      		</a>
	  		</span>
  		</div>
  			{
  				cartList.length > 0 ?
  					<React.Fragment> 
				  		<div className="cart-items">
				  			{cartList}
				  		</div>
				  		<hr/>
			  			<div className="cart-footer">
				  			<h3>TOTAL: {totalPrice}$</h3>
                <div className="buttons">
  				  			<span onClick={this.handleClearCart}>
  				  				<CustomButton>CLEAR CART</CustomButton>
  				  			</span>
                  {
                    showPaypal ? 
                  <PaypalButton
                    total={totalPrice}
                    items={paypalCart}
                    id='cart'
                    onSuccess={this.handleClearCart}/>
                    :
                    <span onClick={this.handleShowClick}>
                      <CustomButton>CHECKOUT NOW</CustomButton>
                    </span>
                  }
                  </div>
			  			</div>
		  			</React.Fragment>
  				 : 
  				<h3 className="child-vertical">YOUR CART IS EMPTY</h3>
  			}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { isCartOpen, cart } = state
  return { isCartOpen, cart }
}

const mapDispatchToProps = (dispatch) => {
  return{
    closeCart: () => dispatch({
      type: 'CLOSE_CART'
    }),
    emptyCart: () => dispatch({
      type: 'EMPTY_CART'
    }),
    removeCartItem: (product) => dispatch({
      type: 'REMOVE_CART_ITEM',
      product
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
