import React from 'react'
import { Background, Container, Link, Logo } from './styles/navbar'

export default function NavBar({ background = true, children, ...props }) {
  return background ? <Background {...props}>{children}</Background> : children
}

NavBar.Frame = function NavBarFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

NavBar.Link = function NavBarLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>
}

NavBar.Logo = function NavBarLogo({ to, ...restProps }) {
  return <Logo {...restProps} />
}
