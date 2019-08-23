import React from 'react'
import RegularItem from '../regular-item/RegularItem'
import { ItemContainer } from '../../styles/components/item'

const ItemPreview = ({ items, type }) => {
		switch (type) {
			case 'canvases': 
				return (
						  <ItemContainer>
						    {items
						      .map((canva) => (
						        <RegularItem key={canva.id} item={canva} linksTo="canvas"/>
						      ))}
						  </ItemContainer>
						)
			case 'stickers': 
				return (
						  <ItemContainer>
						    {items
						      .map((sticker) => (
						        <RegularItem key={sticker.id} item={sticker}/>
						      ))}
						  </ItemContainer>
						)
			case 'combos': 
				return (
						  <ItemContainer>
						    {items
						      .map((combo) => (
						        <RegularItem key={combo.id} item={combo} linksTo="combo"/>
						      ))}
						  </ItemContainer>
						)
		}
}

export default ItemPreview
