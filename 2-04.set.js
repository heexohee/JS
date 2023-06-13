// `Set`은 고유한 값을 저장하는 자료 구조입니다. 
// `Set`은 값만 저장하며, 키를 저장하지 않습니다. 
// `Set`은 값이 중복되지 않는 유일한 요소로만 구성됩니다.(집합처럼)
// `Set`을 사용하면 다음과 같은 작업을 수행할 수 있습니다.

// - 값 추가 및 검색
// - 값 삭제
// - 모든 값 제거
// - `Set` 크기 및 존재 여부 확인
const mySet = new Set();
mySet.add('value1');
mySet.add('value2'); //->만약 여시서 똑같은 값(value2가 2개)을 추가할 경우 집합처럼 중복된 값은 하나로 친다!
mySet.add('value3');

for (const value of mySet.values()) {
  console.log(value);
}
console.log(mySet.size);
console.log(mySet.has('value1'));