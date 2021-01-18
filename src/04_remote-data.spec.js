const { solution, getUsers, getTodos } = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})

test('validate count of completed todos for one user', async () => {
  const userId = 2
  const users = await getUsers()
  const todos = await getTodos()

  const filterUser = users.filter(user => user.id === userId)
  const resTodosByName = todos.filter(todo => todo.userId === userId && todo.completed === true)

  // Arrange
  const expected = [{ username: filterUser[0].username, completed: resTodosByName.length }]

  // Act
  const actualResult = await solution()
  const actual = actualResult.filter(actualItem => actualItem.username === filterUser[0].username)

  // Assert
  expect(actual).toEqual(expected)
})
