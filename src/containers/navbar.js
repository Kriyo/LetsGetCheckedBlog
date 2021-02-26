import React from 'react'
import { NavBar } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../white-logo.png'

export const NavContainer = ({ children }) => {
  return (
    <NavBar>
      <NavBar.Frame>
        <NavBar.Logo alt="Lets Get Checked Blog Logo" src={logo} />
        <NavBar.Link to={ROUTES.HOME}>Home</NavBar.Link>
        <NavBar.Link to={ROUTES.BLOG}>Blog</NavBar.Link>
        <NavBar.Link to={ROUTES.CONTACT}>Contact</NavBar.Link>
        <NavBar.Link to={ROUTES.ABOUT}>About</NavBar.Link>
      </NavBar.Frame>
      {children}
    </NavBar>
  )
}
