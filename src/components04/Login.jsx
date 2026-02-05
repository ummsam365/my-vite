
import '../styles/Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({onLoginSubmit}) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <div className="body_container">
        <p className="pageTitle">** 로그인 **</p>
        <div id="contents">
          <form onSubmit={(e)=>{ e.preventDefault(); 
                                 onLoginSubmit(userId, userName)}}>
             <input type='text' name='id' placeholder='아이디, 4글자이상' 
              size={20} value={userId}
              onChange={(e) => setUserId(e.target.value) }
             /><br/> 
             <input type='text' name='userName' placeholder='User_Name' 
              size={20} value={userName}
              onChange={(e) => setUserName(e.target.value) }
             /><br/>
            <input type='submit' value="로그인"  
                    className='loginBtn' style={{width:175}} />
            <br/><br/>        
          </form>
          <span>
            <span>아직 회원이 아니신가요?</span>&nbsp;&nbsp;
            <Link to='/join' >    
              <strong>회원가입</strong>
            </Link>
          </span>
        </div> 
    </div>
  );
}