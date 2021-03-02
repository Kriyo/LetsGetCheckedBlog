import React, { useContext } from 'react'

import { Feature } from '../components'
import { NavContainer, PostContainer } from '../containers'
import { PostsContext } from '../context/posts'

export const Home = () => {
  const { loading, posts } = useContext(PostsContext)
  const numberOfPostsToDisplay = 3
  const tersePosts = loading || posts.blog.slice(0, numberOfPostsToDisplay)

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
      {posts.error ? <p>Error loading posts: ${posts.error}</p> : null}
      {loading ? <p>loading data</p> : <PostContainer posts={tersePosts} />}
    </>
  )
}
