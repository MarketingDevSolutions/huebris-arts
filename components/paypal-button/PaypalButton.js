import React from 'react';

class PaypalButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isEnabled: true, 
			times: 0,
			customClass: ''
		}

	}

	componentDidMount() {

		const { total, items, id, onSuccess } = this.props;

		paypal.Button.render({
			env: 'production',
			client: {
				production: 'AYkdAwz2nkdhoyurVdShb3_-iuoYOvNlthw7F1Td7jW4ddJr6CTP1OuYqz9ylYA1ypevE9O5tsHxzKgq'
			},

			payment: function (data, actions) {
				return actions.payment.create({
					transactions: [{
						amount: {
							total: `${total}`,
							currency: 'USD'
						},
						description: "Payment to Huebris Arts.",
						item_list: {
					        items: items
						}
					}]
					})
			}, 
			commit: true,
			onAuthorize: function(data, actions) {
				return actions.payment.execute().then(function(response) {
					onSuccess();
				})
			},
			onCancel: function(data){
				console.log('Payment cancelled')
			}
		},
		`#paypal-express-btn-${id}`
		)
	}

	render(){

		const { id } = this.props

		return(
			<div>
				{this.state.isEnabled ? <div id={`#paypal-express-btn-${id}`}/> : 'Loading...'}
			</div>
			)
	}
}

export default PaypalButton;