import React from 'react'
import { NavBar } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../white-logo.png'

export const NavContainer = ({ children }) => {
  return (
    <NavBar>
      <NavBar.Frame>
        <NavBar.Logo
          to={ROUTES.HOME}
          alt="Lets Get Checked Blog Logo"
          src={logo}
        />
        <NavBar.Link alt="Go to Home page" to={ROUTES.HOME}>
          Home
        </NavBar.Link>
        <NavBar.Link alt="Go to Blog page" to={ROUTES.BLOG}>
          Blog
        </NavBar.Link>
        <NavBar.Link alt="Go to Contact page" to={ROUTES.CONTACT}>
          Contact
        </NavBar.Link>
        <NavBar.Link alt="Go to About page" to={ROUTES.ABOUT}>
          About
        </NavBar.Link>
      </NavBar.Frame>
      {children}
    </NavBar>
  )
}
