import styled from 'styled-components'

export const Image = styled.img`
  width: 350px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const GridItem = styled.div`
  margin: 4px 8px;
  text-align: center;
`

export const ReturnContainer = styled.div`
  text-align: center;
  margin-top: 48px;
`
