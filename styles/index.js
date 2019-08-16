import styled from 'styled-components'

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  letter-spacing: 0.5px;
  font-size: 15px;
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
  margin-top: 16px;
  cursor: pointer;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:focus {
    outline: 0;
  }
`
