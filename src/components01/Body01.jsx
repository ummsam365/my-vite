
// ** JSX 컴포넌트 기본규칙
// => 컴포넌트명은 대문자로 시작 (1컴포넌트 1화일, 대부분 컴포넌트명 과 화일명 동일)
// => {JS 표현식} : 기본자료형, 산술식,..객체, 배열 등
// => 단, 컨텐츠 또는 값(리터럴) 을 표현하는 위치에서
//    객체, 배열명 직접사용은 불허
// => class속성은 class가 JS 예약어 이므로 className 으로 사용
//    Label 사용시  for 속성도 JS 예약어 이므로 htmlFor 로 
// => 모든 Tag 는 닫힘 규칙 
// => 최상위 Tag 규칙 (필요시 <div>, <> </> 또는 <React.Fragment> Tag 로 감싸줌)
// => 조건부 랜더링 : 삼항식({} 내에서 가능), 조건문(JSX 에서는 사용불가능)

// ** 컴포넌트에 조건문 적용
//=> JSX 의 {...} 에서는 조건문이 불가능하지만,
//   컴포넌트에 조건문 적용은 가능함. (JS 이므로)

// ** React Event (Html 과 차이점) 
// => 이벤트 리스너 카멜표기  
// => 콜백함수처럼 함수(이벤트 핸들러) 그자체를 전달
// => onClick={onClickHandler}
// => 기본이벤트 제거 ( return false 대신 e.preventDefault() 명시적으로 호출해야함 )

//==============================================================
// ** Css, 스타일 적용하기
// => 인라인 스타일링 : style={{스타일...}}
//    HTML 의경우 <h1 style="color:black; backgroundColor:Orange">
// => 스타일파일 분리
//  -> 일반 css 화일
//    - Body.css (컴포넌트화일명 과 동일)  ,
//    - import  './Body.css' : 컴포넌트 import 와 달리 real_File_path 만 명시함
//  -> Sass (syntactically awesome stylesheets, 사스)
//    - 자주 사용되는 CSS 전처리기 (pre-processor) 중 하나임.
//    - 확장된 CSS 문법을 사용하여 CSS 코드를 쉽게 작성 할 수 있도록 해주며
//    - 코드의 재활용성과 가독성을 높여줌
//    - 확장자 .scss  .sass 를 지원하고 이 둘은 문법의 차이가 있으며
//       .scss 문법이 더 일반적임.
//    - 주요 차이점 : .sass 는 중괄호와 {} 와 세미콜론 ;  을 지원하지 않음
//    - 여러 파일에서 사용되는 내용은 따로 분리하여 관리 
//      (utils.scss 라는 파일명 주로 사용됨)

// ** 클래스명 중복 방지 를 위한 이름 규칙 (Naming Rule)
// => App.css 참고 하면  컴포넌트명-클래스명 형식으로 작성
// => BEM Naming : BEM 규칙을 준주하며 용도를 명확하게 포함하여 작성
//    - BEM (Block , Element, Modifier)
//    - Block: 가장 큰 단위로 독립적인 개체를 의미
//    - Element: Block을 구성하는 단위로 Block에 속하며 BEM의 Element는 중첩하지 않는다.
//    - Modifier: 상태를 뜻하는데, 특정한 행동 또는 동작을 의미.
//==============================================================

import img1 from '../assets/images/aaa.gif';
// export default function Body(props) {
//     const {name, country} = props;

// CSS import
import './Body.css';

//=> 위 코드를 한줄로 작성
export default function Body({name, country}) {  
    //=> 표현식 Test
    let n1=100, n2=200;
    let s1='안녕하세요~~', s2='React & JSX';
    let obj = { id:'banana', name:'홍길동' };
    let b1 =true, b2=false;

    //=> 이벤트 핸들러
    const clickTest = (e) => {
        alert(`** Event Test: Hello ${e.target.name}`);
        console.log(`** Event Test: e.type=${e.type}`);
    }
    
    //=> 조건문 활용
    //  조건에 따라 다른 화면이 출력 되도록 
    //  b1, b2 로 Test

if (b2) {
  return (
    <div className="body">  
    {/* 인라인 스타일 Test */}
    <h2 style={{color:'Green', background:'Pink'}}>** Body: Image & Event **</h2>  
    <img src={img1} />
    <button name='apple' onClick={clickTest}>* Apple: 콜백함수방식</button>
    <button name='banana' onClick={(event)=>{ clickTest(event) }}>* Banana: 직접기술</button>
    <p>* Html 과 비교: onclick="clickTest()" </p>
    </div>
  )
}else {
  return (
    <div className="body">
    <h2>** Body: props & JSX **</h2>
    {/* <p>* props Test1, name={props.name}, country={props.country} </p> */}
    <p>* props Test2, name={name}, country={country} </p>
    <h3>* JSX, JS표현식 Test *</h3>
    {/* <pre> JSX 에서 적용안됨 </pre> */}
        1) 산술식: {10+50}, n1*n2={n1*n2}<br></br>
        2) 문자식: s1+s2={s1+s2}<br></br>
        3) 객체: obj.id={obj.id}, obj.name={obj.name}<br></br>
                {/* obj={obj} 
                => 오류: 컨텐츠 또는 리터럴 위치에서 객체명 또는 배열명 사용은 오류
                */}
        4) 논리식: b1={b1.toString()}, b2={b2.toString()}, AND={(b1&&b2).toString()} <br></br>
                {/* b1={b1}, b2={b2}, AND={b1 && b2}
                    => boolean 값은 toString() 메서드로 문자화 해야 출력 가능함  */}
        5) 관계식: s1===s2={(s1===s2).toString()}  <br></br>  
        6) 삼항식 과제1: n1+n2 의 값이 짝수면 짝수, 홀수면 홀수를 출력하세요 ~~  <br></br> 
                과제1 결과: { (n1+n2)%2===0 ? "짝수" : "홀수" } <br></br>
    </div>
    ); //return_else
}//else
}//Body_function 
