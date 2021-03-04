import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BlogPost } from '../../pages'
import { Comment } from '../../components'
import { PostsContext } from '../../context/posts'
import {
  HOME_LOADING_STATE_CONTEXT_PROVIDER,
  HOME_ERROR_STATE_CONTEXT_PROVIDER,
  HOME_WORKING_STATE_CONTEXT_PROVIDER,
  MOCK_COMMENTS_RESPONSE,
  MOCK_SINGLE_POST_URL,
} from '../../constants/fixtures'

// Simulate API requests via mocks
const server = setupServer(
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.json(MOCK_COMMENTS_RESPONSE))
  })
)

// Simulate URL for blog post slug
Object.defineProperty(window, 'location', {
  value: new URL(MOCK_SINGLE_POST_URL),
  writable: true,
})

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the <BlogPost/> in a loading state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_LOADING_STATE_CONTEXT_PROVIDER}>
        <BlogPost />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Loading Blog Post')).toBeTruthy()
})

test('renders the <Blog/> in an error state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_ERROR_STATE_CONTEXT_PROVIDER}>
        <BlogPost />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Error Loading Blog Post')).toBeTruthy()
})

test('renders the <Blog/> in a working state/>', () => {
  const { container, getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_WORKING_STATE_CONTEXT_PROVIDER}>
        <BlogPost />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Blog post #1')).toBeTruthy()
  expect(container.firstChild).toMatchSnapshot()
})

test('renders the <Comment/> in a loading state/>', () => {
  const { container } = render(
    <Router>
      <PostsContext.Provider value={HOME_WORKING_STATE_CONTEXT_PROVIDER}>
        <Comment />
      </PostsContext.Provider>
    </Router>
  )

  expect(container.firstChild).toMatchSnapshot()
})
