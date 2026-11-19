/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = []
    const map = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])

    for(let i = 0; i<s.length; i++){
        if(!map.has(s[i])){
            res.push(s[i])
        }else{
            if(res.pop() !== map.get(s[i])){
                return false
            }
        }
    }
    return res.length === 0
};