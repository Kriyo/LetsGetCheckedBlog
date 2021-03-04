import React from 'react'
import { render } from '@testing-library/react'
import { Comment } from '../../components/comment'
import avatar from '../../default-avatar.png'

describe('<Comment />', () => {
  it('renders the <Comment /> with populated data', () => {
    const { container, getByText } = render(
      <Comment.Frame>
        <Comment.Count>5 Comments</Comment.Count>
        <Comment.Section>
          <Comment>
            <Comment.RootComment>
              <Comment.Avatar src={avatar} />
              <Comment.DetailsWrapper>
                <Comment.AuthorDetails>
                  Chris on 2021-03-03
                </Comment.AuthorDetails>
                <Comment.Content>
                  Ius ad verear tincidunt scriptorem
                </Comment.Content>
              </Comment.DetailsWrapper>
              <Comment.ButtonWrapper>
                <Comment.Button onClick={() => {}}>Reply</Comment.Button>
              </Comment.ButtonWrapper>
            </Comment.RootComment>
            <Comment.NestedComment>
              <Comment.Avatar src={avatar} />
              <Comment.DetailsWrapper>
                <Comment.AuthorDetails>
                  Jason response to Chris on 2021-03-04
                </Comment.AuthorDetails>
                <Comment.Content>Purto tamquam labores has ex.</Comment.Content>
              </Comment.DetailsWrapper>
              <Comment.ButtonWrapper>
                <Comment.Button onClick={() => {}}>Reply</Comment.Button>
              </Comment.ButtonWrapper>
            </Comment.NestedComment>
          </Comment>
        </Comment.Section>
        <Comment.Form onSubmit={() => {}}>
          <Comment.ReplyHeading>Submit A Comment</Comment.ReplyHeading>
          <Comment.Content>
            Reply to Chris
            <Comment.Button onClick={() => {}}>Cancel</Comment.Button>
          </Comment.Content>
          <Comment.UserInput
            type="text"
            id="username"
            placeholder="Your Name"
            value=""
            onChange={() => {}}
          />

          <Comment.ErrorLabel htmlFor="username">
            Username is too short
          </Comment.ErrorLabel>
          <Comment.TextArea
            id="usercomment"
            placeholder="Your Comment"
            value=""
            onChange={() => {}}
          />
          <Comment.ErrorLabel htmlFor="usercomment">
            Comment is too short
          </Comment.ErrorLabel>
          <Comment.UserInput disabled type="submit" value="Submit" />
        </Comment.Form>
      </Comment.Frame>
    )

    expect(getByText('5 Comments')).toBeTruthy()
    expect(getByText('Chris on 2021-03-03')).toBeTruthy()
    expect(getByText('Ius ad verear tincidunt scriptorem')).toBeTruthy()
    expect(getByText('Jason response to Chris on 2021-03-04')).toBeTruthy()
    expect(getByText('Purto tamquam labores has ex.')).toBeTruthy()
    expect(getByText('Submit A Comment')).toBeTruthy()
    expect(getByText('Reply to Chris')).toBeTruthy()
    expect(getByText('Cancel')).toBeTruthy()
    expect(getByText('Username is too short')).toBeTruthy()
    expect(getByText('Comment is too short')).toBeTruthy()
    expect(getByText('Submit')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
