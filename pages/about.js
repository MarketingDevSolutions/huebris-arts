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
          Since I was a child, I have been drawing, painting, 
          taking photos and creating things. I continue this 
          childhood passion with the aim of expressing ideas, 
          opinions and feelings that I have. I go by the name 
          ‘Huebris’ as an artist because I identify with the 
          concept of ‘hubris’ from Greek tragedies; a character 
          flaw marked by excessive pride which brings the hero 
          to her ultimate demise. I think that we each experience 
          hubris in our daily lives, but that is what helps us learn, 
          grow, and create. I changed the spelling of the word to include 
          “hue” in reference to the bright colors I work with. I love to 
          use acrylic paint, glitter, oil crayons, sequins and materials 
          that I find around, in my artwork. In this site you will
           see various original works that I have converted into prints 
           and other merchandise, as well as drawings and projects that 
           I have collaborated with people on. If you are interested in 
           any custom-made work, commissions or projects, please call, 
           email or message me through this page or any of my social 
           media outlets and we can work together! 
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
