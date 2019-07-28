import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

class Header extends React.Component{
	constructor(){
	    super();
	  }

	  openCart = () => {
	  	this.props.openCart();
	  }

  render(){

  	const { cart } = this.props;

  	let amount = 0;
  	cart.forEach((item)=>{
  		amount = amount + item.amount;
  	})

  	return(
	<div className="header">
		<Link href="/">
			<a className="logo-container">
				<img src='./../../static/logo.png'/>
			</a>
		</Link>
		<div className="options">
			<Link href="/store">
				<a className="option">STORE</a>
			</Link>
			<Link href="/">
				<a className="option">ABOUT</a>
			</Link>
			<Link href="/contact">
				<a className="option">CONTACT</a>
			</Link>
				<a className="cart-link" onClick={this.openCart}>
					<img className="cart-icon" src='./../../static/cart.png'/>
					<b> {amount}</b>
				</a>
		</div>

		<style jsx>
			{`

				.cart-link{
					cursor: pointer;
				}
			.cart-icon{
				width: 15px;
				height: 15px;
			}
			.header {
				  height: 70px;
				  width: 100%;
				  display: flex;
				  justify-content: space-between;
				  margin-bottom: 40px;
				}
						
		    .logo-container {
			    height: 100%;
			    width: 70px;
			    padding: 25px;
			  }

			.logo-container img {
				width: 100px;
			}
			
		    .options {
			    width: 50%;
			    height: 100%;
			    display: flex;
			    align-items: center;
			    justify-content: flex-end;
			
			  }
		     .option {
		     	  margin-right: 1em;
			      padding: 10px 15px;
			      text-decoration: none;
			    }
						`}
		</style>
	</div>
)}};

function mapStateToProps(state) {
  const { cart } = state
  return { cart }
}

const mapDispatchToProps = (dispatch) => {
  return{
    openCart: () => dispatch({
      type: 'OPEN_CART'
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);