/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const got = require('got')

async function solution () {
  const users = await getUsers()
  const todos = await getTodos()
  return await getTodosCompleted(users, todos)
}
/**
 * Finds completed todos for each users and returns the list
 * @param {*} users
 * @param {*} todos
 */
const getTodosCompleted = async (users, todos) => {
  const result = []
  var resTodosByName = []

  if (users) {
    users.forEach(function (item, key) {
      if (todos) { resTodosByName = todos.filter(todo => todo.userId === item.id && todo.completed === true) }
      result[key] = { username: item.username, completed: resTodosByName.length }
    })
  }
  return result
}
/**
 * return the list of users
 */
const getUsers = async () => {
  try {
    return await got('https://jsonplaceholder.typicode.com/users', { responseType: 'json', resolveBodyOnly: true })
  } catch (error) {
    console.log(error)
  }
}
/**
 * return the list of todos
 */
const getTodos = async () => {
  try {
    return await got('https://jsonplaceholder.typicode.com/todos', { responseType: 'json', resolveBodyOnly: true })
  } catch (error) {
    console.log(error)
  }
}
module.exports = { solution, getUsers, getTodos }
