// var a;
// console.log(a); // Undefined
// a = 3;


// console.log(variable);
// console.log(constance);

// let variable = 3;
// const constance = 3;

//1. 함수 선언문
function add(x, y){
    return x+y;
}
console.log(add(2,5));

//2. 함수표현식
let add2 = function(x,y){
return x+y;
}

let functionresult2 = add2(20, 30)
console.log(functionresult2);

//함수의 매개변수(parameter)