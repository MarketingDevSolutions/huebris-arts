import React from 'react';
import CustomButton from './../custom-button/CustomButton';
import CartItem from './../cart-item/CartItem';
import { connect } from 'react-redux';

import './cart.styles.css'

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCloseCart = () => {
  	this.props.closeCart();
  }

  handleCheckout = () =>{
  	this.props.emptyCart();
  }

  handleRemoveItem = (product) => {
    this.props.removeCartItem(product);
  }

  render() {

  	const { cart } = this.props;

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



    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
      	<div className="card-header">
      		<div className="card-title">
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
				  			<span onClick={this.handleCheckout}>
				  				<CustomButton>CHECKOUT</CustomButton>
				  			</span>
			  			</div>
		  			</React.Fragment>
  				 : 
  				<h3>YOUR CART IS EMPTY</h3>
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
