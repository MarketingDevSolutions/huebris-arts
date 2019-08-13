import { Link } from '../routes'

import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'

class Gallery extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { paintings, smallCanvases } = this.props
		return(
			<Layout title='Huebris Arts'>		
			<div> 
				<h1 className="text-center">HUEBRIS ARTS</h1>
				<h1 className="text-center">SLIDER</h1>
				<h1 className="text-center">WHAT IS HUEBRIS ARTS?</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ullam, architecto labore minima rem, totam velit beatae commodi voluptate quae 
				consequatur eveniet id non, explicabo veritatis! 
				Dolores veritatis in praesentium omnis. 
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, iure. 
				Earum ipsum, eveniet non, natus, omnis vel fugit nisi blanditiis atque rerum esse tempora 
				delectus dolorem reiciendis impedit, molestias accusamus. Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. Neque officiis asperiores excepturi modi totam accusamus mollitia 
				facere repellat adipisci et. Modi voluptas praesentium dicta quod eum at ab dolorem. Sequi.</p>
				<h1 className="text-center">PREVIEW</h1>
			</div>
		</Layout>)
	}


}

function mapStateToProps(state) {
  const { paintings, smallCanvases } = state
  return { paintings, smallCanvases }
}

export default connect(mapStateToProps)(Gallery);