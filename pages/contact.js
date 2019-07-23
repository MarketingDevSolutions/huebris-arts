import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import ContactForm from './../components/contact-form/ContactForm'

class Contact extends React.Component{

	render(){
		return(
		<Layout title='Contact | Huebris Arts'>
			<h1>CONTACT</h1>
			<ContactForm/>
		</Layout>)
	}
}

export default Contact
