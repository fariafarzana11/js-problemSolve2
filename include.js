const friends = ["Mehru","Mushk","Kinza","Kinza","Mushk"];

function biriyani(bondhu){
    let line = [];
    for(const numbers of bondhu){
        if(line.includes(numbers) === false){
            line.push(numbers)
        }
    }
    return line;
}
console.log(biriyani(friends))