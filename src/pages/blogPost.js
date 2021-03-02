import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PostsContext } from '../context/posts'
import { POSTS_ENDPOINT } from '../constants/api'
import { sortByDate } from '../lib/sortByDate'

import { Comment } from '../components'
import { NavContainer, PostContainer } from '../containers'
import avatar from '../default-avatar.png'

// const handleReply = (e) => {
//   console.log('::> handleReply invoked e: ', e)
// }

const buildReplyComments = (parentComment, comments) => {
  let content = null

  content = comments.data.map((comment) => {
    return comment.parent_id === parentComment.id ? (
      <Comment.NestedComment key={`comment=${comment.id}`}>
        <Comment.Avatar src={avatar} />
        <Comment.AuthorDetails>
          Child Node: {comment.user} on {comment.date} responding to{' '}
          {parentComment.user}
        </Comment.AuthorDetails>
        <Comment.Content>{comment.content}</Comment.Content>
      </Comment.NestedComment>
    ) : null
  })
  return content
}

const buildRootComments = (comment) => {
  return !comment.parent_id ? (
    <Comment.RootComment>
      <Comment.Avatar src={avatar} />
      <Comment.AuthorDetails>
        Parent Node: {comment.user} on {comment.date}
      </Comment.AuthorDetails>
      <Comment.Content>{comment.content}</Comment.Content>
    </Comment.RootComment>
  ) : null
}

const buildComments = (loading, comments) => {
  let content

  if (!loading && comments) {
    content = (
      <Comment.Frame>
        <Comment.Count>{comments.data.length} Comments</Comment.Count>
        {comments.data.map((comment) => (
          <Comment key={`comment-${comment.id}`}>
            {buildRootComments(comment)}
            {buildReplyComments(comment, comments)}
          </Comment>
        ))}
      </Comment.Frame>
    )
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
      {buildComments(loading, comments)}
    </>
  )
}
