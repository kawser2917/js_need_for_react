// Array Destructring
const numbers = [10,20,30,40,50]

const [x,y,...newArr] = numbers

console.log(x,y,newArr)

//Object Destructring

const student = {
    name: "Kawser Ahmed",
    id: 101,
    cit: "Dhaka",
    specification: {
        height : 66,
        weight :70,
        color : "None"
    }
}

const {name,id} = student

const {height, weight} = student.specification

console.log(height,weight)
console.log(name, id)

