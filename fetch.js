// JSON
const students ={
    name: "kawser Ahmed",
    age: "24",
    movie: ["Life is Hard","Never Sleep"]
}
// Object to json conversion

const studentJson = JSON.stringify(students)
console.log(students)
console.log(studentJson)

// Json to object conversion

const studentObj = JSON.parse(studentJson)
console.log(studentObj)
