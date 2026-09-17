/**
 * @param {number[][]} matrixrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // function sprialmatrixrix(matrix){
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1
    let result = []
    while(left<=right && top<=bottom){
    for(let i = left; i<=right;i++){
        result.push(matrix[top][i])
    }
    top++
    for(let i = top; i<=bottom; i++){
        result.push(matrix[i][right])
    }
    right--
    for(let i = right; i>=left && top<=bottom; i--){
        result.push(matrix[bottom][i])
    }
    bottom--
    for(let i = bottom; i>=top && left<=right; i--){
        result.push(matrix[i][left])
    }
    left++
    }
return result
// }
// console.log(sprialmatrixrix([[1,2,3],[4,5,6],[7,8,9]]))
};