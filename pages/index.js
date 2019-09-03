import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import HomeSlider from './../components/home-slider/HomeSlider'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import { Container, Description, EventSmall, EventBig } from '../styles/pages/index';

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
          <h1 style={{ textAlign: 'center' }}>Thanks to all who came out to support Huebris Arts and other vendors at the first annual New Mexico Prickly Pear Festival. 
          Thank you to the event organizers for a wonderful time and the opportunity to celebrate our community!</h1>
          <Container>
            <EventSmall src="./../static/event-0.jpeg" alt="Event"/>
            <EventSmall src="./../static/event-1.jpeg" alt="Event"/>
            <EventSmall src="./../static/event-2.jpeg" alt="Event"/>
            <EventBig src="./../static/event-3.jpeg" alt="Event"/>
            <EventBig src="./../static/event-4.jpeg" alt="Event"/>
          </Container>
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
