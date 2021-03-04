import styled from 'styled-components/macro'
// import { Primary } from '../../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

export const Item = styled.div``

export const RootItem = styled.div`
  display: flex;
  max-width: 540px;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
  }
`

export const NestedItem = styled.div`
  display: flex;
  max-width: 540px;
  justify-content: space-between;
  padding: 10px 0;
  margin-left: 50px;
  @media (max-width: 600px) {
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
  }
`

export const Count = styled.h2`
  @media (max-width: 600px) {
    margin: 20px;
  }
`

export const Section = styled.div``

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export const AuthorDetails = styled.h4`
  margin: 0;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
`

export const Content = styled.p``

export const ReplyHeading = styled.h3``

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 15px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const Button = styled.button`
  height: 35px;
  width: 80px;
`

export const Input = styled.input`
  padding: 8px 12px;
  width: 185px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  font-size: 0.9rem;
  color: #404040;
  outline: none;

  &[type='submit'] {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const TextArea = styled.textarea`
  font-family: 'Open Sans', sans-serif;
  padding: 8px 12px;
  height: 150px;
  width: 500px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  font-size: 0.9rem;
  color: #404040;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
    margin: auto;
  }
`
