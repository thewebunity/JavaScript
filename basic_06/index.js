// String

// concetanate string 

let name = "vishal";
let surname = "kumar"

let fullname = name + surname;
console.log(fullname)

console.log(name+surname)


// template letrals 

console.log(`hello my name is ${name} ${surname}`)


// string with the help of new keyword

const channelName = new String('Imbibe thewebunity')

console.log(channelName[0])

console.log(channelName.length)

console.log(channelName.toLowerCase()) 

console.log(channelName.toUpperCase()) 

console.log(channelName.charAt(0))

console.log(channelName.indexOf("t"))

console.log(channelName.slice(0,5))

console.log(channelName.substring(0,5))

 console.log(channelName.trim())


const url = "https://webunity.live/vishal%20choudhary"


console.log(url.replace('%20', " "))

console.log(url.includes('vishal'))

console.log(url.split("-"))
