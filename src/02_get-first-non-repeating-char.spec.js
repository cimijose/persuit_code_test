const solution = require('./02_get-first-non-repeating-char')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - "string with no non-repeating characters"', () => {
  expect(solution('this is the string this is the string')).toBe('')
})

test('Test 4 - "empty string"', () => {
  expect(solution('')).toBe('')
})
