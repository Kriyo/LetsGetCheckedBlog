import React from 'react'

import { Container, Title, SubTitle } from './styles/feature'

export const Feature = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Feature.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Feature.SubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}
