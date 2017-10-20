import React from 'react'
import styled from 'styled-components'

const Color = ({ name, value, onChange }) => {
  const title = 'Color: '

  return (
    <Wrapper>
      <Label>
        <Div>{title}</Div>
        <Div>{value}</Div>
      </Label>
      <Input id={name} type="color" value={value} onChange={onChange} />
    </Wrapper>
  )
}

const Wrapper = styled.div`display: inline-block;`

const Label = styled.label`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input``

const Div = styled.div``

export default Color
