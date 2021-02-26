import { useEffect } from 'react'

export const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .catch((err) => console.error('Error: ', err))
      .then((res) => console.log('Success: ', JSON.stringify(res)))
  }, [url])
}
