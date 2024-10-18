function InchToFeet(inch){
    const feet = inch / 12;
    const newFeet = parseInt(feet);
    const inchs = inch % 12;
    const result = newFeet +"ft "+ inchs + "inch ";
    return result;
}
const result= InchToFeet(75);
console.log(result);


const array = [12,23,34,45,67]

function arr(numbers){
    for(const num of numbers){
        console.log(num)
    }
}
arr(array)