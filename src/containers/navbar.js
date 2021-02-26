import React from 'react'
import { Nav } from '../components'
import logo from '../white-logo.png'

export function NavContainer({ children }) {
  return (
    <Nav>
      <Nav.Frame>
        <Nav.Logo alt="Lets Get Checked Blog Logo" src={logo} />
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Blog</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
        <Nav.Link>About</Nav.Link>
      </Nav.Frame>
      {children}
    </Nav>
  )
}
