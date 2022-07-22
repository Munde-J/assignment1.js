let promise = new Promise((resolve,reject)=>{
    if(true){
        console.log(resolve("promise fulfilled"));
    }
    else{
        reject("promise not fulfilled")
    }
})
// promise.then(result=>console.log(result))
.then(result=>console.log("successfull"))
.catch(result=>console.log(result))
.finally(result=>console.log("promise failed"))

// promises are used n creating APIs in frontend.
// promise.catch(console.error( => console.log(error));)
promise.catch(()=>console.log("promise failed"))
console.log(promise);
// promise chaining - a process of adding other callbacks to protect them against rejection

// async - return a promise to be assynchronus