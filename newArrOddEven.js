function arr(array){
    let newArray = [];
    for(const newArr of array){
        if(newArr % 2 === 0){
            newArray.push("even");
        }
        else{
            newArray.push("odd");
        }
    } 
    return newArray;  
}
const result = arr([12,34,54,2])
console.log(result)