import React from 'react'
import { Post } from '../components'

export const PostContainer = ({ posts, singlePost }) => {
  return (
    <Post.Frame>
      {posts.map((post) => (
        <Post key={`post-${post.id}`}>
          <Post.Title>{post.title}</Post.Title>
          <Post.Author>
            {post.author} - {post.publish_date}
          </Post.Author>
          <Post.Description>{post.description}</Post.Description>
          {singlePost ? (
            <Post.Content dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <Post.Link to={`/blog/${post.id}`}>Read Post</Post.Link>
          )}
        </Post>
      ))}
    </Post.Frame>
  )
}
