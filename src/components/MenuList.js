import React from 'react'
import styled from 'styled-components'

import { MenuItem } from 'components'

const MenuList = ({ items, activeItem, handleClick }) => {
  return (
    <List>
      {items.map(item => (
        <MenuItem
          key={item.id}
          active={activeItem === item.id}
          handleClick={handleClick}
          {...item}
        />
      ))}
    </List>
  )
}

const List = styled.ul`padding: 0;`

export default MenuList
