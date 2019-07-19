import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'

class Store extends React.Component{

	render(){

		const { paintings } = this.props;
		console.log(paintings)
		return(
		<Layout title='Store | Huebris Arts'>
			<h1>STORE</h1>
			<h2 className='title'>PAINTINGS</h2>
		    <PaintingPreview paintings={paintings}/>
		</Layout>)
	}
}

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings }
}

export default connect(mapStateToProps)(Store)
