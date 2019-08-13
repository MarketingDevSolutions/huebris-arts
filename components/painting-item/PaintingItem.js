import React from 'react'
import slug from '../../helpers/slug'
import { Link } from '../../routes'
import { Item, ItemFooter } from '../../styles/components/item'

export default function PaintingItem ({ painting }) {
  const { url } = painting.picture.fields.file
  const { title, measurements, id } = painting

  return <Link route='painting' params={{
    slug: slug(title),
    id
  }} prefetch>
    <Item>
      <img src={url} className='lazyload' alt={title} loading='lazy' />
      <ItemFooter>
        <h2><b>{title}</b></h2>
        <span>{measurements}</span>
      </ItemFooter>
    </Item>
  </Link>
}
