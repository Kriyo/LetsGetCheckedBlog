import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

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
  margin: 50px;
  width: 25%;

  @media (max-width: 1000px) {
    margin: auto;
  }
`

export const Title = styled.h2``

export const Description = styled.h3``

export const Author = styled.h4``

export const PublishDate = styled.h4``

export const Content = styled.p``
