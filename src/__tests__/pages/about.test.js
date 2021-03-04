import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { About } from '../../pages'

test('renders the <About/> in a loading state/>', () => {
  const { getByText } = render(
    <Router>
      <About />
    </Router>
  )

  expect(getByText('About Me')).toBeTruthy()
  expect(
    getByText(
      'Et harum quidem rerum facilis est et expedita distinctio. Nam liberotempore.'
    )
  ).toBeTruthy()
})
