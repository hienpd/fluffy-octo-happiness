function sumArr(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  else {
    const temp = arr.shift();
    return temp + sumArr(arr);
  }
}

sumArr([5, 6, 8]);
