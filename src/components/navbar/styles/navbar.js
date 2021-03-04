import styled from 'styled-components/macro'
import { Neutral, Primary } from '../../../utils/colors'

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
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: ${Primary[100]};
  a {
    display: flex;
  }
`

export const NavLink = styled.a`
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
