//** useRef_Reference Test 
// => DOM 요소를 직접 제어 할 수 있음. 
//    ( DOM 노드, 엘리먼트, 리액트 컴포넌트의 주소값 참조 가능
//      JS 비교 : document.getElementById('root')   ) 

// => useRef는 상태값을 참조하되 그로인해 랜더링을 일으키지는 않게 하기 위해 사용하는 리액트훅
//  -> ref 는 랜더링 중 읽거나 쓰려고 할 경우 순수기능을 잃고 예상치 못한 결과를 낼 수도 있어서
//     event handler 에서 주로 사용함.
//  -> 입력폼 초기화, 포커스하기 등에 사용

// => current 속성을 가지고 있는 객체를 반환. 
//    인자로 넘어온 초깃값을  이 current 속성에 할당하며 이 속성은 값을 변경하여도
//    리액트 컴포넌트는 리랜더링 되지 않으며, 상태변수에도 영향을 주지않음
//    리액트 컴포넌트가 리랜더링 되는 경우도 이 속성의 값을 잃지 않음. 

// => 함수 컴포넌트에서는 Hooks (useEffect) 를 이용해서 처리가능
// => 실습순서 : 카운터 앱 만들기, useEffect Test

import { useState, useRef } from 'react';

export default function Body() {

    //1) useRef 정의
    //=> Ref 객체를 생성하고 textRef 에 저장
    //=> input Tag 에서 ref={textRef} 정의하면
    //   textRef 는 DOM 엘리먼트에 접근하도록 설정되고
    //   textRef 를 이용해서 DOM 엘리먼트 직접조작 가능함.
    //=> Ref 객체인 textRef의 current 속성에 DOM 주소가 전달됨
    //   그러므로 textRef.current.value 접근함 
    //   ( document.getElementById('...').value 접근과 동일 )
    const textRef = useRef();

    //2) state 변수 정의
    const [text, setText] = useState();
    const onChangeText = (e) => {setText(e.target.value)}

    //3) ref Test
    //=> onClickBtn 으로 Test
    const onClickBtn = ()=>{
        /* Test1)
        alert(`** 버튼클릭 1: text=${text}`);
        textRef.current.value='너무 재밌는 React';
        => DOM 엘리먼트에 직접 접근 & 반영
          그래서 화면에는 반영되지만 랜더링은 일어나지 않고,
          상태변수에도 영향을 주지않음
        => document.getElementById('..').value 접근과 동일

        console.log(`** 버튼클릭1, textRef 변경후: text=${text}`);
        */
        //Test2) focus 에 활용
        //=> 입력된 text 길이가 3미만 이면 포커스가 머문 상태로 입력을 기다리도록
        if (text.length<3) {
            alert('** 버튼클릭2, 세글자 이상 입력하세요~');
            textRef.current.focus();
        }else{
            alert(`** 버튼클릭2: text=${text}`);
            textRef.current.value='';
            console.log(`** 버튼클릭2, textRef_value clear 후: text=${text}`);
        }
    }//onClickBtn

    console.log(`** Body Update !!! **`);
return (
<>
    <h2>** useRef_Reference Test **</h2>
    <input value={text} onChange={onChangeText} ref={textRef} />&nbsp;&nbsp;
    <button onClick={onClickBtn}>완료</button>
</>
)}//Body