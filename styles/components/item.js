import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Item = styled.a`
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  & img {
    max-width: 500px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`

export const ItemFooter = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
  padding: 8px 0;
  text-align: center;

  & h2 {
    margin: 0;
    font-size: 18px;
  }
`
