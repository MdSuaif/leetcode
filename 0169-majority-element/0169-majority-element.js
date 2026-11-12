/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let sum = 0

    for(let i = 0; i<nums.length; i++){
        if(count === 0){
            sum = nums[i]
        }
        if(nums[i] === sum){
            count++
        }else{
            count--
        }
    }
    return sum
};