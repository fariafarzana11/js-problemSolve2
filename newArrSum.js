function forLopp(array){
    let summation = 0;
    let newArray = [];
    for(const arr of array){
        summation = summation + arr;
        newArray.push(summation);
    }
    return newArray;
}
const newArray = [12,2,34,56,78,90];
console.log(forLopp(newArray));


// function forLopp(array){
//     let summation = 0;
//     let newArray = [];
//     for(const arr of array){
//         summation = summation + arr;
//         newArray.push(summation);
//      console.log(newArray)
//     }
// }
// const newArray = [12,2,34,56,78,90];
// forLopp(newArray);
