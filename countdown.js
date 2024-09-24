// 4. Implement a countdown timer that counts down from 21 to 15.

let start, countdown;

for (countdown = 21; countdown >= 15; countdown--) {
  console.log(countdown);
  
  start = new Date().getTime();
  while (new Date().getTime() < start + 1000) {
  }
}


 