import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { NavContainer, PostContainer } from '../containers'
import {} from '../containers/post'
import { POSTS_ENDPOINT } from '../constants/api'

export const Blog = () => {
  const { blogPosts, error, loading } = useFetch(POSTS_ENDPOINT, 'posts')

  return (
    <>
      <NavContainer />
      {error || null}
      {loading || <PostContainer blogPosts={blogPosts} />}
    </>
  )
}
