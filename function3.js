function createHelloWorld() {
    console.log("Hello world");
}
createHelloWorld();


function num(number){
    console.log(number);
    const square = number ** 2;
    console.log(square);
}
num(2);
console.log("erer")



function add(num){
    const double = num * 2;
    console.log(num, double)
}
add(2);
add(9);


function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'diffrence is', diff)
}

const minuAge = 30;
const chiniAge = 39;

difference(chiniAge,minuAge);