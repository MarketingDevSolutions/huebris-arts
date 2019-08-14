import { Link } from '../routes'

import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import CanvaPreview from './../components/canva-preview/CanvaPreview'

class Gallery extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { paintings, smallCanvases } = this.props
		return(
			<Layout title='Gallery | Huebris Arts'>		
			<div> 
				<h2 className='title'>PAINTINGS</h2>
				<PaintingPreview paintings={paintings}/>
				<h2 className='title'>CANVASES</h2>
				<CanvaPreview canvases={smallCanvases}/>
			</div>
		</Layout>)
	}


}

function mapStateToProps(state) {
  const { paintings, smallCanvases } = state
  return { paintings, smallCanvases }
}

export default connect(mapStateToProps)(Gallery);