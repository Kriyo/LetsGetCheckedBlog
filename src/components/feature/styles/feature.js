import styled from 'styled-components/macro'
import { Primary } from '../../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid ${Primary[300]};
  text-align: center;
  padding: 355px 45px;
  @media (max-width: 600px) {
    padding: 165px 45px;
  }
`

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3rem;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.6rem;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`
