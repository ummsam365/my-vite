//** Page Routing
//=> 폴더 pages 사용
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ** Page Routing
// => 요청에 따라 적절한 페이지를 반환하는 과정
// => 이때 웹 페이지를 어디서 만드느냐에 따라 
//    SSR(Server Side Rendering), CSR(Client Side Rendering) 로 나뉘며,
//    리액트는 SPA(Single Page Application) 이며 CSR 방식을 채택하고 있다.
// => 두 방법 모두 장단점이 있으므로 서비스의 목적에 따라 적절한 방식을 채택한다.
// => CSR 은 처음접속시 Html 과 JS 에플리케이션을 함께 제공받기 때문에 
//    처음접속은 느리지만, 이후 페이지 이동은 브러우저에서 교체하므로 훨씬 빠르다.  

// ** SPA 에서 Page Routing
// => 마치 Page가 이동하는것처럼 사용자가 요청한 URL에 따라 해당 URL에 맞는 
//    페이지를 보여주는 것으로 실제는 적당한 컴포넌트가 배치 되도록 해줌

// ** React Router 
// => 리액트의 라우팅 라이브러리
// => 서버로부터 신규 페이지를 불러오지 않는 상황에서 각각의 url에 의해 선택된 Page를
//    하나의 페이지에서 랜더링 해주는 라이브러리 

// ** 라우터 컴포넌트
// => Router 를 적용하려는 최상위 컴포넌트를 감싸는 Rapper 컴포넌트
//    ( index.js_RCA방식 또는 main.jsx_Vite방식 또는 App.jsx 에서 주로 적용함 )
// => 사용자가 입력한 주소를 감지하는 역할을 하며, 
//    컴포넌트가 페이지를 구성하고 이동하는데 필요한 다양한 기능 제공
// => 여러 환경에서 동작할 수 있도록 다양한 라우터 컴포넌트를 제공하며
//    이들중 BrowserRouter 와 HashRouter 가 가장 많이 사용됨. 
//   ( 아래 3.1 과 3.4 참고 )

// => BrowserRouter 컴포넌트
//  -> 브라우저의 주소를 감지
//  -> 동적인 페이지에 적합하다. 
//    (데이터들을 스크립트에 의해 가공 처리 한 후 생성 & 전달되는 웹페이지)
//  -> 검색엔진최적화(SEO)에 적합하기 때문에 SEO를 중요시 하는 경우 주로 사용함.

// => HashRouter 컴포넌트
//  -> url의 해시 주소( ~~~/#test )를 를 감지
//     url 에 # 을 추가해 url의 해쉬값이 변경되면 해당경로와 일치하는 컴포넌트를 렌더링
//     http://localhost:3000/#/contact/ 와 같은 url 사용할 수 있도록함.
//  -> 정적인 페이지에 적합하다. ( history 에 미리 저장된 페이지가 그대로 보여지는 웹페이지)
//  -> 검색 엔진으로 읽지 못한다. 
//     #값 때문에 서버가 읽지 못하여 서버가 페이지의 유무를 인식하지 못하기 때문. 
//     ( 이러한 이유로 거의 사용하지 않는다. )

// ** 웹페이지의 해쉬(Hash)란
// => url의 일부분으로 사용되는 문자열이며,
//   보통은 url에 #을 붙여 사용되는데
//   해쉬는 서버로부터 새로운 페이지를 요청하지 않고,
//   웹페이지 내에서 특정 영역을 식별하여 이동할수있도록 함.
//   (html a Tag 의 책갈피 기능 참고)

// -----------------------------------------------------------------
// ** React Router 적용하기
// 1. 프로젝트 root 경로에 리액트 라우터 설치
// => npm install react-router-dom
// => package.json 으로 버전확인 ( 7.x.x 인지 )
// => 구버전 이면 제거 : npm uninstall react-router-dom
// => 최신버전 재설치 : npm install react-router-dom@7

// ** 버전 6 이후 달라진점
// => Switch -> Routes
// => path 매칭 규칙
//    앞부분만 일치(exact 옵션사용) -> 정확히 일치 (exact 옵션사용불가)

// 2. Project 폴더 구성
// => src -> components, pages, images

// 3. 실습

// 3.1) main.jsx (RCA: index.js) 의 App 을 BrowserRouter 컴포넌트로 감싸기 
// => BrowserRouter
//  -> Router 를 적용하려는 최상위 컴포넌트를 감싸는 Rapper 컴포넌트
//  -> HTML5를 지원하는 브라우저의 주소 변경을 감지하며 컴포넌트가
//    페이지를 구성하고 이동하는데 필요한 다양한 기능 제공

// 3.2) Routes, Route 컴포넌트로 url 요청에 의한 랜더링 영역 지정하기
// => Routes: Route 컴포넌트들을 감싸며 ( 6 이전버전의 Switch 가 변경됨)
// => Route : path, element_path에 해당하는 컴포넌트

// 3.3) Page 이동 적용하기
// 3.3.1) a_href
// => page가 리로드(새로고침) 됨 
// => 즉, 리랜더링되며 useState, useRef 등으로 메모리상에 구축해놓은
//    모든 상태값들이 초기화됨.    
// => 외부 프로젝트와의 연결을 위해 주로 사용.

// 3.3.2) Link_to
// => Page가 리로드 되지않도록 해줌 (SPA 구현에 적합)
// => Page가 새로고침 되지않으며 url만 변경됨 

// 3.3.3) NavLink_to
// => 사용자가 어느 페이지에 위치하는지 알 수 있도록 해줌
// => 개발자도구 elements Tab 에서 확인해보면 아래 style이 적용된 
//    <li> 에 class="active" 속성이 추가되어있음 확인가능
// => App.css 에 아래코드 추가후 확인
//      .active {
//          background-color: tomato;
//          text-decoration: none;
//       }

// 3.4) Parameter(:id) 와 useParams() & Nested Routing Test
// => <Route> 의 path 속성에서 Parameter 를 전달 받을 수 있는 변수설정
//     path="/:topic_id" , 이렇게 변수를 통해 받은 값을 useParams() 로 꺼내서 사용함. 
// => Topics.jsx

// 3.5) Parameter(쿼리스트링) 와 useSearchParams() & useLocation() Test
//=> http://localhost:3000/contact?id=1&name=홍길동
//=> Contact.jsx

// =============================================================

import './App.css';
import Home from './pages/Home'; //확장자 생략 가능
import Contact from './pages/Contact';
import Topics from './pages/Topics';

import { NavLink, Link, Route, Routes } from "react-router-dom";

function App() {
 
  //=> App 랜더링 확인
  console.log(`** App Update !!! **`);

  return (
  <> 
    <h2>** React Router Dom Test **</h2>
    {/* 1. Router 적용전  
    <Home />
    <Topics />
    <Contact /> */}

    {/* 2. Router 적용 
    2.1) Link_url 설정 (메뉴 만들기)
    2.1.1) a_href : page 가 리로드(새로고침) 됨 ()
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/topics'>Topics</a></li>
      <li><a href='/contact'>Contact</a></li>
    </ul> 
    */}
    {/* 2.1.2) Link_to : page가 리로드(새로고침) 되지않음   
    <ul>
      <li><Link to='/'>Home_L</Link></li>
      <li><Link to='/topics'>Topics_L</Link></li>
      <li><Link to='/contact'>Contact_L</Link></li> 
    </ul> 
    */} 
    {/* 2.1.3) NavLink_to 
      - page가 리로드(새로고침) 되지않음
      - 사용자 위치를 알수 있도록 해줌   */}
    <ul>
      <li><NavLink to='/'>Home_N</NavLink></li>
      <li><NavLink to='/topics'>Topics_N</NavLink></li>
      <li><NavLink to='/contact'>Contact_N</NavLink></li>
    </ul>  

  {/* 
    2.2) Link 와 컴포넌트 연결
    => Routes, Route 컴포넌트
    => Routes 
      - 여러 Route 컴포넌트를 감싸며 현재 주소창에 입력된 url 경로와
        동일한 Route 컴포넌트를 페이지에 랜더링 함
        ( swtch - case 구문과 유사함 )
  */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/topics/*' element={<Topics />} />
       {/* => Topics 에 자식 Page 추가전 : '/topics'  
                                 추가후 : '/topics/*'    */}
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={'~~ 없는 요청 입니다. (404) ~~'} />
    </Routes>
  </> 
  ) //return
} //App
export default App
