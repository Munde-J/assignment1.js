// Conditionals & Loops1.
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function multiples(){
    for(i=0;i<=100;i++){
        if(i%3===0 &&  i%5===0){
            console.log("FizzBuzz")
        }
        if(i%3===0){
            console.log("Fizz")
        }
        else if(i%5===0){
            console.log("Buzz")    
        }
        
    }  
}
multiples();  
// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function sum_of_multiples(){
    let add= 0
    for(i=0;i<=1000;i++){
        if(i%3===0 && i%5===0){
            add+=i

        }

    }
    console.log(add);
}
sum_of_multiples()
// 3.Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function check_odd_or_even(){
    for(i=0;i<=20;i++){
        if(i%2===0){
            console.log(i + " is even");
        }
        else if(i%2===1){
            console.log(i + " is odd");
        }
    }
}
check_odd_or_even()
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
function find_largest_number(){
    numbers = [-2, 4,-5, 6,0]
     let largest_number =0
    for(i=0;i<numbers.length;i++){
        if (numbers[i] > largest_number){
            largest_number = numbers[i];
    }
}
console.log(largest_number);
}
find_largest_number()


// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function find_largest(){
   let number1 = 10
   let number2 = 40

   if(number1>number2){
    console.log(number1)
   }
   if(number2>number1){
    console.log(number2)
   }
}
find_largest()
// 6. Write a JavaScript program to find leap years from 2000 to 2022
function find_leap_year(){
    let year1 = 2000;
    let year2 = 2022;
    for(year=year1;year<=year2; year++){
        if(year%4===0 || year%400===0){
            console.log(`${year} is a leap year`);
        }
        else{
            console.log(`${year} is not leap year`);
        }
    }
}

find_leap_year()