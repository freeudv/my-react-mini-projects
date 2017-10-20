import React from 'react'
import styled from 'styled-components'

const DefaultButton = ({ bg, color, onClick }) => (
  <Button bg={bg} color={color} onClick={onClick}>
    Default Settings
  </Button>
)

const Button = styled.button`
  display: block;
  margin: 10px auto;
  padding: 5px 20px;
  font-size: 20px;
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${({ bg }) => bg};
    background-color: ${({ color }) => color};
  }
`

export default DefaultButton
