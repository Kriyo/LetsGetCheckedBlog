import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from '../../components/navbar'
import { HOME, BLOG } from '../../constants/routes'

describe('<NavBar />', () => {
  it('renders the <Navbar /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Router>
        <NavBar>
          <NavBar.Frame>
            <NavBar.Logo to={HOME} src="/logo.svg" alt="Blog Logo" />
            <NavBar.Link alt="a link" to={BLOG}>
              I am a link
            </NavBar.Link>
          </NavBar.Frame>
        </NavBar>
      </Router>
    )

    expect(getByText('I am a link')).toBeTruthy()
    expect(getByTestId('nav-bg')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the <Navbar /> without a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Router>
        <NavBar background={false}>
          <NavBar.Frame>
            <NavBar.Logo to={HOME} src="/logo.svg" alt="Blog Logo" />
            <NavBar.Link to={BLOG} alt="a link">
              I am another link
            </NavBar.Link>
          </NavBar.Frame>
        </NavBar>
      </Router>
    )

    expect(getByText('I am another link')).toBeTruthy()
    expect(queryByTestId('nav-bg')).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
