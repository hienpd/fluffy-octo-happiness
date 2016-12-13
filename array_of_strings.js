// Input: 5
// [1, 2, 3, 4, 5]
// Output: ['odd', 'even', 'odd', 'even', 'odd']

function fillArray(n) {
  let newArr = [];
  while(n > 0) {
    newArr.unshift(n);
    --n;
  }
  return newArr;
}

function isOdd(element) {
  return element % 2;
}

function oddOrEven(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(isOdd(arr[i])) {
      newArr.push('odd');
    }
    else {
      newArr.push('even');
    }
  }

  return newArr;
}

console.log(oddOrEven(fillArray(5)));
