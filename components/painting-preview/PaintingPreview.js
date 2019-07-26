import React from 'react';

import PaintingItem from '../painting-item/PaintingItem';

import './painting-preview.styles.css';

const PaintingPreview = ({paintings}) => {

console.log(paintings);

  return <div className='collection-preview'>
    <div className='preview'>
      {paintings
        .map((painting) => (
          <PaintingItem key={painting.id} painting={painting} />
        ))}
    </div>
  </div>
}

export default PaintingPreview;