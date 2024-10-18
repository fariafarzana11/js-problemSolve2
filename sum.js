const array = [12,23,34,45,66,78,99,87,95];

function arr(numbers){

    let even = [];
    for(const number of numbers){
        if(number % 2 === 0){
            even.push(number);
        }
    }
    let sum = 0;
    for(const newEven of even){
        sum += newEven;
    }
    return sum;
}

console.log(arr(array));