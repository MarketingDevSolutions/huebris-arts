import React from 'react'
import PrintItem from '../print-item/PrintItem'
import './print-preview.styles.css'

const PrintPreview = ({ prints }) => (
  <div className='collection-preview'>
    <div className='preview'>
      {prints.map((print) => (
        <PrintItem key={print.id} print={print} />
      ))}
    </div>
  </div>
)

export default PrintPreview
