/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

     s = s.toLowerCase();  

    let left = 0
    let right = s.length-1

    while( left < right){
        let l = s.charCodeAt(left)
        let r = s.charCodeAt(right)

        if(!((l >=48 && l<= 57) || (l>=97 && l<=122))){
            left++
        }
         else if(!((r>=48 && r<=57) || (r>=97 && r<=122))){
            right--
        }
        else {
            if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    }
    return true
};