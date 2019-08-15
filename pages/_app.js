import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import withReduxStore from '../lib/with-redux-store'
import '../styles/styles.css'

class MyApp extends App {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Yay! Workbox is loaded 🎉')
        })
        .catch(err => {
          console.warn("Boo! Workbox didn't load 😬", err.message)
        })
    }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <>
        <Helmet>
          <script id='lazy-loading'>
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
              // Dynamically import the LazySizes library
              const script = document.createElement('script');
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
              document.body.appendChild(script);
            }
          `}
          </script>
          <script src='https://www.paypalobjects.com/api/checkout.js' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' />
        </Helmet>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </>
    )
  }
}

export default withReduxStore(MyApp)
