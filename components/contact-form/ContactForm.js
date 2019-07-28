import React from 'react';

import FormInput from './../form-input/FormInput';
import CustomButton from './../custom-button/CustomButton';

class ContactForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			phone: '',
			email: '',
			message: ''
		}

	}

	handleSubmit = event =>{
		event.preventDefault();

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

	render() {
		return (
			<div className="contact-form">
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
					<CustomButton 
						type="submit">
					SEND
					</CustomButton>
				</form>
				<style jsx>
			{`
			.contact-form{
				justify-content: center;
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