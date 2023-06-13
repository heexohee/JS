//scope, 전역변수, 지역변수, 화살표 함수
// 변수가 어디까지 영향을 미칠 수 있는가.
let x = 10;

function printX(){
    console.log(x)
}

console.log(x)
printX();