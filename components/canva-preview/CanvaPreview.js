import React from 'react';

import CanvaItem from '../canva-item/CanvaItem';

import './canva-preview.styles.css';

const CanvaPreview = ({canvases}) => {

  return <div className='collection-preview'>
    <div className='preview'>
      {canvases
        .map((canva) => (
          <CanvaItem key={canva.id} canva={canva} />
        ))}
    </div>
  </div>
}

export default CanvaPreview;