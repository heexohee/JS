//객체 
//key-value pair
//하나의 변수에 여러개의 값을 넣을 수 있다.

//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법
// let person = {
//     name: "성길",
//     age : 34,
//     height : 183,
//     weight : 80,
//     gender : "남"
// }
// console.log(person);

//1-2. 생성자 함수를 이용한 객체 생성 방법 //굉장히 많은 객체를 동시에 만들 수 있다.
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// let person1 = new Person("성남", 30, "남")
// let person2 = new Person("민지", 20, "여")

// console.log(person2)

// //2. 접근하는 방법
// console.log(person2.name);

//3. 객체 매소드(객체가 가진 여러가지 기능: object.~~)를 사용하여 객체가 가진 여러가지 기능들에 접근하기!
//3-1. object.key(): key를 가져오는 메소드

let person = {
    name: "성길",
    age : 34,
    height : 183,
    weight : 80,
    gender : "남"
}
let keys = Object.keys(person);
console.log('key=>',keys);


//3-2. values 
let values = Object.values(person);
console.log('values =>',values);

//3-3. entries
//key와 value를 묶어서 배열로 만든 배열!(2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries);

//3-4. assign
//객체 복사 
//어디에다가 (복사할래, 뭘 복사할래)
let newPerson ={};
Object.assign(newPerson, person, {age:31}, {gender:'여자'});
console.log("newperson =>", newPerson);

//3-5. 객체 비교
//객체와 배열은 상당히 크기가 크다. 
//메모리에 저장할때 별도에 저장.( 별도의 공간에 저장)

// let person1 = {
//     name: "성길",
//     age : 34,
//     gender : "남"
// } 
// //person2도 별도의 공간에 저장.
// let person2 = {
//     name: "성길",
//     age : 34,
//     gender : "남"
// } 

// let str1 ="aaa";
// let str2 ="aaa"

// console.log(person1===person2); //false -> 객체와 배열은 상당히 크기다 크다. 메모리에 저장할때 별도에 저장.( 별도의 공간에 저장)
// console.log(str1===str2);//true

// console.log(JSON.stringify) //이 객체를 문자열화 시킨다...! 즉 주소값으로 되어있던 것을 문자열화...!
// console.log(JSON.stringify(person1) === JSON.stringify(person2))//문자열화 시켰으므로 true!


//3-6. 객체 병합
let person1 = {
    name: "성길",
    age : 34,
} 
//person2도 별도의 공간에 저장.
let person2 = {
    gender : "남"
} 
//... : Spread operator
let ugly = {...person1, ...person2};
console.log(ugly)
