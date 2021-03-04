import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PostsContext } from '../context/posts'
import { POSTS_ENDPOINT } from '../constants/api'

import { Comment } from '../components'
import { NavContainer, PostContainer } from '../containers'
import avatar from '../default-avatar.png'

/*
  BlogPost component.
  Extracts shared state for Posts from the PostsContext
  Comments are unique to this component so we retrieve that data here.
  Structure:
   constants
   hooks
   handlers
   builders
   renderer
*/

export const BlogPost = () => {
  const initialReplyState = { isReplying: false, target: null }
  const { loading, posts } = useContext(PostsContext)
  const { pathname } = useLocation()
  const [comments, setComments] = useState(null)
  const [loadingComments, setLoadingComments] = useState(true)
  const [replyError, setReplyErrors] = useState(null)
  const [reply, setReply] = useState(initialReplyState)
  const [username, setUserName] = useState('')
  const [userComment, setUserComment] = useState('')

  // Gets the current ID from the URL param and removes the ID from the slug
  const getBlogIDFromURL = pathname.substring(pathname.lastIndexOf('/') + 1)
  const currentBlogID = Number(getBlogIDFromURL)
  const commentsEndPoint = `${POSTS_ENDPOINT}/${currentBlogID}/comments`

  const fetchComments = useCallback(() => {
    fetch(commentsEndPoint)
      .then((response) => response.json())
      .catch((error) => {
        setComments({ data: null, error })
      })
      .then((response) => {
        if (response) {
          setComments({ data: response, error: null })
        }
        setLoadingComments(false)
      })
  }, [commentsEndPoint, setComments])

  const createComment = async () => {
    const payload = {
      postId: currentBlogID,
      parent_id: reply?.target?.id || null,
      user: username,
      date: new Date().toISOString().split('T')[0],
      content: userComment,
    }

    const response = await fetch(commentsEndPoint, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.json()
  }

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  // Form submit fn that posts to the comments API
  const handleSubmit = (e) => {
    e.preventDefault()

    createComment()
      .then(() => {
        fetchComments()
        setReply(initialReplyState)
        setUserName('')
        setUserComment('')
      })
      .catch((error) => {
        setReplyErrors(error)
      })
  }
  const validate = () => {
    return !username || !userComment
  }

  const handleChange = (type, e) => {
    const { value } = e.target

    if (type === 'username') {
      setUserName(value)
    } else {
      setUserComment(value)
    }
  }

  // User clicked reply on an existing comment
  const handleReply = (comment) => {
    setReply({ isReplying: true, target: { ...comment } })
  }

  const buildBlogPost = () => {
    let content = null

    if (loading) {
      content = <p>Loading Blog Post</p>
    }

    if (posts.error) {
      content = <p>Error Loading Blog Post</p>
    }

    if (!posts?.error && !loading) {
      const { blog } = posts
      const currentBlog = blog.find((post) => post.id === Number(currentBlogID))

      content = <PostContainer singlePost posts={[currentBlog]} />
    }
    return content
  }

  const buildRootComments = (comment) => {
    return !comment.parent_id ? (
      <Comment.RootComment>
        <Comment.Avatar src={avatar} />
        <Comment.DetailsWrapper>
          <Comment.AuthorDetails>
            {comment.user} on {comment.date}
          </Comment.AuthorDetails>
          <Comment.Content>{comment.content}</Comment.Content>
        </Comment.DetailsWrapper>
        <Comment.ButtonWrapper>
          <Comment.Button onClick={() => handleReply(comment)}>
            Reply
          </Comment.Button>
        </Comment.ButtonWrapper>
      </Comment.RootComment>
    ) : null
  }

  const buildReplyComments = (parentComment) => {
    return comments.data.map((comment) => {
      return comment.parent_id === parentComment.id ? (
        <Comment.NestedComment key={`comment=${comment.id}`}>
          <Comment.Avatar src={avatar} />
          <Comment.DetailsWrapper>
            <Comment.AuthorDetails>
              {comment.user} response to {parentComment.user} on {comment.date}
            </Comment.AuthorDetails>
            <Comment.Content>{comment.content}</Comment.Content>
          </Comment.DetailsWrapper>
          <Comment.ButtonWrapper>
            <Comment.Button onClick={() => handleReply(comment)}>
              Reply
            </Comment.Button>
          </Comment.ButtonWrapper>
        </Comment.NestedComment>
      ) : null
    })
  }

  const buildComments = () => {
    let content
    const usernameError = !username ? 'Username is too short' : ''
    const userCommentError = !userComment ? 'Comment is too short' : ''

    if (loadingComments) {
      content = <p>Loading comments...</p>
    }

    if (comments?.error) {
      content = <p>Error loading comments</p>
    }

    if (!comments?.errors && !loadingComments && comments.data) {
      content = (
        <Comment.Frame>
          <Comment.Count>{comments.data.length} Comments</Comment.Count>
          <Comment.Section>
            {comments.data.map((comment) => (
              <Comment key={`comment-${comment.id}`}>
                {buildRootComments(comment)}
                {buildReplyComments(comment, comments)}
              </Comment>
            ))}
          </Comment.Section>
          <Comment.Form onSubmit={handleSubmit}>
            <Comment.ReplyHeading>Submit A Comment</Comment.ReplyHeading>
            {replyError ? (
              <p>There was an error creating your comment</p>
            ) : null}
            {reply.isReplying ? (
              <Comment.Content>
                Reply to {reply.target.user}
                <Comment.Button onClick={() => setReply(initialReplyState)}>
                  Cancel
                </Comment.Button>
              </Comment.Content>
            ) : null}
            <Comment.UserInput
              type="text"
              id="username"
              placeholder="Your Name"
              value={username}
              onChange={(e) => handleChange('username', e)}
            />
            {!username ? (
              <Comment.ErrorLabel htmlFor="username">
                {usernameError}
              </Comment.ErrorLabel>
            ) : null}
            <Comment.TextArea
              id="usercomment"
              placeholder="Your Comment"
              value={userComment}
              onChange={(e) => handleChange('comment', e)}
            />
            {!userComment ? (
              <Comment.ErrorLabel htmlFor="usercomment">
                {userCommentError}
              </Comment.ErrorLabel>
            ) : null}
            <Comment.UserInput
              disabled={validate()}
              type="submit"
              value="Submit"
            />
          </Comment.Form>
        </Comment.Frame>
      )
    }
    return content
  }

  return (
    <>
      <NavContainer />
      {buildBlogPost(loading, posts, currentBlogID)}
      {buildComments(loading, comments)}
    </>
  )
}
