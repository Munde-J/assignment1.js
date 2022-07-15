// var people={
//     name:20,
//     country:"Kenya"
// };

// console.log(people["country"]);
// console.log(people.country)

// var person = new Object(people);
// console.log(person.name);
// person["age"] = 35;
// console.log(person);

// // find only the keys

// for ([key, values] of Object.entries(person)){
//     console.log('${key}:${values}')
// }
// // freeze prevents modification of additional properties
// Object.freeze(person)
// person['school']= "Akirachix";
// console.log(person)

// // seal can modify but cannot add a property 
// Object.seal(person)
// person.name = "AnitaB";

// delete(person.age)
// console.log(person)

// Object.assign(person,{school: "Akirachix"})
// console.log(person);

// Method is an object property whose value is a function
// var student = {
//     name:"Anita",
//     country:"Kenya",
//     hobby:function(){
//         console.log(`My name is ${this.name} and my favorite hobby is cooking`);
//         return "My favorite hobby is baking"
//     },
//     // How to use nested objects
//     friends:{
//         name:"Joy",
//         age:23,
//         hobby:{
//             first:"cooking",
//             play:function(){
//                 return "I love playing"

//             }
//         }   
//     }
//     }
//     console.log(student.country);
//     console.log(student.hobby());
//     console.log(student.friends.name);
//     console.log(student.friends.hobby.play());
    
    let a = [{
        name:"Paccy",
        age:20
            },
        {
            name: "Angie",
            age:2
        },
        {
            name:"Akuot",
            age:34
        },
        {
            name:"Bree",
            age:24
        },
]
console.log(a[1]["age"]);
console.log(a.filter(item=>item.age>20));
console.log(a.find(item=>item.name==="Akuot"))
    

   
