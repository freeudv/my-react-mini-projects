import React, { Component } from 'react'
import styled from 'styled-components'

import { Range, Color, DefaultButton, Image } from 'components'

class Filters extends Component {
  state = {
    settings: {
      bg: '#fff',
      spacing: 10,
      blur: 0,
      saturate: 100,
      sepia: 0,
      base: '#3f51b5'
    }
  }

  handleChange = event => {
    const filter = event.target.id
    const value = event.target.value
    const settings = Object.assign({}, this.state.settings, { [filter]: value })

    this.setState({ settings })
  }

  handleClick = () => {
    const settings = {
      bg: '#fff',
      spacing: 10,
      blur: 0,
      saturate: 100,
      sepia: 0,
      base: '#3f51b5'
    }

    this.setState({ settings })
  }

  render() {
    const { bg, spacing, blur, saturate, sepia, base } = this.state.settings

    return (
      <Main bg={bg}>
        <Title>
          React CSS <Span color={base}>Filters</Span>
        </Title>

        <Controls>
          <Range
            name="spacing"
            value={spacing}
            min={0}
            max={50}
            onChange={this.handleChange}
          />

          <Range
            name="blur"
            value={blur}
            min={0}
            max={10}
            onChange={this.handleChange}
          />

          <Range
            name="saturate"
            value={saturate}
            min={0}
            max={200}
            onChange={this.handleChange}
          />

          <Range
            name="sepia"
            value={sepia}
            min={0}
            max={100}
            onChange={this.handleChange}
          />

          <Color name="base" value={base} onChange={this.handleChange} />
        </Controls>

        <Image settings={this.state.settings} />

        <DefaultButton bg={bg} color={base} onClick={this.handleClick} />
      </Main>
    )
  }
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: 20px;
  background: ${({ bg }) => bg};
  color: #3f51b5;
  text-align: center;
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
`

const Span = styled.span`color: ${({ color }) => color};`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 20px;
`
export default Filters
