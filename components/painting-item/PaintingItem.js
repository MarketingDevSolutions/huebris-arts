import React from 'react';

const PaintingItem = ({painting}) => {

  const { url } = painting.picture.fields.file;
  const { title, measurements } = painting

  return <div className='painting-item'>
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
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

}
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .painting-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

  }
    .title {
      width: 75%;
      margin-bottom: 15px;
    }

    .measurements {
      width: 25%;
    }
`}
    </style>
  </div>
}

export default PaintingItem;