import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Header from './../header/Header'
import Cart from './../cart/Cart'
import { connect } from 'react-redux'
import * as contentful from 'contentful'
import Footer from '../footer/Footer'

NProgress.configure({
  showSpinner: false
})
Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function Layout ({
  paintings,
  fillPaintings,
  fillPrints,
  fillCanvases,
  fillStickers,
  fillCombos,
  children,
  title
}) {
  const [loading, setLoading] = useState(false)

  const getContentfulData = () => {
    if (paintings.length < 1) {
      setLoading(true)

      const client = contentful.createClient({
        space: 'kf25a7avo9h9',
        accessToken: 'Ln1PuE867-L4Jrs8Kg0uUO3L35QfFaIwzQktuhjrgfA'
      })

      client.getEntries().then(entries => {
        setLoading(false)

        // Filters paintings
        const paintings = entries.items.filter((entry) => {
          return entry.sys.contentType.sys.id === 'painting'
        }).map((item) => {
          return item.fields
        })

        // Filters prints
        const prints = entries.items.filter((entry) => {
          return entry.sys.contentType.sys.id === 'prints'
        }).map((item) => {
          return item.fields
        })

        // Filters canvases
        const canvases = entries.items.filter((entry) => {
          return entry.sys.contentType.sys.id === 'miniCanvas'
        }).map((item) => {
          return item.fields
        })

        // Filters stickers
        const stickers = entries.items.filter((entry) => {
          return entry.sys.contentType.sys.id === 'sticker'
        }).map((item) => {
          return item.fields
        })

        // Filters combos
        const combos = entries.items.filter((entry) => {
          return entry.sys.contentType.sys.id === 'combo'
        }).map((item) => {
          return item.fields
        })

        fillPaintings(paintings)
        fillPrints(prints)
        fillCanvases(canvases)
        fillStickers(stickers)
        fillCombos(combos)
      })
    }
  }

  useEffect(() => {
    getContentfulData()
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' type='image/x-icon' href='/static/logo.png' />
        <title>{title}</title>
        <link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap' rel='stylesheet' />
      </Head>
      <Header />
      <hr className='layout-hr' />
      { loading ? <h3>Loading...</h3> : children }
      <Cart />
      <hr className='layout-hr' />
      <Footer />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fillPaintings: (paintings) => dispatch({
      type: 'FILL_PAINTINGS',
      paintings
    }),
    fillPrints: (prints) => dispatch({
      type: 'FILL_PRINTS',
      prints
    }),
    fillCanvases: (canvases) => dispatch({
      type: 'FILL_CANVASES',
      canvases
    }),
    fillCombos: (combos) => dispatch({
      type: 'FILL_COMBOS',
      combos
    }),
    fillStickers: (stickers) => dispatch({
      type: 'FILL_STICKERS',
      stickers
    })
  }
}

function mapStateToProps (state) {
  const { paintings } = state
  return { paintings }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
