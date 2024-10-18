// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


function expect(val) {
    return {
        toBe: function (compareVal) {
            if (val === compareVal) {
                return true;
            }
            else {
                return("Not Equal");
            }
        },
        notToBe: function (compareVal) {
            if (val !== compareVal) {
                return true;
            }
            else {
                return("Equal")
            }
        }
    }
}
console.log(expect(5).toBe(6));      
console.log(expect(5).notToBe(5)); 
