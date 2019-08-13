import React from 'react'
import {
  Footer as FooterTag,
  Div,
  Container,
  Copyright
} from '../../styles/components/footer'

function Footer () {
  return (
    <FooterTag>
      <Div>
        <Container>
          <Copyright><b>© 2019. Huebris Arts. All rights reserved.</b></Copyright>
        </Container>
      </Div>
    </FooterTag>

  )
}

export default Footer
