import * as contentful from 'contentful';
import { Link } from '../routes'

import { connect } from 'react-redux'
import { fillPaintings } from '../redux-store'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'

class Index extends React.Component{

	constructor(){
		super();
		this.state = {
			loading: true
		}
	}

	getContentfulData = () =>{
		var client = contentful.createClient({
		     space: '7k4em0fo2yla',
		     accessToken: 'ovr3_ng-_QThDTpfGsa7YecRCKzQAm3ExfZrcns_Mco'
		})

		client.getEntries().then(entries =>{
		  	this.setState({
		  		loading: false
		});

		  	console.log('ENTRIES', entries);

		// Filters paintings  	
	  	const paintings = entries.items.filter((entry)=> {
	  		return entry.sys.contentType.sys.id === 'painting';
	  	}).map((item)=>{
	  		return item.fields
	  	})

	  	// Filters prints  	
	  	const prints = entries.items.filter((entry)=> {
	  		return entry.sys.contentType.sys.id === 'print';
	  	}).map((item)=>{
	  		return item.fields
	  	})

	  	// Filters canvases  	
	  	const canvases = entries.items.filter((entry)=> {
	  		return entry.sys.contentType.sys.id === 'miniCanvas';
	  	}).map((item)=>{
	  		return item.fields
	  	})

	  	 this.props.fillPaintings(paintings);
	  	 this.props.fillPrints(prints);
	  	 this.props.fillCanvases(canvases);

	  })
	}

	componentDidMount() {
		this.getContentfulData();
	}

	render(){

		const { paintings } = this.props
		return(
			<Layout title='Huebris Arts'>		
				{this.state.loading ?  <h3>Loading...</h3> :
					<div> 
						<h3>HUEBRIS ARTS</h3>
						<h2 className='title'>PAINTINGS</h2>
						<PaintingPreview paintings={paintings}/>
					</div>}
		</Layout>)
	}


}

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fillPaintings: (paintings) => dispatch({
      type: 'FILL_PAINTINGS',
      paintings
    }), 
    fillPrints: (prints) => dispatch({
      type: 'FILL_PRINTS',
      prints
    }), 
    fillCanvases: (canvases) => dispatch({
      type: 'FILL_CANVASES',
      canvases
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);