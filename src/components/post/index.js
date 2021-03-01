import React from 'react'

import {
  Container,
  Item,
  Author,
  Title,
  Description,
  PublishDate,
  Content,
} from './styles/post'

export const Post = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

Post.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Post.Author = ({ children, ...props }) => {
  return <Author {...props}>{children}</Author>
}

Post.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

Post.Description = ({ children, ...props }) => {
  return <Description {...props}>{children}</Description>
}

Post.PublishDate = ({ children, ...props }) => {
  return <PublishDate {...props}>{children}</PublishDate>
}

Post.Content = ({ children, ...props }) => {
  return <Content {...props}>{children}</Content>
}
