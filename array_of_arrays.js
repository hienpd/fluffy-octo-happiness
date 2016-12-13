// Input: [1, 2, 3, 4]
// Output: [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

function fillArray(n) {
  let newArr = [];
  while(n > 0) {
    newArr.unshift(n);
    --n;
  }
  return newArr;
}

function arrayify(arr) {
  // let newArr = [];
  //
  // for (let i = 0; i < arr.length; i++) {
  //   newArr[i] = fillArray(arr[i]);
  // }

  let newArr = arr.map(fillArray);

  return newArr;
}

// console.log(arrayify(fillArray(5)));

console.log(fillArray(8).map(fillArray));
