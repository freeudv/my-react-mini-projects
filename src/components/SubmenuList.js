import React from 'react'
import styled, { keyframes } from 'styled-components'

import { SubmenuItem } from 'components'

const SubmenuList = ({ submenu }) => {
  return (
    <Submenu>
      {submenu.map((subItem, i) => (
        <SubmenuItem key={i}>{subItem}</SubmenuItem>
      ))}
    </Submenu>
  )
}

const down = keyframes`
  0% {transform: translateY(-50%); opacity: 0}
  100% {transform: translateY(0); opacity: 1}
`

const Submenu = styled.ul`
  padding: 0;
  animation: ${down} 0.5s;
`

export default SubmenuList
