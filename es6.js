// Template String
const numbers = [10,20,30,40,50,60]

const students ={
    name: "kawser Ahmed",
    age: "24",
    movie: ["Life is Hard","Never Sleep"]
}

const about = `My name is ${students.name} age of ${students.age} number of ${numbers[5]} also like movie ${students.movie[0]}`
console.log(about)

// Arrow function 
// Single line this will directly return
const number = () => 55;
const isEven = x => x % 2 === 0;
const addNumber = (x,y,z=5) => x+y+z;

// Multiline arrow function
// This will not return directly we need to write return
const doMath = (num1,num2,num3) => {
    const sum = num1 + num2 + num3;
    return sum;
}

console.log(number())
console.log(isEven(20))
console.log(addNumber(10,20))
console.log(doMath(54,52,36))

// Spread Operator
const newNumbers = [...numbers]
numbers.push(30)
numbers.unshift(30)

console.log(numbers)
console.log(newNumbers)