import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PostsContext } from '../context/posts'
import { POSTS_ENDPOINT } from '../constants/api'
import { sortByDate } from '../lib/sortByDate'

import { NavContainer, PostContainer } from '../containers'

// const handleReply = (e) => {
//   console.log('::> handleReply invoked e: ', e)
// }

const buildReplyComments = (parentComment, comments) => {
  let content = null

  content = comments.data.map((comment) => {
    return comment.parent_id === parentComment.id ? (
      <p key={`comment=${comment.id}`}>
        Response Comment: {comment.user} - {comment.date} ---- Parent:
        {parentComment.user}
      </p>
    ) : null
  })
  return content
}

const buildRootComments = (comment) => {
  return !comment.parent_id ? (
    <p key={`comment=${comment.id}`}>
      Parent node: {comment.user} - {comment.date}
    </p>
  ) : null
}

const buildBlogComments = (loading, comments) => {
  let content = null

  if (!loading && comments) {
    content = comments.data.map((comment) => {
      return (
        <div key={`comment=${comment.id}`}>
          {buildRootComments(comment)}
          {buildReplyComments(comment, comments)}
        </div>
      )
    })
  }
  return content
}

// Render the outer comments like so:
// - root comments
// - - nested comments with their parent_id
// Add a Comments component
// Should associate comments with their parent_id as this comment is a reply to a comment

const buildBlogPost = (loading, posts, currentBlogID) => {
  let content = null

  if (!loading && posts) {
    const { blog } = posts
    const currentBlog = blog.find((post) => post.id === Number(currentBlogID))

    content = <PostContainer singlePost posts={[currentBlog]} />
  }
  return content
}

export const BlogPost = () => {
  const { loading, posts } = useContext(PostsContext)
  const { pathname } = useLocation()
  const [comments, setComments] = useState(null)
  // Gets the current ID from the URL param and removes the ID from the slug
  const currentBlogID = pathname.substring(pathname.lastIndexOf('/') + 1)

  const fetchComments = () => {
    fetch(`${POSTS_ENDPOINT}/${currentBlogID}/comments`)
      .then((response) => response.json())
      .catch((error) => {
        setComments({ data: null, error })
      })
      .then((response) => {
        const reOrderByDate = sortByDate(response, 'comments')
        setComments({ data: reOrderByDate, error: null })
      })
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <>
      <NavContainer />
      {buildBlogPost(loading, posts, currentBlogID)}
      {buildBlogComments(loading, comments)}
    </>
  )
}
