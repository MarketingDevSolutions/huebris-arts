import React from 'react'
import PrintItem from '../print-item/PrintItem'
import { ItemContainer } from '../../styles/components/item'

const PrintPreview = ({ prints }) => (
  <ItemContainer>
    {prints.map(print => (
      <PrintItem key={print.id + print.title} print={print} />
    ))}
  </ItemContainer>
)

export default PrintPreview
