import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BLOG}>
        <p>Blog page goes here</p>
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
