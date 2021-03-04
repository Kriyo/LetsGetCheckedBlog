import React from 'react'

import { Feature } from '../components'
import { NavContainer } from '../containers'

export const About = () => {
  return (
    <>
      <NavContainer>
        <Feature>
          <Feature.Title>About Me</Feature.Title>
          <Feature.SubTitle>
            Et harum quidem rerum facilis est et expedita distinctio. Nam
            liberotempore.
          </Feature.SubTitle>
        </Feature>
      </NavContainer>
    </>
  )
}
