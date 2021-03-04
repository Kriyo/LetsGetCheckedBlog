import React, { useContext } from 'react'
import { NavContainer, PostContainer } from '../containers'
import { PostsContext } from '../context/posts'

export const Blog = () => {
  const { loading, posts } = useContext(PostsContext)

  const buildContent = () => {
    let content

    if (loading) {
      content = <p>loading data</p>
    }

    if (posts.error) {
      content = <p>Error loading blog posts</p>
    }

    if (!posts?.error && !loading) {
      content = <PostContainer posts={posts.blog} />
    }
    return content
  }

  return (
    <>
      <NavContainer />
      {buildContent()}
    </>
  )
}
