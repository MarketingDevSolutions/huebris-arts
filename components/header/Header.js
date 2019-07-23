import React from 'react';
import Link from 'next/link';

const Header = () => (
	<div className="header">
		<Link href="/">
			<a className="logo-container">
				{/*<img src='./../../static/huebris-logo.JPG'/>*/}
				🏚
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
		</div>

		<style jsx>
			{`
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
);

export default Header;