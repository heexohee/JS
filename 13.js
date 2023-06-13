//조건부 실행
let x = 10;

if (x>0){
    console.log("x는 양수임");
}
//and 조건 (위 코드를 아래처럼 축약)
x > 0 && console.log("양수임");

//or 연산자(||)
//삼항 연산자와 단축평가
let y; //y에는 지금 언디파인드가 들어가 있음.
let z = y || 20; //y가 und이면 20을 기본값으로 세팅해줘라는 문법.

console.log(z)