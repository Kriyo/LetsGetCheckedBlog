import React, { useContext } from 'react'

import { Feature } from '../components'
import { NavContainer, PostContainer } from '../containers'
import { PostsContext } from '../context/posts'

export const Home = () => {
  const { loading, posts } = useContext(PostsContext)
  const numberOfPostsToDisplay = 3

  const buildContent = () => {
    let content

    if (loading) {
      content = <p>loading data</p>
    }

    if (posts.error) {
      content = <p>Error loading blog posts</p>
    }

    if (!posts?.error && !loading) {
      const tersePosts = posts.blog.slice(0, numberOfPostsToDisplay)
      content = <PostContainer posts={tersePosts} />
    }
    return content
  }

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
      {buildContent()}
    </>
  )
}
