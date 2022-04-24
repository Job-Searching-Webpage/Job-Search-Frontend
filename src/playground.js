const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

//console.log([fruits, vegetables]); //does not concatenate the arrays
//copies the array data into a new array without saving the old array structure

console.log([...fruits, ...vegetables]);
