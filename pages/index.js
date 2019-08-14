import { Link } from '../routes'

import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'

class Gallery extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { paintings } = this.props
		return(
			<Layout title='Huebris Arts'>		
			<div> 
				<h1 className="text-center">HUEBRIS ARTS</h1>
				<h3 className="text-center">SLIDER</h3>
				<h4 className="description">Welcome to Huebris Arts, where you can find original abstract artwork, 
				acrylic and watercolor paintings, hand drawn portraits, prints, merchandise 
				and request custom-made art pieces designed to bring your vision to life by 
				artist Lauren “Huebris” Rust.</h4>
				<h3 className="text-center">PREVIEW</h3>
				{ <PaintingPreview paintings={paintings}/>}
			</div>
		</Layout>)
	}


}

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings: paintings.filter((painting, i)=> i<5) }
}

export default connect(mapStateToProps)(Gallery);