let a = [2,4,7]
let[one,four,seven, ...others] = a;
console.log({one})
console.log({four})
console.log({seven})
console.log(others)
// spread operator is used incase you have more elements that have no variables 

let fruits = {
    name:"Mango",
    color:"green",
    size:"small"
};
let {name,...rest} = fruits;
console.log(name);
console.log(rest)
// imports and exports are mainly used in frameworks
// importation is taking everything from an existing file to another file and use them.
// export can not work unless an import has been done

// synchronus - executed line by line.
// Promises - methods that bring about assynchronus operations
// callback fuctions  - taken as an argument by another function.

