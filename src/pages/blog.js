import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { NavContainer } from '../containers/navbar'
import { POSTS_ENDPOINT } from '../constants/api'

export const Blog = () => {
  const { data, error, loading } = useFetch(POSTS_ENDPOINT, 'posts')

  return (
    <>
      <NavContainer>
        {error || null}
        {loading ||
          data.map((post) => (
            <p key={`post-${post.id}`}>
              {post.title} - {post.author} - {post.publish_date}
            </p>
          ))}
      </NavContainer>
    </>
  )
}
