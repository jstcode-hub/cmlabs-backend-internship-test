function fizzbuzz(i) {
  for (let j = 0; j < i; j++) {
    if (j % 3 == 0 && j % 5 == 0) {
      console.log('FizzBuzz');
    } else if (j % 3 == 0) {
      console.log('Fizz');
    } else if (j % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(j);
    }
  }
}

fizzbuzz(100);
