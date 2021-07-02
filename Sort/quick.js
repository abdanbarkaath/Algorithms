//quick sort uses recurssion

let list = [5, 4, 7, 45, 9, 3, 48, 3, 1, 69, 47];

function quick(items) {
  if (items.length === 1) {
    return items;
  }
  let pivot = items[items.length - 1];
  let leftSide = [];
  let rightSide = [];
  for (let i = 0; i < items.length-1; i++) {
    if (items[i] < pivot) {
      leftSide.push(items[i]);
    } else {
      rightSide.push(items[i]);
    }
  }
  if (leftSide.length > 0 && rightSide.length > 0) {
    return [...quick(leftSide), pivot, ...quick(rightSide)];
  } else if (leftSide.length > 0) {
    return [...quick(leftSide), pivot];
  } else {
    return [pivot, ...quick(rightSide)];
  }
}

console.log(quick(list));
