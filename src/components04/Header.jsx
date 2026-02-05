
import '../styles/Header.css';
import { NavLink, useNavigate } from "react-router-dom";

// ** Header
//=> 메뉴 : 로그인 상태에 따라서 해당하는 메뉴가 표시되도록
//=> 필요한 값: 로그인 상태값(isLogin), userName

// => 인자값은 단계별로 적용
//    {isLogin,userName,userId,onLogout,onRequestPage} 
export default function Header({isLogin,userName,userId,onLogout,onRequestPage}) {
  //=> 메뉴: 마이페이지 의 onClick 에서 사용함.
  //   - state 로 Data 전송하기 위함 
  const navigate = useNavigate();

  return (
    <div className="headerTop">
      <h3> React Router Test </h3>
      <div className="headerLeft">
        <a href="https://www.naver.com/">Naver</a>&nbsp;&nbsp;
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="serviceTab">
        <ul className="serviceTabList">
          {/* JSX 에서는 if 사용불가 이므로 삼항식으로 구현함 
            isLogin ? (....) : (.....)
          */}
          { isLogin ? (<>
            {/* 로그인 후 : useNavigate() 활용 */}
              <li>{userId}, {userName} 님</li>
              <li><NavLink to='/' onClick={onLogout}>로그아웃</NavLink></li>

            {/* useNavigate()  활용 
                => 프로그래밍 방식으로 라우팅을 제어 (=코드로 조작) 
                => onClick 이벤트핸들러로 구현 
                => onRequestPage('목적지_path') : App에 작성후 Props로 받아서 사용

                => 마이페이지
                  - id, userName 을 전달해야하므로 onRequestPage 를 사용하지 않고,
                    이벤트핸들러를 직접 작성함
                  - useNavigate() 적용
                    navigate(url, {state:{id:'아이디', userName:'이름'}})  
                  - onRequestPage('/myInfo') : Data 전송못함  
            */}
              <li><span className='textlink' onClick={()=>{
                                              navigate('/myInfo', {state:{id:userId, userName:userName}}) 
                                              //=> MyInfo (useLocation() 으로 꺼내어 사용) 에서 확인 (쿼리스트링과 비교)
                                            }}>마이페이지</span></li>

              <li><span className='textlink' onClick={()=>{onRequestPage('/memberList')}}>회원목록</span></li> 
              <li><span className='textlink' onClick={()=>{onRequestPage('/boardList')}}>게시판</span></li>
            </>) : (<>
             {/* 로그인 전 */}
              <li><NavLink to='/login'>로그인</NavLink></li>
              <li><NavLink to='/join'>회원가입</NavLink></li>
              <li><NavLink to='/boardList'>게시판</NavLink></li> 
            </>) }
        </ul>
      </div>
      {/* serviceTab */}
    </div> //headerTop
  ); //return
}