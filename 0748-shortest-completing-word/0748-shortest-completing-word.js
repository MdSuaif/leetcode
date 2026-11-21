/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
   let plate = "";

   for(let char of licensePlate.toLowerCase()){
    if(char >= "a" && char <= "z"){
        plate += char;
    }
   }

   let ans = "";

   for(let word of words){
    let temp = word.toLowerCase()
    let valid = true;

    for(let char of plate){
        let index = temp.indexOf(char)
    if(index === -1){
        valid = false;
        break;
    }
    temp = temp.slice(0,index) + temp.slice(index + 1)
    }
    if(valid){
        if(ans === "" || word.length < ans.length){
            ans = word
        }
    }
   }
   return ans
};