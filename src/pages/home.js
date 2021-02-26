import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Feature } from '../components'
import { NavContainer } from '../containers/navbar'

export const Home = () => {
  const { data, error, loading } = useFetch(
    'http://localhost:9000/posts',
    'posts'
  )

  // Might be cool to display 3 most recent posts on the home page
  const numberOfPostsToDisplay = 3
  const displayData =
    loading ||
    data.slice(0, numberOfPostsToDisplay).map((post) => {
      return (
        <p key={`post-${post.id}`}>
          {post.title} - {post.author} - {post.publish_date}
        </p>
      )
    })

  // API docs:

  // Top 3 on Home and All on /Blog routes
  // GET /posts List all blog posts

  // Use on Blog/id route
  // GET /posts/{id} View single blog post
  // GET /posts/{id}/comments List all comments for single blog post

  // Add a comment
  // POST /posts/{id}/comments Add comment to single blog post

  // Update a comment
  // PUT /comments/{id} Update single comment

  return (
    <>
      <NavContainer>
        <Feature>
          <Feature.Title>Simple Blog</Feature.Title>
          <Feature.SubTitle>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </Feature.SubTitle>
        </Feature>
        {error || null}
        {displayData}
      </NavContainer>
    </>
  )
}
