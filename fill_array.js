function fillArray(n) {
  let newArr = [];
  while(n > 0) {
    newArr.unshift(n);
    --n;
  }
  return newArr;
}

let fullArr = fillArray(25);

function oddsOnly(element) {
  if(element % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

console.log(fullArr.filter(oddsOnly));
