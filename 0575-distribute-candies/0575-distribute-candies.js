/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let result = [];

    for(let i = 0; i<candyType.length; i++){
        if(!result.includes(candyType[i])){
            result.push(candyType[i])
        }
    }
    return Math.min(result.length,candyType.length / 2)
};