import React from 'react'
import { NavBar } from '../components'
import logo from '../white-logo.png'

export const NavContainer = ({ children }) => {
  return (
    <NavBar>
      <NavBar.Frame>
        <NavBar.Logo alt="Lets Get Checked Blog Logo" src={logo} />
        <NavBar.Link>Home</NavBar.Link>
        <NavBar.Link>Blog</NavBar.Link>
        <NavBar.Link>Contact</NavBar.Link>
        <NavBar.Link>About</NavBar.Link>
      </NavBar.Frame>
      {children}
    </NavBar>
  )
}
