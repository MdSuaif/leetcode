/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()

    for(let char of s){
        map.set(char,(map.get(char) || 0) + 1)
    }

    let count = 0
    let odd = 0

    for(let value of map.values()){
        if(value % 2 == 0){
            count += value
        }else{
            count += value - 1
            odd = 1
        }
    }
    return count + odd
};