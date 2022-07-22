// async - return a promise to be assynchronus
let mother = "Beautiful"
console.log(mother);


let promise = new Promise((resolve,reject)=>{ 

setTimeout(()=>resolve("promise fulfilled"), 10000)
})
// await - halt the async programe until you get a response from th promise
async function student(){
    let person = await promise;
    console.log(person);
    console.log("Await is only used in async functions");
}
student()
let num = 34;
console.log(num+2);

let c = "Hello"
console.log(c)