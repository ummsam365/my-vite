//** React 기본 (Test 폴더)
//=> components : 레시피
//=> components01 : Props, State, Ref  

import './App.css';
//** import 방법
// => export default 로 공개한 경우에는 단독객체를 의미하므로
//   단독 import 가능    
import MyHeader from './components/Header.jsx';
import MyMain from './components/Main.jsx';
import MyBody from './components01/Body05.jsx';
 
//=> export 한경우에는 정확하게 전달객체를 표기함 
//   Footer 를 import 해서 현재화일에서는 MyFooter 로 사용  
import { Footer as MyFooter } from './components/Footer.jsx';

import React from 'react';
//=> React.Fragment 사용 하려면 React import 해야함.

//** React.Fragment (조각)
// => 리액트는 둘 이상의 형제 엘리먼트를 랜더링 하지않으므로 
//    ( 최상위 Tag 규칙, 프래그먼트 사용을 권장하는 오류 발생 ) 
//    이들을 <div> 와 같은 Tag로 감싸 주어야 하는데,
//    이때 <React.Fragment> Tag 로 감싸면 불필요한  <div> 사용을 줄여줌
// => <React.Fragment> 는 렌더링 되지않음
// => 사용시 react import 필요함.
// => <> , </> 도 동일함

/* Test01) React Data 전달
=> 리액트 프로젝트의 최상위 컴포넌트는 항상 App 
   App 이 최종으로 유일한 페이지인 index.html 로 전달 & 출력됨 
=> 리액트 컴포넌트 간의 Data 전송은 props 를 이용해서
   상위(부모) 에서 하위(자식) 방향으로만 가능함  
=> 모든 자식컴포넌트로 props 를 이용해  Data 전달 가능함  
*/
function App() {

  let test='Green Computer';
  const bestDress = {
    color:'Blue',
    style:'Long_Sleeveless',
    price:9900,
    size:['xs', 'small', 'medium', 'large', 'xl']
  } //bestDress

  //=> 기본자료형 : Body 로
  //=> 객체 : Header 로

  return (
  <React.Fragment> 
    {/* => 보내는 방법 1) 객체형으로 담기
        <MyHeader bestDress={bestDress} /> 
        -> props 에 담겨진 구조
           props={ 'bestDress'=bestDress } 

        => 보내는 방법 2) 펼침 연산자 적용 
        -> props 에 담겨진 구조
           props = {  
                color: 'Blue',
                style: 'Long_Sleeveless',
                price: 9900,
                size: ['xs', 'small', 'medium', 'large', 'xl']   
                }
    */}
    <MyHeader {...bestDress} />
    {/* <MyMain /> */}
    <MyBody name={test} country={'대한민국'} />
    <MyFooter />
  </React.Fragment> 
  ) //return
} //App
export default App
