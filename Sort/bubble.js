let arr = [5, 4, 7, 45, 9, 3, 48, 3, 1, 69, 47];

function bubble(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list
}

console.log(bubble(arr));
