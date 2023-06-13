//문 

//조건문 - (if, else if, switch ~~)

//if 문
// let y = "hello world";

// if (y.length>=5);{
//     console.log(y.length);
// }

// let y = 10;

// //메인 로직1
// if (y>0){
//     console.log("양수");
// }
// //메인 로직2
// else {
//     console.log("음수");
// }


//if - else if - else 문
let x = 10;
//메인로직1
if (x<0){
 console.log("1")
}else if (x>=0&&x<10){
    console.log("2")
}
else {
    console.log("3")
}
//

//스위치문
let d="바나나"
switch(d){
    case "사과":
        console.log("사과임당");
        break;

        case "바나나":
        console.log("바나나");
        break;

        case "귤":
        console.log("귤임당");
        break;

        default:
            console.log("nothing");
            break;
}