import React from 'react';

import FormInput from './../form-input/FormInput';
import CustomButton from './../custom-button/CustomButton';
import Modal from './../modal/Modal';
import MiniLoader from './../mini-loader/MiniLoader';

class ContactForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			phone: '',
			email: '',
			message: '',
			loading: false,
			success: false,
			error: false
		}

	}

	handleSubmit = event =>{
		event.preventDefault();

		const { name, phone, email, message } = this.state

		this.setState({
			loading: true 
		});

		fetch('https://huebris-email.herokuapp.com/api/contact', {
		    method: 'POST',
		    headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify({
		      email,
		      phone,
		      name,
		      message
		    })
		  })
		.then(response => response)
	    .then(res => {
	      if (res.ok) {
	      	this.setState({
	      		loading: false,
	      		success: true
	      	});
	      } else{
	        this.setState({
	      		loading: false,
	      		error: 'Please, fill all the fields.'
	      	});
	      }
	    })
	    .catch(error =>{
	    	console.log(error)
	    	this.setState({
	      		loading: false,
	      		error: 'Error sending email. Please, try later.'
	      	})
	    })

		this.setState({
			name:'',
			phone: '',
			email: '',
			message: ''
		})
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	handleCloseSuccess = () =>{
		this.setState({
			success: false
		});
	}

	handleCloseError = () =>{
		this.setState({
			error: false
		});
	}

	render() {
		const { loading, success, error } = this.state;
		return (

			<div className="contact-form">
				{success ? 
					<Modal onClose={this.handleCloseSuccess}>
						<h2>YOUR EMAIL WAS SENT SUCCESSFULLY!</h2>
					</Modal> : null }

				{error ? 
					<Modal onClose={this.handleCloseError}>
						<h2>{error}</h2>
					</Modal> : null }
				<h2>Want a personalized painting or give a suggestion?</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="name" 
						label="Name" 
						type="text" 
						value={this.state.name}
						onChange={this.handleChange} 
						required/>
					<FormInput 
						name="phone" 
						label="Phone number" 
						type="text" 
						value={this.state.phone}
						onChange={this.handleChange} 
						required/>
					<FormInput 
						name="email" 
						label="Email" 
						type="email" 
						value={this.state.email}
						onChange={this.handleChange} 
						required/>
					<FormInput
						textarea="true"
						name="message"
						label="Message" 
						value={this.state.message} 
						onChange={this.handleChange} 
						required/>
					
					{ loading ? <MiniLoader><h4>SENDING EMAIL...</h4></MiniLoader> : null }
					<span onClick={this.handleSubmit}>
						<CustomButton 
							type="submit">
						SEND
						</CustomButton>
					</span>
				</form>
				<style jsx>
			{`
			.contact-form{
				text-align: center;
				width: 100%;
				display: flex;
				flex-direction: column;
			}
						`}
				</style>
			</div>
		);
	}


}
	export default ContactForm;