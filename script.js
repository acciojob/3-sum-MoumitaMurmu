function threeSum(arr, target) {
  //your code here
  let closetNum=Number.MAX_VALUE

  for(let i = 0; i < arr.length ; i++){
         for(let j = i+1 ; j < arr.length ; j++){
          for(let k = j+1 ; k < arr.length ; k++){
            if (Math.abs(target - closetNum) > 
            Math.abs(target - (arr[i] + arr[j] + arr[k])))
            {
            closetNum = (arr[i] + arr[j] + arr[k]);
            }
          }   
         }
  }
  return closetNum
}

module.exports = threeSum;
