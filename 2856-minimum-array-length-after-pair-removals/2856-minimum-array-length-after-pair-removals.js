/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
    let map = new Map()
    let max = 0

    for(let num of nums){
        map.set(num,(map.get(num) || 0) +1)

        max = Math.max(max,map.get(num))
    }

    let n = nums.length;

    if(max > n / 2){
        return max - (n - max)
    }
    return n % 2
};