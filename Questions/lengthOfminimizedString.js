
//Wrong answer
let s = 'aaabaaabccdaaabaaabccd';

const findLength = (values) => {
  let items = values.split('');
  let prev = items[0];
  let count = 0;
  for (let i = 0; i < items.length - 1; i++) {
    if(prev !== items[i+1]){
      count++;
      prev = items[i];
    }
  }
  return count;
};

let ans = findLength(s);
console.log(ans);
