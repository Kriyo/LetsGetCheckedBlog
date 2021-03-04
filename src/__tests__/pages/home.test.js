import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../../pages'
import { PostsContext } from '../../context/posts'
import {
  HOME_LOADING_STATE_CONTEXT_PROVIDER,
  HOME_ERROR_STATE_CONTEXT_PROVIDER,
  HOME_WORKING_STATE_CONTEXT_PROVIDER,
} from '../../constants/fixtures'

test('renders the <Home/> in a loading state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_LOADING_STATE_CONTEXT_PROVIDER}>
        <Home />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Simple Blog')).toBeTruthy()
  expect(
    getByText(
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    )
  ).toBeTruthy()
  expect(getByText('loading data')).toBeTruthy()
})

test('renders the <Home/> in an error state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_ERROR_STATE_CONTEXT_PROVIDER}>
        <Home />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Simple Blog')).toBeTruthy()
  expect(
    getByText(
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    )
  ).toBeTruthy()
  expect(getByText('Error loading blog posts')).toBeTruthy()
})

test('renders the <Home/> in a working state/>', () => {
  const { getByText } = render(
    <Router>
      <PostsContext.Provider value={HOME_WORKING_STATE_CONTEXT_PROVIDER}>
        <Home />
      </PostsContext.Provider>
    </Router>
  )

  expect(getByText('Simple Blog')).toBeTruthy()
  expect(
    getByText(
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    )
  ).toBeTruthy()
  expect(getByText('Blog post #10')).toBeTruthy()
})
