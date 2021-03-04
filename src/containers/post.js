import React from 'react'
import { Post } from '../components'

export const PostContainer = ({ posts, singlePost }) => {
  return (
    <Post.Frame>
      {posts.map((post) => (
        <Post key={`post-${post.id}`}>
          <Post.Image
            to={`/blog/${post.id}`}
            src={`https://source.unsplash.com/collection/466697/${post.id}`}
            alt="Blog post background"
          />
          <Post.Details>
            <Post.Title>{post.title}</Post.Title>
            {!singlePost ? (
              <Post.Description>{post.description}</Post.Description>
            ) : null}
            <Post.Author>
              By {post.author} on {post.publish_date}
            </Post.Author>
          </Post.Details>
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
