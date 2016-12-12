function countdown(n) {
  // Base case
  if (n <= 0) {
    return;
  }
  // Recursive case
  else {
    console.log(n);
    --n;
    countdown(n);
  }
}

countdown(10);
