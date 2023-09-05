// there are two types of memory


// stack (primitive data types)

let name = "vishal kumar"

let fullname = name
console.log(fullname)
console.log(name)


//heaps (non-primitive data types)

let userOne = {
    name:"Vishal kumar",
    id:'45000'
}
let userTwo = userOne
userTwo.name = "Vishal Kumar Kushwaha"


console.log(userOne);
console.log(userTwo)