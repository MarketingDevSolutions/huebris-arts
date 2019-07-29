import { Link } from '../routes'

import { connect } from 'react-redux'
import { fillPaintings } from '../redux-store'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import CanvaPreview from './../components/canva-preview/CanvaPreview'

class Index extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { paintings, smallCanvases } = this.props
		return(
			<Layout title='Huebris Arts'>		
			<div> 
				<h1 className="text-center">HUEBRIS ARTS</h1>
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

export default connect(mapStateToProps)(Index);