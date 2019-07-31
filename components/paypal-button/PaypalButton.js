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
			env: 'sandbox',
			client: {
				sandbox: 'AZRc-7oGPkg2jt9cAOoF0N4YujmbQW1rPFDET9TptRB-tanpuEcrLCY_ytOc8d07cxc9Tjq7ILtSaI_9'
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