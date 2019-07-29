import React from 'react';

const CanvaItem = ({canva}) =>{

    const { url } = canva.image.fields.file;
    const { title } = canva;

  return <div className='canva-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      <div className='canva-footer'>
        <span className='title'>{title}</span>
      </div>
      <style jsx>
        {`
          .canva-item {
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

    .canva-footer {
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
  `}
      </style>
      </div>
    }

export default CanvaItem;
