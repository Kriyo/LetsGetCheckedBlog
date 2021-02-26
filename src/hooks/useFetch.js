import { useEffect, useState } from 'react'
import { sortByDate } from '../lib/sortByDate'

export const useFetch = (url, type) => {
  const [state, setState] = useState({ data: null, error: null, loading: true })

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        setState({ data: null, error, loading: false })
      })
      .then((response) => {
        const reOrderByDate = sortByDate(response, type)
        setState({ data: reOrderByDate, error: null, loading: false })
      })
  }, [url, type])

  return state
}
