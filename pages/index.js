import { Link } from '../routes'

import { connect } from 'react-redux'
import { fillPaintings } from '../redux-store'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'

class Index extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { paintings } = this.props
		return(
			<Layout title='Huebris Arts'>		
			<div> 
				<h3>HUEBRIS ARTS</h3>
				<h2 className='title'>PAINTINGS</h2>
				<PaintingPreview paintings={paintings}/>
			</div>
		</Layout>)
	}


}

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings }
}

export default connect(mapStateToProps)(Index);