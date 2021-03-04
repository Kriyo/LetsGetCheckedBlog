import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Blog, BlogPost, Home, Contact, About } from './pages'
import * as ROUTES from './constants/routes'
import { POSTS_ENDPOINT } from './constants/api'
import { PostsContext } from './context/posts'
import { sortByDate } from './lib/sortByDate'

export const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = () => {
    return fetch(POSTS_ENDPOINT)
      .then((response) => response.json())
      .catch((error) => {
        setPosts({ blog: null, error })
      })
      .then((response) => {
        if (response) {
          const reOrderByDate = sortByDate(response, 'posts')
          setPosts({ blog: reOrderByDate, error: null })
        }
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Router>
      <PostsContext.Provider value={{ loading, posts, setPosts }}>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BLOG}>
          <Blog />
        </Route>
        <Route exact path={ROUTES.BLOGPOST}>
          <BlogPost />
        </Route>
      </PostsContext.Provider>

      <Route exact path={ROUTES.ABOUT}>
        <About />
      </Route>
      <Route exact path={ROUTES.CONTACT}>
        <Contact />
      </Route>
    </Router>
  )
}
