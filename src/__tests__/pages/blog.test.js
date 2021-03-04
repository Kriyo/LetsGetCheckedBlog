import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Blog } from '../../pages'
import { PostsContext } from '../../context/posts'
import {
  HOME_LOADING_STATE_CONTEXT_PROVIDER,
  HOME_ERROR_STATE_CONTEXT_PROVIDER,
  HOME_WORKING_STATE_CONTEXT_PROVIDER,
} from '../../constants/fixtures'

test('renders the <Blog/> in a loading state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_LOADING_STATE_CONTEXT_PROVIDER}>
        <Blog />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Loading all Blog posts')).toBeTruthy()
})

test('renders the <Blog/> in an error state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_ERROR_STATE_CONTEXT_PROVIDER}>
        <Blog />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Error loading all Blog posts')).toBeTruthy()
})

test('renders the <Blog/> in a working state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_WORKING_STATE_CONTEXT_PROVIDER}>
        <Blog />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Blog post #10')).toBeTruthy()
  expect(getByText('Blog post #9')).toBeTruthy()
  expect(getByText('Blog post #8')).toBeTruthy()
  expect(getByText('Blog post #7')).toBeTruthy()
  expect(getByText('Blog post #6')).toBeTruthy()
  expect(getByText('Blog post #5')).toBeTruthy()
  expect(getByText('Blog post #4')).toBeTruthy()
  expect(getByText('Blog post #3')).toBeTruthy()
  expect(getByText('Blog post #2')).toBeTruthy()
  expect(getByText('Blog post #1')).toBeTruthy()
})
