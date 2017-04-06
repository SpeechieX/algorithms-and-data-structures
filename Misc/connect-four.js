
// Utility function to generate an array of rows
function generateRows(grid) {
  let allRows = [],
      cols = grid[0].length,
      rows = grid.length;

  grid[0].forEach((outer_elem, i) => {
    let row = [];
    grid.forEach((inner_elem, j) => {
      row.push(grid[j][i])
    })
    allRows.push(row)
  })

  return allRows
}


// Utility function to generate all 4 consecutive elements
// in an array
function getFourConsec(arr) {
  let i=0, j=4, set=[]
  while (j<=arr.length) {
    set.push(arr.slice(i++,j++))
  }
  return set
}


// Generate the sum of elements of an array
function sum(arr) {
  return arr.reduce((a,b) => {
    return a + b
  })
}


// Takes a 1-D array as input
// Returns player1, player2 or false depending on who wins
function isFourConsec(arr) {
  let consecSet = getFourConsec(arr)

  for (var index=0; index<consecSet.length; index++) {
    if (sum(consecSet[index]) === 4) return "player1"
    if (sum(consecSet[index]) === -4) return "player2"
  }

  return false
}
