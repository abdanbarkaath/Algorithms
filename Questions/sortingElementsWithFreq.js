function sortByFreq(arr, n){
  // code here
  var start = new Date().getTime();
  let store = {}
  for(let i=0;i<n;i++){
      if(!store[arr[i]]){
          store[arr[i]] = 1;
      }else{
          store[arr[i]] += 1
      }
  }
  let ans = []
  // for(const [key, value] of Object.entries(store)){
  //     for(let i = 0;i<value;i++){
  //         ans.push(key)
  //     }
  // }
  
  function recurringFunc(obj){
  let max = 0
  let storeKey = ''
  for(const [key, value] of Object.entries(obj)){
      if(max<value){
          max = value;
          storeKey = key
      }
  }
  for(let i = 0;i<max;i++){
      ans.push(storeKey)
  }
  delete store[storeKey];
  if(Object.keys(store).length>0){
      recurringFunc(store)
  }
  }
  recurringFunc(store);
  console.log(ans)
  var end = new Date().getTime();
  var time = end - start;
  console.log('Execution time: ' + time);
  return ans
};

let items = [6,6,2,3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6]
sortByFreq(items,items.length);

