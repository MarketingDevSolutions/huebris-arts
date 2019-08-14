import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import { Container, Description } from '../styles/pages'

function Index (props) {
  const { paintings } = props

  return (
    <Layout title='Huebris Arts'>
      <>
        <h1 style={{ textAlign: 'center' }}>HUEBRIS ARTS</h1>
        <h3 style={{ textAlign: 'center' }}>SLIDER</h3>
        <Description>Welcome to Huebris Arts, where you can find original abstract artwork, acrylic and watercolor paintings, hand drawn portraits, prints, merchandise and request custom-made art pieces designed to bring your vision to life by artist Lauren “Huebris” Rust.</Description>
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
