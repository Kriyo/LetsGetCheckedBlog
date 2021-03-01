import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Feature } from '../components'
import { NavContainer, PostContainer } from '../containers'
import { POSTS_ENDPOINT } from '../constants/api'

export const Home = () => {
  const { blogPosts, error, loading } = useFetch(POSTS_ENDPOINT, 'posts')

  // Might be cool to display 3 most recent posts on the home page
  const numberOfPostsToDisplay = 3
  const tersePosts = loading || blogPosts.slice(0, numberOfPostsToDisplay)

  // put in a UX improvement button to view all posts and route to /blog

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
      </NavContainer>
      {error || null}
      {loading || <PostContainer blogPosts={tersePosts} />}
    </>
  )
}
