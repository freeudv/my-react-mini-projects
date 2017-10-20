import React from 'react'
import styled from 'styled-components'

const Range = ({ name, value, min, max, onChange }) => {
  const title = name[0].toUpperCase() + name.slice(1) + ':'

  return (
    <Wrapper>
      <Label>
        <div>{title}</div>
        <div>{value}</div>
      </Label>
      <Input
        id={name}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`display: inline-block;`

const Label = styled.label`
  display: flex;
  justify-content: space-between;
`
const Input = styled.input`width: 150px;`

export default Range
