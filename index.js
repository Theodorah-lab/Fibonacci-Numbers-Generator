//Define a function
function generateFibonacci (n) {
    const fibonacci = [0,1]; //array
    for ( i = 2; i < n; i++) { // for loop
      let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2]; //calculate the next Fibonacci number
      fibonacci.push(nextFibonacci); // Append this new number to the array.
    }
    return fibonacci; // return the fibonacci array.
  }
  console.log(generateFibonacci(15)); //Call the generateFibonacci function