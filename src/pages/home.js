import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Feature } from '../components'
import { NavContainer } from '../containers/navbar'

export const Home = () => {
  useFetch('http://localhost:9000/posts')

  return (
    <>
      <NavContainer>
        <Feature>
          <Feature.Title>Simple Blog</Feature.Title>
          <Feature.SubTitle>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </Feature.SubTitle>
        </Feature>
      </NavContainer>
    </>
  )
}
