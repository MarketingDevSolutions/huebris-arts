import React from 'react'
import PaintingItem from '../painting-item/PaintingItem'
import './painting-preview.styles.css'

const PaintingPreview = ({ paintings }) => (
  <div className='collection-preview'>
    {paintings
      .map((painting) => (
        <PaintingItem key={painting.id + painting.title} painting={painting} />
      ))}
  </div>
)

export default PaintingPreview
