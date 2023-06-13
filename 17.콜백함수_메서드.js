//콜백 함수를 받는 배열 메서드!!
//(foreach를 제외만 나머지 배열 메서드들은 
//새로운 배열 또는 새로운 값을 return함.)

//forEach, map, filter, find

//forEach (배열의 요소 하나하나마다에)

//매개변수 자리에 함수를 넣는 것 : 콜백함수

let numbers = [1, 2, 3, 4, 5];
//콜백함수의 인풋에는 item또는 i를 자주 사용 
numbers.forEach(function(item){ //매개변수로 함수를 넣은 모습.
console.log("item입니다 => "+ item);
});
//이경우 함수가 다섯번 실행되는데 배열의 인덱스의 갯수와 일치,
//이 함수의 매개변수는 이 배열에 있는 각각의 요소가 한개씩(한번씩) 들어가게 되었다.
//foreach는 별도의 return 등 쓸 필요 없다.

// map -> 반드시 리턴문 필요!
//반드시 리턴문 필요!-> 기존의 있었던 배열을 가공해서, 새로운 배열을 생산해내는 역할.
// map을 쓰면 반드시 새로운 배열이 나오므로, 
//반환값을 담을 곳이 필요.
//항상 원본 배열 길이 만큼이 return된다!  

// let newNumbers = numbers.map(function(item){

//     return item *3;
// });
// console.log(newNumbers)

//filter
//조건에 해당되는 것만 반환.

// let nums = [4, 1, 5, 4, 5];
// let newNums = numbers.filter(function(item){
// return item < 5;
// });
// console.log(newNums);

//find
//조건에 맞는 첫번째 요소만 반환.
let nums = [4, 1, 5, 4, 5];
let ba = nums.find(function(itme){
    return itme > 3 ;

})
console.log(ba);//4만 첫번째로 반환할 것. 