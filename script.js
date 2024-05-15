// Excercise 3.1
const cost_of_her_payments = (interest_fee)=>{
    return 3+interest_fee*0.001
}
console.log(`She should be paying ${cost_of_her_payments(50)} $`)
// Excercise 3.2
//Part 1
const friend = (a,b,c)=>{
    console.log('Welcome '+a+b+c);
}
friend('Master ','Mond ','Tanguy')
//Part 2
const birthDay = (a)=>{
    return 2024-a;
}
console.log(birthDay(1996))
//Part 3
const welcome = (a,b)=>{
    console.log('Welcome '+a+', you are '+b+'.');
}
welcome('Master',birthDay(1995))
welcome('Mond',birthDay(1996))
welcome('Tanguy',birthDay(1995))
//Chalenge
// ### Challenge Yourself

// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// #### Part 1

// A student passes if they have a score greater than or equal to 5.
// Create a function that returns a boolean true or false.
let score = 3
answer = score>=5 ? "Passed":"Not Passed";
console.log(answer)

// #### Part 2

// A student has an excellent grade if they score higher than 8.
// Add on to your function to print out "Excellent" for scores greater than 8.
switch(true){
    case score >8:console.log("Excellent");
    break;
}
// #### Part 3

// A student has a perfect grade if their score is 11.
// Add on to your function to print out "Perfect" for a score of 11.
const grade = (score=0) => {
    switch(true){
        case score ===11:console.log("Perfect");
        break;
        case score >8:console.log("Excellent");
        break;
        case score >5:console.log("Passed");
        break;
        default:console.log("Not Passed")
    }
}

grade(10)