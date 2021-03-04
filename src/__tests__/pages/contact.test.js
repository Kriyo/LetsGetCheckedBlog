import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Contact } from '../../pages'

test('renders the <Contact/> in a loading state/>', () => {
  const { getByText } = render(
    <Router>
      <Contact />
    </Router>
  )

  expect(getByText('Contact Me')).toBeTruthy()
  expect(
    getByText(
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    )
  ).toBeTruthy()
})
