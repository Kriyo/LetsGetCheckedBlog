import styled from 'styled-components/macro'
import { Primary } from '../../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: ${Primary[200]};

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1100px;
  margin: 50px 0;
  width: 25%;
  padding: 50px;
  background: ${Primary[100]};

  @media (max-width: 1000px) {
    margin: auto;
    padding: 0;
    width: 100%;
  }
`

export const Title = styled.h2``

export const Description = styled.h3``

export const Author = styled.h4``

export const Content = styled.p``

export const Link = styled.a``

// Maybe use unsplash to put some assets in
// https://unsplash.it/600/800?image=1061
