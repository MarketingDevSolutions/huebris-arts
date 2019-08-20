import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import './header.styles.css';

class Header extends React.Component{
	constructor(){
	    super();
	    this.state = {
	    	displayMenu: false
	    }
	  }

	  openCart = () => {
	  	this.props.openCart();
	  }

	  showHideMenu = () =>{
	  	this.setState({
	  		displayMenu: !this.state.displayMenu
	  	});
	  }

  render(){

  	const { displayMenu } = this.state

	//Controls class of menu item
	let menuClass;
	if (displayMenu){
		menuClass = 'mobile-options show-menu';
	} else {
		menuClass = 'mobile-options';
	}

  	const { cart } = this.props;

  	let amount = 0;
  	cart.forEach((item)=>{
  		amount = amount + item.amount;
  	})

  	return(
	<div>
  		<div className="menu-icon-container" onClick={this.showHideMenu}>
			<img src="./../../static/menu.svg" className="child-vertical" />
		</div>
		<div className="header">
			<div className="top-header">
				<div className="logo-container">
					<Link href="/">
						<a>
							<img src='./../../static/logo.png'/>
						</a>
					</Link>
				</div>
				<div className="cart-icon-container father-vertical">
					<a className="cart-link child-vertical" onClick={this.openCart}>
						<img className="cart-icon" src='./../../static/cart.png'/>
						<span><b> {amount}</b></span>
					</a>
				</div>
			</div>
			<div className="options">
				<Link href="/store">
					<a className="option">STORE</a>
				</Link>
				<Link href="/about">
					<a className="option">ABOUT</a>
				</Link>
				<Link href="/contact">
					<a className="option">CONTACT</a>
				</Link>
					<a className="cart-link cart-desktop" onClick={this.openCart}>
						<img className="cart-icon" src='./../../static/cart.png'/>
						<b> {amount}</b>
					</a>
			</div>
			<div className={menuClass}>
				<div className="child-vertical">
					<Link href="/">
						<span className="option">HOME</span>
					</Link>
					<Link href="/store">
						<span className="option">STORE</span>
					</Link>
					<Link href="/about">
						<span className="option">ABOUT</span>
					</Link>
					<Link href="/contact">
						<span className="option">CONTACT</span>
					</Link>
				</div>
			</div>
		</div>
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