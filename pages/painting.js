import React from 'react';
import { connect } from 'react-redux';
import Layout from './../components/layout/Layout';
import CustomButton from './../components/custom-button/CustomButton';
import Link from 'next/link';

class Painting extends React.Component{

  static async getInitialProps({query}){

    const { id } = query;
    
    return { id };

  }

  render(){

    const { storePaintings, id} = this.props;

    const painting = storePaintings.filter((item)=>{
      return item.id === parseInt(id)
    })[0];

    const { url } = painting.picture.fields.file;
    const { title, measurements, description, material } = painting

    return (<Layout title={`${title} | Huebris Arts`}><div className='painting-modal'>
              <img src={url} alt={title} className="image"/>
                <h3 className="label"><b>TITLE: </b>{title}</h3>
                <h3 className="label"><b>MATERIAL: </b>{material}</h3>
                <h3 className="label"><b>DESCRIPTION: </b>{description}</h3>
                <h3 className="label"><b>MEASUREMENTS: </b>{measurements}</h3>
                    <Link href="/">
                      <span className="return">
                        <b>RETURN TO HOME</b>
                      </span>
                    </Link>

      <style jsx>
        {`
          .return{
            padding: 10px 20px;
            min-width: 165px;
            width: auto;
            height: 50px;
            letter-spacing: 0.5px;
            line-height: 50px;
            font-size: 15px;
            background-color: black;
            color: white;
            text-transform: uppercase;
            font-family: 'Open Sans Condensed';
            font-weight: bolder;
            border: none;
            cursor: pointer;
        }

        .return:hover{
          background-color: white;
          color: black;
          border: 1px solid black;
        }
          .painting-modal {
            text-align:center;
            align-content: center;
          }

        .image {
          width: 60vw;
          height: 75vh;
          background-position: center;
          display: block;
          margin: 5px auto;
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