/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  const lowStr = str.toLowerCase()
  var rsChar = ''
  const filterArr = lowStr.split('').filter(function (character, index, obj) {
    return obj.indexOf(character) === obj.lastIndexOf(character)
  })
  if (filterArr.length > 0) {
    rsChar = filterArr.shift()
  }
  return rsChar
}

module.exports = solution
