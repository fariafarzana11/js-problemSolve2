// 1. Write a loop 1 to 200. Use break to exit the loop once you find 100.

let i = 1;
for (i; i <= 200; i++) {
    if (i === 100) {
      console.log(100);
      break; 
    }
    console.log(i);
  }