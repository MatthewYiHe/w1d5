var testInput =  [45, 24, 35, 31, 40, 38, 11];

function forceThatBrute(prices){
  let maxProfit = 0;
  for (let i = 0; i < prices.length -1; i++){
    let price = prices[i];
    let maxNextPrice = 0;
    for (let j = i + 1; j < prices.length; j++){
      maxNextPrice = Math.max(maxNextPrice, prices[j]);
    }
    maxProfit = Math.max(maxProfit, maxNextPrice - price);
  }
  return maxProfit;
}

/* TODO fix this */
function calcMaxProfit(prices){
  let availableMaxArr = getAvailableMaxArr(prices);
  let maxProfit = 0;
  for(let i = 0; i < prices.length - 1; i++){
    let availableProfit = availableMaxArr[i] - prices[i];
    maxProfit = Math.max(availableProfit, maxProfit);
  }
  return maxProfit;
}

function getAvailableMaxArr(arr){
  if(arr.length === 0){
    return [];
  }
  let availabelMaxArr = Array(arr.length).fill(0);
  let max = arr[arr.length - 1];
  for (let i = arr.length-1; i >= 0; i--){
   max = Math.max(max, arr[i]);
   availabelMaxArr[i] = max;
  }
  return availabelMaxArr;
}

console.log("result with brute force method:", forceThatBrute(testInput));
console.log("result with O(n) alg:", calcMaxProfit(testInput));

