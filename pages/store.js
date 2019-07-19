import { connect } from 'react-redux'

class Store extends React.Component{

	render(){

		const { paintings } = this.props;
		console.log(paintings)
		return(<React.Fragment>
			<h3>STORE</h3>
			<h2>{paintings.length}</h2>
		</React.Fragment>)
	}
}

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings }
}

export default connect(mapStateToProps)(Store)
