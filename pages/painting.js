import React from 'react';
import { connect } from 'react-redux';
import Layout from './../components/layout/Layout';

class Painting extends React.Component{

  static async getInitialProps({query}){

    const { id } = query;
    
    return { id };

  }

  render(){

const { storePaintings, id} = this.props;

console.log(storePaintings, id);

const painting = storePaintings.filter((item)=>{
  return item.id === parseInt(id)
})[0];


  // const { painting } = this.props

  const { url } = painting.picture.fields.file;
  const { title, measurements, description, material } = painting

  return (<Layout title={`${title} | Huebris Arts`}><div className='painting-modal'>
            <img src={url} alt={title} className="image"/>
              <h3 className="label"><b>TITLE: </b>{title}</h3>
              <h3 className="label"><b>MATERIAL: </b>{material}</h3>
              <h3 className="label"><b>DESCRIPTION: </b>{description}</h3>
              <h3 className="label"><b>MEASUREMENTS: </b>{measurements}</h3>
    <style jsx>
      {`
        .painting-modal {
          text-align:center;
          align-content: center;
        }

      .image {
        width: 60%;
        height: 60%;
        background-position: center;
        display: block;
        margin: 5px auto;
      }

  .painting-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

  }
    .title {
      width: 80%;
      margin-bottom: 15px;
    }

    .measurements {
      width: 20%;
    }
`}
    </style>
  </div></Layout>)
}
}

function mapStateToProps(state) {
  const { paintings } = state
  return { storePaintings: paintings }
}

export default connect(mapStateToProps, null)(Painting);