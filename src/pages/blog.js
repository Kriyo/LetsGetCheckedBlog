import React, { useContext } from 'react'
import { NavContainer, PostContainer } from '../containers'
import { PostsContext } from '../context/posts'

export const Blog = () => {
  const { loading, posts } = useContext(PostsContext)

  return (
    <>
      <NavContainer />
      {posts.error ? <p>Error loading posts: ${posts.error}</p> : null}
      {loading ? <p>loading data</p> : <PostContainer posts={posts.blog} />}
    </>
  )
}
