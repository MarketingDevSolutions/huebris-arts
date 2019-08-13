import React from 'react'

import PaintingItem from '../painting-item/PaintingItem'

import './painting-preview.styles.css'

const PaintingPreview = ({ paintings }) => {
  return <div className='collection-preview'>
    <div className='preview'>
      {paintings
        .map((painting) => (
          <PaintingItem key={painting.id + painting.title} painting={painting} />
        ))}
    </div>
  </div>
}

export default PaintingPreview
