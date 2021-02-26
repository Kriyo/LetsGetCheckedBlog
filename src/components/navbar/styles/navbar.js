import styled from 'styled-components/macro'
import { Neutral } from '../../../utils/colors'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.5)
    ),
    url('../images/blog-background.jpg') top left / cover no-repeat;
`

export const Container = styled.nav`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`

export const Link = styled.p`
  color: ${Neutral[100]};
  text-decoration: none;
  margin-right: 30px;
  font-weight: 'normal';
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 40px;
`
