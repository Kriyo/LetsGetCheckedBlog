import { createContext } from 'react'

export const PostsContext = createContext({
  blog: null,
  error: null,
  loading: true,
})
