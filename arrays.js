let b = ["Mango","Apple"];
b.push("Orange")
b.unshift("Grapes")
b.pop()
b.shift()

let c = new Array("Banana","Kiwi");
console.log(c)
console.log(b[1])

// Method 1
let d = c.map(item => 'Ilove ${item}')
console.log (d)

// Method 2
let e = c.map(function(item){
    return 'I love ${item}'
})
console.log(e)

// Callback function
function people(){
    console.log("You guys");
}
function students(a, callback){
    console.log(a);
    console.log(callback);
}
students(26,people())

// Array distractures
var names = ["Chiri", "Ziporrah", "Shamim"];
var [Conslate, Susan, Nancy] = ["Chiri", "Ziporrah", "Shamim"]
console.log(Conslate)