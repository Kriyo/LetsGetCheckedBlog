import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { PostsContext } from '../context/posts'

import { NavContainer, PostContainer } from '../containers'

const buildBlogPost = (loading, posts, pathname) => {
  let content = null

  if (!loading && posts) {
    const { blog } = posts

    // Gets the current ID from the URL param and removes the ID from the slug
    const currentBlogID = pathname.substring(pathname.lastIndexOf('/') + 1)
    const currentBlog = blog.find((post) => post.id === Number(currentBlogID))

    content = <PostContainer singlePost posts={[currentBlog]} />
  }
  return content
}

export const BlogPost = () => {
  const { loading, posts } = useContext(PostsContext)
  const { pathname } = useLocation()

  return (
    <>
      <NavContainer />
      {buildBlogPost(loading, posts, pathname)}
    </>
  )
}
