// Small function that takes in an array and the 'type' to differentiate the key for sorting
// between posts & comments.
export const sortByDate = (arr, type) => {
  const key = type === 'posts' ? 'publish_date' : 'date'
  const newArray = arr.sort((a, b) => {
    const firstDate = new Date(a[key])
    const secondDate = new Date(b[key])

    return secondDate - firstDate
  })

  return newArray
}
