const array = [12,23,34,45,66,78,99,87,95];

function arr(numbers){

    let even = [];
    for(const number of numbers){
        if(number % 2 !== 0){
            even.push(number);
        }
    }
    const values = array.length;
    let sum = 0;

    for(const newEven of even){
        sum += newEven;
    }
    const result = (sum / values).toFixed(2);
    return result;
}

console.log(arr(array));