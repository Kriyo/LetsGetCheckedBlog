import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Container,
  Item,
  Image,
  Author,
  Title,
  Details,
  Description,
  Content,
  Link,
} from './styles/post'

export const Post = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

Post.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Post.Image = ({ to, ...props }) => {
  return (
    <ReactRouterLink to={to}>
      <Image {...props} />
    </ReactRouterLink>
  )
}

Post.Details = ({ children, ...props }) => {
  return <Details {...props}>{children}</Details>
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

Post.Content = ({ children, ...props }) => {
  return <Content {...props}>{children}</Content>
}

Post.Link = ({ to, children, ...props }) => {
  return (
    <Link href={to} {...props}>
      {children}
    </Link>
  )
}
