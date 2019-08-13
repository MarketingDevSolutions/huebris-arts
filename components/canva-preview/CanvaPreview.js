import React from 'react'
import CanvaItem from '../canva-item/CanvaItem'
import { ItemContainer } from '../../styles/components/item'

const CanvaPreview = ({ canvases }) => (
  <ItemContainer>
    {canvases
      .map((canva) => (
        <CanvaItem key={canva.id + canva.title} canva={canva} />
      ))}
  </ItemContainer>
)

export default CanvaPreview
