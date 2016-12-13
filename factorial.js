// function factorial(n) {
//   let result = n;
//   let next = n - 1;
//
//   while(next > 0) {
//     result = result * next;
//     --next;
//   }
//
//   console.log(result);
//   return result;
// }

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

factorial(5);
