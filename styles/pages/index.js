import styled from 'styled-components';

export const EventSmall = styled.img`
  width: 30%; 
  height: auto;
  margin: 5px;

  @media (max-width: 576px) {
      width: 100%;
    }
`;

export const EventBig = styled.img`
  width: 45%; 
  height: auto;
  margin: 8px;

  @media (max-width: 576px) {
      width: 100%;
    }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
`

export const Description = styled.h4`
  font-size: 24px;
  text-align: center;
  magin: 0 15vw;
  padding: 0 15vw;
`
