function prothom(){
   // console.log("first")
}
prothom();


// function prothoma(first,second){
//     const sum = first + second;
//     console.log(sum)
// }
// prothoma(1,9);


function ditiya(a,b){
    // const sum  = a + b;
    // return sum;
    return a+b;
}
const fol = ditiya(2,3);
//console.log(fol);



function nam(name,name2,name3){
    return{
        name,name2,name3
    }
}
const names = nam("Ushmi","Vumi","Hania");
//console.log(names.name,names.name2,names.name3);


function arr(array){
    return array;
}
//console.log(arr([12,24,56,78,90]));
//const newArr = ["mishmi","laiba","mawra"];
const newArr ={
    name: "Ashmi",
    designation: "software engineer",
    age: 45,
}
//console.log(arr(newArr))




function forLopp(array){
    let summation = 0;
    for(const arr of array){
        summation = summation + arr;
    }
    return summation;
}
const newArray = [12,2,34,56,78,90];
console.log(forLopp(newArray));




