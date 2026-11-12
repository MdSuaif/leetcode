/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity
    let maxprofit = 0

    for(let i = 0; i<prices.length; i++){


        if(prices[i] < minprice){
            minprice = prices[i]
        }
        let currentprice = prices[i]-minprice
        if(currentprice > maxprofit){
            maxprofit = currentprice
        }
    }
    return maxprofit
};