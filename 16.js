// //배열 

// //1. 생성
// //1-1. 기본 생성

// let dolls = ["제희","석진이","몽이"];

// //1-2. 크기 지정
// let number = new Array(5);


// console.log(dolls.length); //배열의 길이를 가지고! for 문이나 while 문 돌리는 경우가 많아서!! 짝궁이다! 
// console.log(number.length);

// //2.요소 접근
// console.log(dolls[1]);

//3.배열 메소드
//3-1. push
// let dolls = ["제희","석진이","몽이"];
// console.log(dolls);

// dolls.push("강쥐");
// console.log(dolls);

//3-2. pop
//배열의 가장 마지막 요소 삭제
// let dolls = ["제희","석진이","몽이"];
// console.log("1=>", dolls);

// dolls.pop();
// console.log("2=>", dolls);


//3-3. shift
//배열의 맨 처음 요소 삭제
// let dolls = ["제희","석진이","몽이"];
// console.log("1=>", dolls);

// dolls.shift();
// console.log("2=>", dolls);

//3-4.unshift
//배열의 맨 앞에 요소를 추가

// let dolls = ["제희","석진이","몽이"];
// console.log("1=>", dolls);

// dolls.unshift("호떡");
// console.log("2=>", dolls);

//3-5. splice 
//지정 위치에 새 요소를 추가
// dolls.splice(1,1,"포도")
// console.log(dolls);

// //3-6. slice
//기존 배열을 잘라서 새로운 배열을 반환
let dolls = ["제희","석진이","몽이"];
let newdolls = dolls.slice(1,3);
console.log(newdolls); //['석진이', '몽이']
