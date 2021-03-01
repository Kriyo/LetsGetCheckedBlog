import { useEffect, useState } from 'react'
import { sortByDate } from '../lib/sortByDate'

export const useFetch = (url, type) => {
  const [state, setState] = useState({
    blogPosts: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        setState({ blogPosts: null, error, loading: false })
      })
      .then((response) => {
        const reOrderByDate = sortByDate(response, type)
        setState({ blogPosts: reOrderByDate, error: null, loading: false })
      })
  }, [url, type])
  return state
}
