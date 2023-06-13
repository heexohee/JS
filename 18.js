//for문 //배열과 함께하는 for 문

//for, while => ~동안 : 반복문

// for (초기값; 조건식; 증감식){

// }

// i라는 변수는 0부터 시작해서
// i라는 변수가 10에 도달하기 전까지 계속할거야
// i라는 변수는 한 사이클을돌고나면 1을 더할 거야.
// for (let i = 0; i<10; i++){
// console.log("for문이 돌아가고 있음=>" + i);
//      }


//배열과 함께하는 for 문(for문과 배열을 짝!)
// const arr = ["one","two","three","four","five"];
// for (let i = 0; i<arr.length;i++){ //i++를 안쓰니까 무한반복되더라
//     console.log(i);
//     console.log(arr[i]);
// }
// ex : 0-10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시


// for (let i = 0; i<= 10; i++){ //i++를 안쓰니까 무한반복되더라
//     if (i>=2){
//     if (i % 2 === 0){
//     console.log("2의 배수만 출력=>",i); 
// }
//     }
// }
//숫자 10개 선언
//숫자 10개를 for문으로 돌리기
//if 로 2의 배수여부 확인
//출력

//객체를 배웠기 때문에 for in 문

// for ~ in문
//객체의 속성을 출력하는 문법
//for in 반복문은 객체의 속성들을 반복하여 작업을 수행할 수 있습니다. 
//모든 객체에서 사용이 가능합니다. 
//for in 구문은 객체의 key 값에 접근할 수 있지만, 
//value 값에 접근하는 방법은 제공하지 않습니다. 
//자바스크립트에서 객체 속성들은 내부적으로 사용하는 숨겨진 속성들을 가지고 있습니다. 
//그 중 하나가 [[Enumerable]]이며, for in 구문은 이 값이 true로 셋팅되어 속성들만 반복할 수 있습니다. 
//이러한 속성들을 열거형 속성이라고 부르며, 객체의 모든 내장 메서드를 비롯해 각종 내장 프로퍼티 같은 비열거형 속성은 반복되지 않습니다.


// let person = {
//     name : "bababa",
//     age : 23,
//     gender : "male"
// };

// for (let key in person){
//     console.log(key + " : " + person[key]);
// }
//객체의 value에 접근하는 법은 []을 열고, key를 입력하는 방법도 있다!
//person[key]

//for …of 반복문
//for of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다. for of 구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 합니다(직접 명시 가능).

// const iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value); // 10, 20, 30
// }


// for in 반복문과 for of 반복문의 차이점

// for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
// for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (var value of iterable) {
  console.log(value); // 3, 5, 7
}