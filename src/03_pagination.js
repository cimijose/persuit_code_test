/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  var currDataArr = pageData.reduce((curData, item, index) => {
    const pageIndex = Math.floor(index / itemsPerPage)

    if (!curData[pageIndex]) {
      curData[pageIndex] = []
    }

    curData[pageIndex].push(item)

    return curData
  }, [])

  var currentPage = null
  currentPage = (currDataArr.length > 0 && pageNumber <= 0) ? currDataArr[0] : (currDataArr.length > 0 && pageNumber <= currDataArr.length) ? currDataArr[pageNumber - 1] : null
  return currentPage
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
