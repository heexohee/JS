// 새로운 이름으로 할당
let {name: newName, age: newAge} = user;
console.log(name, age) // ReferenceError: name is not defined
console.log(newName, newAge) //nbc 30

// let {name, age, birthDay} = user;
// console.log(birthDay) // undefined

// let {name, age, birthDay = "today"} = user;
// console.log(birthDay) // today