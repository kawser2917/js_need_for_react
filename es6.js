// Template String
const numbers = [10,20,30,40,50,60]

const students ={
    name: "kawser Ahmed",
    age: "24",
    movie: ["Life is Hard","Never Sleep"]
}

const about = `My name is ${students.name} age of ${students.age} number of ${numbers[5]} also like movie ${students.movie[0]}`
console.log(about)