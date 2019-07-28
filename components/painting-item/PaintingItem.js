import React from 'react';
import slug from '../../helpers/slug';
import { connect } from 'react-redux';
import { Link } from '../../routes'

const PaintingItem = ({painting}) =>{

    const { url } = painting.picture.fields.file;
    const { title, measurements, id } = painting;

  return <Link route="painting" params={{
            slug: slug(title),
            id
          }} prefetch>
           <a className='painting-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      <div className='painting-footer'>
        <span className='title'>{title}</span>
        <span className='measurements'>{measurements}</span>
      </div>
      <style jsx>
        {`
          .painting-item {
            width: 90%;
            display: flex;
            flex-direction: column;
            height: 350px;
            align-items: center;
            margin-bottom: 20%;
          }
    .image {
      width: 100%;
      height: 95%;
      background-size: cover;
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
        text-align: right;
        width: 20%;
      }
  `}
      </style>
      </a>
    </Link>
    }

export default PaintingItem;
