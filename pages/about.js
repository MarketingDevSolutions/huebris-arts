import React from 'react'
import Layout from '../components/layout/Layout'
import {
  Photo,
  Title,
  Text,
  SocialTitle,
  Row
} from '../styles/pages/about'

export default function About () {
  return (
    <Layout title='About | Huebris Arts'>
      <div className='maincontent'>
        <Photo src='../static/huebris.png' alt='Huebris' />

        <Title>Huebris (Lauren Rust)</Title>

        <Text>
          Since I was a child, I have been drawing, painting, taking photos and creating things. I continue this
          childhood passion with the aim of expressing ideas, opinions and feelings that I have. I go by the name 'Huebris'
          as an artist because I like anonymity and I identify with the concept of 'hubris' from Greek tragedies; a character
          flaw marked by excessive pride which brings the hero to her ultimate demise. I changed the spelling of the word to
          include "hue" in reference to the bright colors I work with. In this site you will see various original works that
          I have converted into prints, as well as drawings and photos. I am happy to do customized or commission work, if
          interested, please call or email me and we can set up a time to meet or video call.
        </Text>

        <SocialTitle>Social Networks</SocialTitle>
        <Row>
          <a href='https://www.facebook.com/huebris.arts' target='_blank' rel='noopener noreferrer'>
            <img src='./../../static/face.png' />
            <label>Follow me on Facebook </label>
          </a>
        </Row>
        <Row>
          <a href='https://www.instagram.com/huebris.arts/' target='_blank' rel='noopener noreferrer'>
            <img src='./../../static/ig.png' />
            <label>Follow me on Instagram </label>
          </a>
        </Row>
      </div>
    </Layout>
  )
}
