import styled from 'styled-components'

export const Photo = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 350px;
  display: block;
  margin:auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.89;
  }
`

export const Title = styled.h1`
  font-size:50px;
  margin-top: 30px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 20px;
  text-align: justify;
`

export const SocialTitle = styled.h4`
  text-align: center;
`

export const Row = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;

  & a {
    display: flex;
    align-items: center;

    & img {
      width: 36px;
      height: 36px;
    }

    & label {
      margin-left: 8px;
    }
  }
`
