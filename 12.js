//조건의 중첩

//if 문을 여러개

let age= 14;
let gender = "남성";

//미성년자 구분
if (age >=19) {
    if (gender==="여성"){
    console.log("성인여성");
    }
    else{
        console.log('성인남성')
    }
}else
    {
        if (gender==="여성"){
            console.log("미자 여성")
        }else{
            console.log("미자 남임");
        }

}