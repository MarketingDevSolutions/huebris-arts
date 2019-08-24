import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import HomeSlider from './../components/home-slider/HomeSlider'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import { Container, Description } from '../styles/pages'

function Index (props) {
  const { paintings } = props

  return (
    <Layout title='Huebris Arts'>
      <>
        <h1 style={{ textAlign: 'center' }}>HUEBRIS ARTS</h1>
        <div style={{ margin: '30px 0' }}>
          <HomeSlider />
        </div>
        <Description>Welcome to Huebris Arts, where you can find original abstract artwork, acrylic and watercolor paintings, hand drawn portraits, prints, merchandise and request custom-made art pieces designed to bring your vision to life by artist Lauren “Huebris” Rust.</Description>
        <Container>
          <h1 style={{ textAlign: 'center' }}>Come see Huebris Arts at the New Mexico Prickly Pear Festival in Albuquerque on Saturday August 31st from 10am to 6pm. More information at:</h1>
          <a style={{ textAlign: 'center', fontSize: '20px' }} href='https://www.facebook.com/events/three-sisters-kitchen/new-mexico-prickly-pear-festival/347766582608198/' target='_blank'><b>Facebook event page</b></a><br />
          <a style={{ textAlign: 'center', fontSize: '20px' }} href='https://www.nmpricklypearfest.com/' target='_blank'><b>Event webpage</b></a><br />
          <a style={{ textAlign: 'center', fontSize: '20px' }} href='https://www.nmpricklypearfest.com/vendors' target='_blank'><b>Info about Huebris Arts as a vendor</b></a>
        </Container>
        <h3 style={{ textAlign: 'center' }}>MY LATEST WORKS</h3>
        <Container>
          <PaintingPreview paintings={paintings} />
        </Container>
      </>
    </Layout>
  )
}

function mapStateToProps (state) {
  const { paintings } = state
  return { paintings: paintings.filter((painting, i) => i < 5) }
}

export default connect(mapStateToProps)(Index)
