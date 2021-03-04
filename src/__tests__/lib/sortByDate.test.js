import { RAW_BLOG_DATA, SORTED_BLOG_DATA } from '../../constants/fixtures'
import { sortByDate } from '../../lib/sortByDate'

test('raw data should not be changed', () => {
  const firstItem = RAW_BLOG_DATA.blog[0]
  expect(firstItem.id).toBe(1)
})

test('invokes the sortByDate() and returns the array from newest to olders', () => {
  const reOrderByDate = sortByDate(RAW_BLOG_DATA.blog, 'posts')
  const firstItem = reOrderByDate[0]
  expect(firstItem.id).toBe(10)
  expect(reOrderByDate).toEqual(SORTED_BLOG_DATA.blog)
})
