import styled from 'styled-components'

export const Price = styled.div`
  display: flex;
  align-items: center;

  & label {
    font-size: 16px;
    margin-right: 8px;
  }

  & input {
    border: 1px solid #000 !important;
    border-radius: 8px !important;
    height: 2rem !important;
    padding-left: 8px !important;
  }

  & .dropdown-content li > span {
    color: #000 !important;
  }
`
