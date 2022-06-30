// true
// false

let name = "Angela"

if (name){
    console.log("Hey there");
    if(name.length <= 3){
        console.log("Name is too short");
    }else{
        console.log("Name accepted")
    }
}
else{
    console.log("No name");
}

let a = 20
let b = 10
let add = a+b

if (a<30 && a>20){
    console.log(true);
}
console.log(false)

let x = 20;
switch(x){
    case 10:
        console.log('not a cow');
        break;
        
    case a >= 20:
    console.log('${a} is more than 5');
        break;
        
    default:
        console.log(a);
        break;    


}

const b = 20;
let c = a>20 ? true: false;
