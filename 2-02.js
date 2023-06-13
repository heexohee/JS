// //단축 속성명
// // 단축 속성명 (**property shorthand)**
// // 객체의 key와 value 값이 같다면, 생략 가능해요.
// // 오른쪽이 실질적인 데이터
// // 즉, 오른쪽에 있는 것을 변수로도 쓸 수 있다. 
// // key-value는 가끔 이름이 겹칠 수 있다.(생략도 가능)
// const name = "nbc"
// const age = "30"

// const obj = {
// 	name,
// 	age: newAge
// }

// const obj = {
// 	name,
// 	age
// }

// function callFunction(func) {
//     func();
//   }
  
//   const sayHello = function() {
//     console.log('Hello!');
//   };
  
//   callFunction(sayHello); // "Hello!" 출력


//   const bb = function(func) {
//     func();
//   }
  
//   const sayHello = function() {
//     console.log('Hello!');
//   };
  
//   bb(sayHello); // "Hello!" 출력

// function doSomething(callback) {
//     console.log("Doing something...");
//     // 비동기 작업 수행
//     setTimeout(function() {
//       // 비동기 작업이 완료되면 콜백 함수 호출
//       callback();
//     }, 2000);
//   }
  
//   function callbackFunction() {
//     console.log("Callback function called!");
//   }
  
//   // doSomething 함수 호출 시 콜백 함수 전달
//   doSomething(callbackFunction);
  
  
  //배열의 요소로 함수를 할당
  const person = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person.sayHello(); // "Hello, my name is John" 출력

  const person2 = {
    name: 'Jhn',
    sayHello: ()=> {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person2.sayHello(); // "Hello, my name is undefined" 출력
//3주차 this 바인딩 부분 미리 기억.
//화살표 함수는 this를 바인딩하지 않는다.

// 배열의 요소로 함수를 할당

//함수는 배열의 요소로 할당될 수 있습니다. 
//이것은 함수를 배열에서 사용할 수 있게 합니다.
//1. 
const myArray = [
    function(a, b) {
      return a + b;
    },
    function(a, b) {
      return a - b;
    }
  ];
  
  console.log(myArray[0](5, 10)); // 15 출력
  console.log(myArray[1](10, 5)); // 5 출력


  //2.매개변수로 숫자를 받고 함수를 리턴해주는 고차함수.
//   function multiplyBy(num) {
//     return function(x) { //숫자 하나를 받아서 num과 곱해서 리턴.
//       return x * num;
//     }
//   }
//   function add(x, y) {
//     return x + y;
//   }
  
//   const multiplyByTwo = multiplyBy(2);
//   const multiplyByThree = multiplyBy(3);
  
//   const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력

  function multiplyBy(num) {
    return function(x) { //숫자 하나를 받아서 num과 곱해서 리턴.
      return x * num;
    }
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const multiplyByTwo = function(x) { //숫자 하나를 받아서 num과 곱해서 리턴.
    return x * 2;
  };
  const multiplyByThree = function(x) { //숫자 하나를 받아서 num과 곱해서 리턴.
    return x * 3;
  };
  
  const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력

  console.log(multiplyByTwo(5));
  console.log(multiplyByThree(1 ))
console.log(result);