import React from 'react'
import { Post } from '../components'

export const PostContainer = ({ blogPosts }) => {
  return (
    <Post.Frame>
      {blogPosts.map((post) => (
        <Post key={`post-${post.id}`}>
          <Post.Title>{post.title}</Post.Title>
          <Post.Author>{post.author}</Post.Author>
          <Post.PublishDate>{post.publish_date}</Post.PublishDate>
          <Post.Description>{post.description}</Post.Description>
          <Post.Content>{post.content}</Post.Content>
        </Post>
      ))}
    </Post.Frame>
  )
}
