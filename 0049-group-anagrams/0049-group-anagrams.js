/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    const result = []

    for(let str of strs){
        const key = str.split("").sort().join("")
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(str)
    }
    for(let [key,value] of map){
        result.push(value)
    }
    return result
};