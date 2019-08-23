import React from 'react'
import Helmet from 'react-helmet'
import { Link } from '../../routes'
import { Item, ItemFooter } from '../../styles/components/item'
import slug from '../../helpers/slug'

const RegularItem = ({ item, linksTo }) => {
  const { url } = item.image.fields.file
  const { title, id } = item;
  console.log(linksTo)
    return (
        <div>
                    { linksTo ? <Link 
                                  route={linksTo} 
                                  params={{
                                    slug: slug(title),
                                    id
                                  }} prefetch>
                                    <div>
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
                                          </div>
                                          </Link> 
                                          : <div>
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
                                          </div>
                                        }
                    </div>
      )
}

export default RegularItem;
