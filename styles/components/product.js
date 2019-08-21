import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Select = styled.select`
  color: #fff;
  font-size: 14px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  background: transparent;
  height: 100%;
  width: 100%;
  cursor: pointer;
  outline: none;
  padding-right: 35px;
  padding-left: 15px;
  border: 1px solid #000;
  border-radius: 8px;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 0.3s ease-on-out;

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  &::-ms-expand {
    display: none;
  }

  &:hover {
    color: #000;
  }
`

export const SelectWrapper = styled.div`
  position: relative;
  height: 32px;
  background: #000;
  color: white;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  margin-top: 16px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  max-width: 180px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
    pointer-events: none;
  }

  &::before {
    width: 30px;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    content: '';
    pointer-events: none;
  }

  &:hover {
    background: transparent;

    &::after {
      border-color: #000 transparent transparent transparent;
    }
  }

  @media all and (min-width: 0\0) and (min-resolution: 0.001dpcm) {
    & ${Select} {
      padding-right: 0;
    }

    &::after, &::before {
      display: none;
    }
  }
`

export const ResetAmount = styled.a`
  cursor: pointer;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  transition: all 0.3s ease-in-out;
  max-width: 170px;
  align-self: center;
  width: 100%;

  &:hover {
    background: #000;
    color: #fff;
  }
`
