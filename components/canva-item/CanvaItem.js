import React from 'react'
import Helmet from 'react-helmet'
import { Item, ItemFooter } from '../../styles/components/item'

const CanvaItem = ({ canva }) => {
  const { url } = canva.image.fields.file
  const { title } = canva

  return (
    <>
      <Helmet>
        <script>
          {`
          if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              img.src = img.src;
              img.loading = 'lazy';
              img.setAttribute('data-src', img.src);
            });
          } else {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
              img.classList.add('lazyload');
            });
          }
        `}
        </script>
      </Helmet>
      <Item>
        <img src={url} className='image' alt={title} />
        <ItemFooter>
          <h2><b>{title}</b></h2>
        </ItemFooter>
      </Item>
    </>
  )
}

export default CanvaItem
