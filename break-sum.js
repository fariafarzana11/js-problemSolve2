// 2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let sum = 0;
let number = 1;

while (sum <= 100) {
  sum += number;

  if (sum >= 100) {
    break; 
  }

  number++;
}

console.log("The sum is", sum);
