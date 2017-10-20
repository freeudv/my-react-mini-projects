import React from 'react'
import styled from 'styled-components'

const Image = ({ settings }) => (
  <Img src="img/image.jpg" alt="image" width="800" {...settings} />
)

const Img = styled.img`
  padding: ${({ spacing }) => `${spacing}px`};
  background: ${({ base }) => base};
  filter: ${({ blur, sepia, saturate }) =>
    `blur(${blur}px) sepia(${sepia}%) saturate(${saturate}%)`};
`

export default Image
