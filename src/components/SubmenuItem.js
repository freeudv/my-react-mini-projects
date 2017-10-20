import React from 'react'
import styled from 'styled-components'

const SubmenuItem = ({ children }) => (
  <Item>
    <Link href="#">{children}</Link>
  </Item>
)

const Item = styled.li`
  padding: 5px 0;
  padding-left: 15px;
  list-style-type: none;
`

const Link = styled.a`
  text-decoration: none;
  font-weight: 300;
  color: #000;

  &:hover {
    font-weight: 500;
  }
`

export default SubmenuItem
