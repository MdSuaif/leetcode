/**
* @param {number} n
* @return {number[][]}
*/
var generateMatrix = function(n) {
let top = 0
let bottom = n-1
let left = 0
let right = n-1

const result = Array.from({ length: n }, () => Array(n).fill(0))

let value = 1

while(top<=bottom && left<=right){
    for(let i = left; i<=right;i++){
        result[top][i]=value
        value++
    }
    top++
    for(let i = top; i<=bottom; i++){
        result[i][right]=value
        value++
    }
    right--
    for(let i = right; i>=left && top<=bottom; i--){
        result[bottom][i]=value
        value++
    }
    bottom--
    for(let i = bottom; i>=top && left <= right; i--){
        result[i][left]=value
        value++
    }
    left++
}
   return result

};