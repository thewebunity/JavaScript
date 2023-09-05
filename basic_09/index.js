// date object 

let myDate = new Date(); 


// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleString())

//custom date 

let myCreatedDate = new Date(2023 , 8 , 1)


// console.log(myCreatedDate.toDateString())


// timestamps 

let myTimeStamps = Date.now()

// console.log(myTimeStamps)

// console.log(myCreatedDate.getTime())

// console.log(myTimeStamps == myCreatedDate.getTime())


let newDate  = new Date()

console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

console.log(newDate.toLocaleString('en-IN'))