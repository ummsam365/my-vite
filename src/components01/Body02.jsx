// ** 리액트 훅 (HOOK)
// => 클래스 컴포넌트가 가지고 있던 유용한 기능을 
//    함수컴포넌트에서도 사용가능하도록 개발하여 제공하는 기능들
//    use~~ 로 명명됨 (useEffect, useContext, useReducer, useCallBack, useMemo 등)
//    HOOK(갈고리) : 클래스 기능을 낚아채듯 가져와 사용한다는데서 유래..
// => HOOK 사용규칙
//  -> 리액트의 함수 컴포넌트 또는 커스텀훅 에서만 호출가능
//  -> 리액트 함수 컴포넌트의 최상위 레벨에서만 호출 가능 
//    ( 반복문, 조건문 중첩된 함수내에서는 호출할수 없음을 의미함 )
// => 커스텀 훅 (Custom HOOK)
//    여러 컴포넌트에서 반복적으로 사용되는 로직을 훅으로 만들어서 재사용할 수 있음

// ** State
// => 값을 저장하거나 변경 할 수 있는 객체로 이벤트와 함께 주로 사용됨.
//    - 즉, 버튼 클릭시 버튼의 컬러를 변경할때 등에 사용됨 
//    - 이벤트 발생 -> 이로인하여 화면의 리랜더링이 필요한 경우 리랜더링이 자동으로실행될 수 있도록 해줌
//      -> State변수 로 지정된 변수의 값에 변화가 일어나면 리액트 에서는 리랜더링 해줌  
// => useState 생성자함수로 State 생성
//    const [text_State변수, setText_set함수] = useState("State변수 의 초기값");
// => useState 를 호출하면 현재상태값과 이 State변수의 값을 변경하는 set함수를 담은 배열을 return.
// => 이후 State변수 값이 변하면 이를 반영하기위해 컴포넌트를 리랜더링 함.
//    ( 이것을 컴포넌트의 Update 라함 )

// ** State 로 사용자 입력 관리하기
// => 사용자가 Text 를 입력할때마다 console 출력하기 
// => 과제 "-" 버튼 만들기
//    - 최소값은 0 : alert 경고창 출력   
//    - 최대값은 100 : alert 경고창 출력, 0 으로 초기화


import { useState } from "react";

export default function Body() {

//1. 상태변수 정의하기
//1.1) 일반변수
let num = 0;

//1.2) 상태변수
const [count, setCount] = useState(0);
const onIncrease = () => {
    num++; //일반변수
    //count++; //상태변수값은 직접변경 불가능, set메서드를 통해서만 가능
    setCount(count+1); //count=count+1 과 동일
    console.log(`** State Test, 증가: num=${num}, count=${count}`);
}//onIncrease
const onDecrease = () => {
    num--; //일반변수
    setCount(count-1); //count=count+1 과 동일
    console.log(`** State Test, 감소: num=${num}, count=${count}`);
}//onDecrease

//2. state(상태) 변수로 랜더링 제어
//=> 일반변수 num 을 1씩 증가시켜 주면서, 5회 증가하면 
//   setCount(count+5) 호출 & 리랜더링 하도록 기능추가
num=0;
const onIncrease02 = () => {
    num++;  
    console.log(`** onIncrease02 : num=${num}, count=${count}`);
    if (count > 20 ) {
        alert(`** 최대값 입니다, count=${count}`);
        setCount(0);
        return;
    } 
    if (num%5===0) {
        //=> 랜더링이 일어나도록
        //  - setCount(count+5) 호출하는 순간 랜더링이 일어나고,
        //  - 이것은 컴포넌트 함수를 재호출 한다는 의미임
        //  - 그러므로 함수내의 모든(지역) 변수들은 초기화됨
        //  - 그러나 상태변수는 값을 유지함 
        console.log(`** onIncrease02, Before : num=${num}`);
        setCount(count+5);  // setCount(num);
        console.log(`** onIncrease02, After : count=${count}, num=${num}`);
    } 
}//onIncrease02

const onDecrease02 = () => {
    num--;  
    console.log(`** onDecrease02 : num=${num}, count=${count}`);
    if (num%5===0) {
        //=> 랜더링이 일어나도록
        console.log(`** onDecrease02, Before : num=${num}`);
        setCount(count-5);  // setCount(num);
        console.log(`** onDecrease02, After :  count=${count}, num=${num}`);
    } 
}//onDecrease02

//3. input Test
//let textVal ='Green'; -> 반드시 상태변수로 정의
//=> 기본 type, text
const [textVal, setTextVal] = useState('input Test');
const textChange = (e) => {
    setTextVal(e.target.value);
    //=> textVal 의 값이 변경되고 , 동시에 랜더링이 일어나며 화면 출력됨 
}
// *** React 의 onChange 이벤트
//=> 값이 바뀌는 즉시 실행됨,
//   실제로는 input 이벤트에 가깝게 동작
//=> 순수 JavaScript 의 onchange 와 다름  
//  - 포커스를 잃을 때(blur) 값이 바뀌었으면 실행됨
//  - 입력 중에는 안 불리고, 입력을 끝냈을 때 실행됨

//=> date type, select
const [date, setDate] = useState('');
const dateChange = (e)=>{
    setDate(e.target.value);
    console.log(`** dateChange: e.target.value=${e.target.value}`);
}

//=> select사용 HTML과 차이점
//-> 초기값 설정: html 은 selected 속성이지만, value 속성의 초기값 (상태변수의 초기값)
//-> 선택된 option 값을 가져오려면 onChange 이벤트를 사용해야함
//-> 이벤트 발생시 option 값(컨텐츠) 가 value 에 전달됨 
//  (html에서는 value 속성을 정의하지 않아도 됨)    

const [menu, setMenu] = useState('치킨');
const menuChange = (e) =>{
    setMenu(e.target.value);
    console.log(`** menuChange: e.target.value=${e.target.value}`);
}

return (
<>
    <h2>** Body: State **</h2>
    <p>1. Count 하기</p>
    {/* onIncrease, onDecrease 모두 ~02 변경하면서 Test 하세요~  */}
    <button onClick={onIncrease02}>+(증가)</button>&nbsp;&nbsp;
    <span>count={count}</span>&nbsp;&nbsp;<span>num={num}</span>&nbsp;&nbsp;
    <button  onClick={onDecrease02} >-(감소)</button><br></br>
    <hr></hr>
    <p>2. input Tag : 입력받기</p>
    <span>일반적인 컨텐츠, 안녕하세요 ~~</span><br></br>
    <input value={textVal} onChange={textChange} />&nbsp;&nbsp;<span>{textVal}</span>
    <br></br>
    <input type="date" value={date} onChange={dateChange}/>&nbsp;&nbsp;
    <select value={menu} onChange={menuChange}>
        <option>치킨</option>
        <option>삼겹살</option>
        <option>양념</option>
        <option>음료수</option>
        <option>샐러드</option>
    </select>

</>    
);
}//Body