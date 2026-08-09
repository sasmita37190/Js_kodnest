let myDate = new Date()

console.log(typeof myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())

console.log(myDate.toJSON())
console.log(myDate.toISOString())

console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())


// let mycreatedDAte = new Date(2026, 0, 23)
// let mycreatedDAte = new Date(2026, 0, 23, 5, 3)
// let mycreatedDAte = new Date("2026-08-09")
// console.log(mycreatedDAte.toString())
//console.log(mycreatedDAte.toLocaleString())
//console.log(mycreatedDAte.toDateString())


let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
// console.log(myCreatedDate.getSeconds())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())

//getTime is used to get the timestamp of a date object, which represents the number of milliseconds 
// that have elapsed since January 1, 1970, 00:00:00 UTC. It returns a numeric value representing the timestamp.


newDate.toLocaleString('default',{weekday:'long', timezone:'UTC'});
