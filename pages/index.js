import * as contentful from 'contentful';
import { Link } from '../routes'

import { connect } from 'react-redux'
import { fillPaintings } from '../redux-store'
import Layout from './../components/layout/Layout'

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

	  	const paintings = entries.items.filter((entry)=> {
	  		return entry.sys.contentType.sys.id === 'painting';
	  	}).map((item)=>{
	  		return item.fields
	  	})

	  	 this.props.fillPaintings(paintings);

	  })
	}

	componentDidMount() {
		this.getContentfulData();
	}

	render(){

		if (this.state.loading) {
			return <h3>Loading...</h3>
		}

		return(<Layout title='Huebris Arts'>
			<h3>HUEBRIS ARTS</h3>
			<Link route="store" prefetch>
				<a className="channel">
					Go to Store
				</a>
			</Link>
		</Layout>)
	}


}
const mapDispatchToProps = (dispatch) => {
  return{
    fillPaintings: (paintings) => dispatch({
      type: 'FILL_PAINTINGS',
      paintings
    })
  }
}

export default connect(null, mapDispatchToProps)(Index);