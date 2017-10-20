import React from 'react'
import styled from 'styled-components'

import { SubmenuList } from 'components'

const MenuItem = ({ id, name, submenu, active, handleClick }) => {
  return (
    <Item>
      <Text active={active} even={id % 2} onClick={() => handleClick(id)}>
        {name}
      </Text>
      {active && <SubmenuList submenu={submenu} />}
    </Item>
  )
}

const Item = styled.li`
  list-style-type: none;
  position: relative;
  margin-bottom: 5px;
  font-weight: 500;
  background-color: #a4addf;
  border-radius: 10px;
`

const Text = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px 40px 10px 20px;
  color: ${props => (props.active ? '#fff' : props.even ? '#fff' : '#000')};
  background: ${props =>
    props.active ? '#ff4081' : props.even ? '#3f51b5' : '#a4addf'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    border-style: solid;
    border-width: ${props =>
      props.active ? '0 7px 14px 7px' : '14px 7px 0 7px'};
    border-color: ${props =>
      props.active
        ? 'transparent transparent #fff transparent'
        : '#ff4081 transparent transparent transparent'};
  }
`

export default MenuItem
