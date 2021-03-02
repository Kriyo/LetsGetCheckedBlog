import React from 'react'

import {
  Container,
  Item,
  RootItem,
  NestedItem,
  Count,
  Image,
  Content,
  AuthorDetails,
  Subtitle,
  Button,
  TextArea,
} from './styles/comment'

export const Comment = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

Comment.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Comment.RootComment = ({ children, ...props }) => {
  return <RootItem {...props}>{children}</RootItem>
}

Comment.NestedComment = ({ children, ...props }) => {
  return <NestedItem {...props}>{children}</NestedItem>
}

Comment.Count = ({ children, ...props }) => {
  return <Count {...props}>{children}</Count>
}

Comment.AuthorDetails = ({ children, ...props }) => {
  return <AuthorDetails {...props}>{children}</AuthorDetails>
}

Comment.Avatar = ({ children, ...props }) => {
  return <Image {...props}>{children}</Image>
}

Comment.Content = ({ children, ...props }) => {
  return <Content {...props}>{children}</Content>
}

Comment.Subtitle = ({ children, ...props }) => {
  return <Subtitle {...props}>{children}</Subtitle>
}

Comment.Button = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

Comment.TextArea = ({ children, ...props }) => {
  return <TextArea {...props}>{children}</TextArea>
}
