//** Page Routing02
//=> 폴더 components04 사용
//-------------------------------------------------------

// ** 관련 훅(HOOKs) 과 추가사항
// => useParams(), path 에 :id 사용 -> 예제: pages/Topics
// => useSearchParams() -> 예제: pages/Contact
//    url 에 있는 쿼리 스트링의 값을 꺼내어 사용할 수 있도록 해줌.
//   ( 예. login?id=banana&password=12345! )

// => useLocation() -> 예제: pages/Contact
//    현재 라우터의 위치를 나타내는 location 객체를 return
//    현재 위치에 관한 정보가 필요할때 이용됨.
// => location 객체의 속성
//    -> pathname : 현재 주소 경로
//    -> search : ?를 포함한 쿼리스트링
//    -> state : 페이지로 이동시 임의로 넣을 수 있는 상태 값
//    -> key : location 객체의 고유 값, 초기값은 default, 페이지가 변경될때 마다 고유의 값이 생성됨.
//    -> hash : 주소의 #문자열 뒤의 값

// => useNavigate() 
//    -> 프로그래밍 방식으로 라우팅을 제어 (=코드로 조작)
//    -> Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 경우
//       뒤로가기 등에 사용하는 Hook.
//    -> replace 옵션 
//      - useNavigate 로 해당 페이지에 진입 후 다시 뒤로 가기가 안 되는 경우
//        replace 옵션으로 가능
//      - navigate('/testPage', { replace:true })
 
/*
=> useNavigate()  사용예
  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
        <li><button onClick={() => navigate(-1)}>Go back</button></li>
        <li><button onClick={() => navigate(1)}>Go forward</button></li>
        <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
        <li><button onClick={() => navigate('/')}>Go Root</button></li>
        <li><button onClick={() => navigate('/', {replace: true})}>Go Root</button></li>
      </ul>
    </>
  );
*/
// =============================================================

import './App.css';
import Header from './components04/Header'; //확장자 생략 가능
import Footer from './components04/Footer';
import Main from './components04/Main';


import { NavLink, Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';

function App() {

  //** 처리사항
  //1) 로그인 상태 확인
  //=> 브라우져의 Session_Storage 사용
  //  -> 보관
  //    - JS 객체 -> JSON 포맷으로
  //    - JSON.stringfy() : 객체를 String  Type 으로 펼쳐놓음
  //  -> get
  //    - JSON 포맷 -> JS 객체
  //    - JSON.parse()

  //=> 로그인 상태 관리 객체
  const [loginInfo, setLoginInfo] = useState({isLogin:false, id:'', userName:''});
  const {isLogin, id, userName} = loginInfo;

  //=> 로그인 상태 확인 (Session_Storage 에서)
  if ( !isLogin ) {
    const loginCheck = JSON.parse(sessionStorage.getItem('loginInfo'));    
    //=> 로그인 여부 확인
    if ( loginCheck!=null ) {
      console.log(`** ${loginCheck.userName}님 로그인 확인`);
      setLoginInfo({
        isLogin:true,
        id:loginCheck.id, 
        userName:loginCheck.userName
      });
    }
  }//if

  //2) 로그인 정보 관리
  //=> 로그인/로그아웃
  //=> Login form 에서 id, userName 입력
  //=> 회원DB 에 존재하는지 확인
  //=> 존재 -> 성공 -> 기본회원 정보를 보관
  //   아니면 -> 실패 (재로그인 유도)
  //=> 함수로 정의 (onSubmit 버튼 클릭시 실행되는 이벤트 핸들러)
  //=> 최상위 컴포넌트인 App 에 정의 

  //2.1) 로그인 함수 (이벤트 핸들러)
  //=> 로그인 결과에 따라 다른 Page 이동
  //  - 이것을 지원하는 useNavigate() 활용
  //=> Login 컴포넌트로 전달
  //   -> Main컴포넌트 -> Login컴포넌트 
  //   즉, 단계별로 전달 
  
  //** useNavigate() 활용
  //=> 코드로 라우팅 제어 (Page 이동)
  //=> 정의 & 사용 
  //  - useNavigate() 로 navigate 함수 취득후 적용
  //    navigate('path_url')
  const navigate = useNavigate();

  const onLoginSubmit = (id, userName) => {
    //1) 입력값 무결성 점검
    //  - 화면에서 1차 점검 (지금은 통과하지만, 중요함)
    //  - 전달된 Data 길이로 확인
    //    id : 길이 4 이상
    //    userName : 길이 2 이상
    if ( (id!=null && id.length>3) && 
         (userName!=null && userName.length>1) ) {
      //2) 저장
      //  - sessionStorage 에 저장하기위해 임시객체 loginCheck 에 담음  
      //  - 상태변수에 직접 담으면 정확하게 저장되기전에 랜더링이 발생하기때문
      const loginCheck = ({
        isLogin:true,
        id:id, 
        userName:userName
      });
      sessionStorage.setItem('loginInfo', JSON.stringify(loginCheck)) ;  
      alert(`** ${userName} 님 로그인 성공 **`);
      setLoginInfo(loginCheck);
      //=> Home 화면
      navigate('/');
    }else {
      alert(`** id, userName 을 정확하게 입력 하세요 ~~ **`);
      //=> 재로그인 유도, loginForm 으로
      navigate('/login');
    }
  }//onLoginSubmit

  //2.2) 로그아웃
  //=> sessionStorage 의 로그인 정보 삭제
  //=> 상태변수 loginInfo 초기화
  const onLogout = () => {
    sessionStorage.clear();
    setLoginInfo({isLogin:false, id:'', userName:''});
    //=> 화면전환 : Header 컴포넌트에서 <NavLink to='/' 했으므로 필요없음
  }//onLogout

  //3) Header 의 메뉴요청이 들어오면 Page 이동
  //=> 로그인후 표시되는 <span> 으로 설정한 메뉴들의 요청
  const onRequestPage = (url) => { navigate(url); }
 
  //=> App 랜더링 확인
  console.log(`** App Update !!! **`);

  return (
  <> 
    <Header isLogin={isLogin} userName={userName} userId={id} onLogout={onLogout} onRequestPage={onRequestPage} />
    <Main onLoginSubmit={onLoginSubmit} />
    <Footer  />
  </> 
  ) //return
} //App
export default App
