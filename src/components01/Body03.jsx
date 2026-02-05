// ** State : 객체형 상태변수
//=> 여러개의 사용자입력 (회원가입 등등) 을 객체화 & 상태변수로 관리 

/* 1) 개별적 관리
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [info, setInfo] = useState('');

  const nameChange = (e) => { setName(e.target.value) };
  const genderChange = (e) => { setGender(e.target.value) };
  const birthChange = (e) => { setBirth(e.target.value) };
  const infoChange = (e) => { setInfo(e.target.value) };

   2) 객체화 관리
   => State (상태) 변수를 객체형으로 생성
   => 이벤트 핸들러 1개로 통일
   => member 객체 (일반변수 정의) 
   let member = {
        name:'홍길동',
        gender: '남성',
        birth: '20200202',
        info: '희망사항은 풀스택 개발자 입니다'
   }
*/

import { useState } from "react";

export default function Body() {
// ** 객체 상태변수 정의    
const [member, setMember] = useState({
        name:'', gender: '', birth: '', info: ''
});
//=> 상태변수로 정의된 객체를 구조분해 (사용편리)
let {name, gender, birth, info} = member;

const memberChange = (e) => {
    console.log(`** memberChange: 수정대상=${e.target.name}`);
    console.log(`** memberChange: 수정 값=${e.target.value}`);
    setMember({
        ...member,
        [e.target.name]:e.target.value,
        //e.target.name:e.target.value, 
        // -> 변수를 바로 표기하는것은 오류, 객체 괄호표기법 [] 를 사용
        //test:'없는 속성'
    }); 
    //=> 객체 member 의 해당하는 속성의 값만 수정하기 위해서는 펼침
    //=> 객체 속성 추가 (재정의 되듯이 새로운 값이 할당됨)
    //=> setMember 에 새로운 객체 전달
    //    스프레드로 기존객체 member 값 나열
    //    객체 괄호표기법으로 name 속성을 key로 e.target.value 를 value 로 저장
    //    (객체 괄호표기법: 속성명을 괄호('[]')로 감싸서 표현
    //=> 없는속성 추가 Test
    //   member 에  test:'없는 속성' 추가후
    //console.log(`** 없는 속성 추가 member.test=${member.test}`);

    //=> { ...객체, 속성: 값 } 패턴의 동작 방식
    //   이 패턴은 객체를 업데이트할 때 기존 데이터를 유지하면서
    //   특정 속성만 변경하는 방법입니다.
  
}//memberChange

return (
<>
    <h2>** Body: input 객체화 관리 **</h2>
    <div>
      <input name="name" value={name} onChange={memberChange} placeholder="이름입력"/>    
    </div>
    <div>
      <select name="gender" value={gender} onChange={memberChange}>
        <option>여성_F</option>
        <option>남성_M</option>
      </select>  
    </div>
    <div>
      <input type="date" name="birth" value={birth} onChange={memberChange}/>
    </div>
    <div>
      <textarea name="info" value={info} onChange={memberChange}/>    
    </div>
</>
)}//Body