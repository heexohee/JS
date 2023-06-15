// const obj1 = {
// 	outer: function() {
// 		console.log("test1=>",this); // (1)
// 		var innerFunc = function() {
// 			console.log("test2=>", this); // (2), (3) //글로벌 객체를 출력해줌.
// 		}
// 		innerFunc();

// 		var obj2 = {
// 			innerMethod: innerFunc
// 		};
// 		obj2.innerMethod();
// 	}
// };
// obj1.outer();

var obj1 = {
	outer: function() {
		console.log("0", this); // (1) outer

		// AS-IS
		var innerFunc1 = function() {
			console.log("1",this); // (2) 전역객체
		}
		innerFunc1();

		// TO-BE
		var self = this;
		var innerFunc2 = function() {
			console.log("2", self); // (3) outer
		};
		innerFunc2();
	}
};

// 메서드 호출 부분
obj1.outer();


