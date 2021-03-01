import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Blog, Home } from './pages'
import * as ROUTES from './constants/routes'

export const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BLOG}>
        <Blog />
      </Route>
      <Route exact path={ROUTES.ABOUT}>
        <p>About page goes here</p>
      </Route>
      <Route exact path={ROUTES.CONTACT}>
        <p>Contact page goes here</p>
      </Route>
    </Router>
  )
}
