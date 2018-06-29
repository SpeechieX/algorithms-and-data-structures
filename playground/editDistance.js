/*  
    Given 2 strings - a and b - compute the minimum edit
    distance between the 2 strings.
*/


/*
Copyright (c) 2011 Andrei Mackenzie
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Compute the edit distance between the two given strings
function getEditDistance(a, b){
    if(a.length == 0) return b.length; 
    if(b.length == 0) return a.length; 
  
    var matrix = [];
  
    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }
  
    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }
    console.log(matrix)
  
    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                           matrix[i-1][j] + 1)); // deletion
        }
      }
    }
    
    console.log(matrix)
    return matrix[b.length][a.length];
  };

console.log(getEditDistance('polynomial', 'exponential'));

/*
We want to compute not only the edit distance dd between two words, but also the number of ways to edit the first word to get the second word using the minimum number dd of edits. Two ways are considered different if there is such i, 1 \leq i \leq di,1≤i≤d that on the ii-th step the edits in these ways are different.

To solve this problem, in addition to computing array TT with edit distances between prefixes of the first and second word, we compute array waysways, such that ways[i, j]ways[i,j] = the number of ways to edit the prefix of length ii of the first word to get the prefix of length jj of the second word using the minimum possible number of edits.

Which is the correct way to compute ways[i, j]ways[i,j] based on the previously computed values?

This is useful: http://www.let.rug.nl/kleiweg/lev/
*/

