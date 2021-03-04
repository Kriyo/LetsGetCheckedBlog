import styled from 'styled-components/macro'
import { Neutral } from '../../../utils/colors'

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1100px;
  margin: 50px 0;
  width: 25%;
  padding: 50px;
  background: ${Neutral[100]};
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${Neutral[300]};
    transform: translateY(-20px);
  }

  @media (max-width: 1000px) {
    padding: 0;
    width: 100%;
    margin: 25px 0;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: ${Neutral[200]};

  @media (max-width: 1000px) {
    flex-direction: column;

    ${Item}:first-of-type {
      margin-top: 0px;
    }
  }
`

export const Image = styled.img`
  height: 400px;
  width: 100%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.h2`
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`

export const Description = styled.h3`
  margin-top: 0;
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`

export const Author = styled.p`
  display: flex;
  margin: 0;
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`

export const Content = styled.p`
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`

export const Link = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 45px;
  color: ${Neutral[400]};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

// Maybe use unsplash to put some assets in
// https://unsplash.it/600/800?image=1061
