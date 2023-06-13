// 화살표 함수ㄴ
//ES6 신문법

function add(x, y){
return x+y;
}

//1-1.기본적인 화살표 함수.
let arrowFunc01 = (x, y)=>{
    return x+y
}
//1-2. 한줄로
let arrowFunc02 = (x, y)=> x+y;

//매개변수를 하나만 받는 함수.
function testFunc(x){
    return x;
}
//화살표 함수로! 중괄호까지 생략
let arrowFunc03 = (x)=>x;