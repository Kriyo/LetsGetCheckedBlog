import React from 'react'
import { render } from '@testing-library/react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { App } from '../App'

import { SORTED_BLOG_DATA } from '../constants/fixtures'

// Simulate API requests via mocks
const server = setupServer(
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.json(SORTED_BLOG_DATA))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the <App/>', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchSnapshot()
})
