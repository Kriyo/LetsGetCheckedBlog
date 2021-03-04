import React from 'react'

import {
  Container,
  Item,
  RootItem,
  NestedItem,
  Count,
  Image,
  DetailsWrapper,
  Content,
  AuthorDetails,
  ReplyHeading,
  Form,
  Button,
  ButtonWrapper,
  ErrorLabel,
  Input,
  TextArea,
  Section,
} from './styles/comment'

export const Comment = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

Comment.Frame = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Comment.Section = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>
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

Comment.DetailsWrapper = ({ children, ...props }) => {
  return <DetailsWrapper {...props}>{children}</DetailsWrapper>
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

Comment.ReplyHeading = ({ children, ...props }) => {
  return <ReplyHeading {...props}>{children}</ReplyHeading>
}

Comment.Form = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>
}

Comment.ButtonWrapper = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

Comment.Button = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}
Comment.ErrorLabel = ({ children, ...props }) => {
  return <ErrorLabel {...props}>{children}</ErrorLabel>
}
Comment.UserInput = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>
}

Comment.TextArea = ({ children, ...props }) => {
  return <TextArea {...props}>{children}</TextArea>
}
