// //map과 set

// //### (1) Map

// //**Map**은 키-값 쌍을 저장하는 객체와 비슷합니다. **Map**은 각 쌍의 키와 값을 저장하며, 객체와 달리 키로 사용할 수 있는 모든 유형을 사용할 수 있습니다. **Map**은 키가 정렬된 순서로 저장되기 때문에, 추가한 순서대로 반복할 필요가 없습니다. **Map**을 사용하면 다음과 같은 작업을 수행할 수 있습니다.

// // - 키-값 쌍 추가 및 검색(set)
// // - 키-값 쌍 삭제(delete)
// // - 모든 키-값 쌍 제거(clear)
// // - Map 크기 및 존재 여부 확인(size)
// //객체는 key에 무조건 문자 형태만 들어갔는데, map은 어떤 형태든 다 들어갈 수 있다.
// //객체와 달리 키로 사용할 수 있는 모든 유형을 사용할 수 있습니다.
// // Map은 키가 정렬된 순서로 저장되기 때문에

// // const myMap = new Map();

// // myMap.set('keyy','value2');
// // myMap.set('keyyy','value3');

// // console.log(myMap.get('keyyy'));


// //<Map의 반복>
// //Map에서는 **keys()**, **values()**, **entries()** 메소드를 사용하여 
// //키, 값 및 키-값 쌍을 반복할 수 있습니다.

const myMap = new Map(); //새로운 Map을 생성.
myMap.set('one', 1);//이제 Map에 값을 추가하려면 set() 메소드를 사용
myMap.set('two', 2);
myMap.set('three', 3);
                                
//Map의 반복 : keys(), values(), entries() 메소드를 사용하여 
//키, 값 및 키-값 쌍을 반복할 수 있다. 
//마치 배열에서 for문 처럼 돌아가네여.
for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}
//각 배열로 묶어서 
for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

//Map의 크기를 확인하려면 size 속성을 사용합니다.
console.log(myMap.size); // 3 출력

//특정 키가 Map에 존재하는지 여부를 확인하려면 has() 메소드를 사용합니다.
console.log(myMap.has('two')); // true 출력