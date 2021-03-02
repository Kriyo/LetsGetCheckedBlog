import React from 'react'

import { Feature } from '../components'
import { NavContainer } from '../containers'

export const About = () => {
  return (
    <>
      <NavContainer>
        <Feature>
          <Feature.Title>About</Feature.Title>
          <Feature.SubTitle>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </Feature.SubTitle>
        </Feature>
      </NavContainer>
    </>
  )
}
