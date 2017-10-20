import React, { Component } from 'react'
import styled from 'styled-components'

import { MenuList } from 'components'

class Accordion extends Component {
  state = { items: this.props.items, activeItem: 0 }

  handleClick = id => {
    const { items, activeItem } = this.state
    const item = items.find(item => item.id === id)
    item.id === activeItem
      ? this.setState({ activeItem: 0 })
      : this.setState({ activeItem: id })
  }

  render() {
    const { items, activeItem } = this.state

    return (
      <main>
        <h2 className="main__title">Accordion menu</h2>
        <Nav>
          <MenuList
            items={items}
            activeItem={activeItem}
            handleClick={this.handleClick}
          />
        </Nav>
      </main>
    )
  }
}

const Nav = styled.nav`
  width: 460px;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 15px;
`

export default Accordion
