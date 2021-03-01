import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, NavLink, Logo } from './styles/navbar'

export const NavBar = ({ background = true, children, ...props }) => {
  return background ? <Background {...props}>{children}</Background> : children
}

NavBar.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

NavBar.Link = ({ to, children, ...props }) => {
  return (
    <NavLink href={to} {...props}>
      {children}
    </NavLink>
  )
}

NavBar.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}
