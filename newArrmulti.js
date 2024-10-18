function multi(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        multiply = array[i] * 2;
        newArray.push(multiply);
    }
    return newArray;
}
const result = multi([1,2,3,4]);
console.log(result)