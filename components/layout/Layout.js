import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Header from './../header/Header';
import Cart from './../cart/Cart';
import { connect } from 'react-redux';
import * as contentful from 'contentful';

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class Layout extends React.Component{

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

  getContentfulData = () =>{

    const { paintings } = this.props;

      if (paintings.length < 1){
        this.setState({
              loading: true
        })
        var client = contentful.createClient({
             space: '7k4em0fo2yla',
             accessToken: 'ovr3_ng-_QThDTpfGsa7YecRCKzQAm3ExfZrcns_Mco'
        })
  
        client.getEntries().then(entries =>{
            this.setState({
              loading: false
        });
  
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
  
        })}
  }

  componentDidMount() {
    this.getContentfulData();
  }

	render(){

		const { children, title } = this.props
    const { loading } = this.state

		return <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" type="image/x-icon" href="/static/logo.png" />
				<title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet"></link>
			</Head>
			<Header/>
			   { loading ?<h3>Loading...</h3> : children }
      <Cart/>
			<style jsx global>{`

        body {
          overflow-x: hidden;
          margin: 0;
          font-family: 'Open Sans Condensed';
          padding: 20px 60px;
          background: white;
        }

        a{
          text-decoration: none;
          color: black;
        }

        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #29d;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #29d, 0 0 5px #29d;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #29d;
          border-left-color: #29d;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	}
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

function mapStateToProps(state) {
  const { paintings } = state
  return { paintings }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);