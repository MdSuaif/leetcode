/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"

    let result = [];

    for(let word of words){
        let w = word.toLowerCase();

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;

        for(let i = 0; i<w.length; i++){
            if(row1.includes(w[i])){
                count1++;
            }
            if(row2.includes(w[i])){
                count2++;
            }
            if(row3.includes(w[i])){
                count3++;
            }
        }

    if(count1 === w.length || count2 === w.length || count3 === w.length){
        result.push(word)
    }
    }
    return result ;
};