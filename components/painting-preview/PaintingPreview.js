import React from 'react';

import PaintingItem from '../painting-item/PaintingItem';

const PaintingPreview = ({ paintings}) => {

console.log(paintings);

  return <div className='collection-preview'>
    <div className='preview'>
      {paintings
        .map((painting) => (
          <PaintingItem key={painting.id} painting={painting} />
        ))}
    </div>
    <style jsx>
      {`
        .collection-preview {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
          }

        .preview {
          display: flex;
          justify-content: space-between;
        }
        `}
    </style>
  </div>
}

export default PaintingPreview;