
// ** useSearchParams 와 useLocation
// => useSearchParams()
//    url 에 있는 쿼리 스트링의 값을 꺼내어 사용할 수 있도록 해줌.
// => useState 처럼 배열형태로 반환
//    const [searchParams, setSearchParams] = useSearchParams();
// => 첫번째 요소: 조회, 수정가능한 메서드를 포함하고있는 쿼리스트링 객체
// => 두번째 요소: 이 객체를 업데이트하는 함수 (즉, 새로운 쿼리스트링을 설정할수있음)  
//      
// => useLocation()
//    현재 라우터의 위치를 나타내는 location 객체를 return
//    현재 위치에 관한 정보가 필요할때 이용됨.
// => location 객체의 속성 : pathname, search(쿼리문자열), state 등

//=============================================================
// 1. image Test
import em01 from '../assets/img/emotion1.png';
import em02 from '../assets/img/emotion2.png';
import em03 from '../assets/img/emotion3.png';
import em04 from '../assets/img/emotion4.png';
import em05 from '../assets/img/emotion5.png';
//-------------------------------------
import {useLocation, useSearchParams} from 'react-router-dom';

// 2. useSearchParams 와 useLocation

//=> 배열 emotionList 작성
const emotionList = [
  {id:1, name:"완전 좋음", img:em01},
  {id:2, name:"좋음", img:em02},
  {id:3, name:"그럭 저럭", img:em03},
  {id:4, name:"나쁨", img:em04},
  {id:5, name:"끔찍함", img:em05}
];

function SelectEmotion(){
  //2.1) useSearchParams
  //=> useState 처럼 배열형태로 반환
  //=> 첫번째 요소: 조회, 수정가능한 메서드를 포함하고있는 쿼리스트링 객체
  //=> 두번째 요소: 이 객체를 업데이트하는 함수 (즉, 새로운 쿼리스트링을 설정할수있음)  
  const [searchParams, setSearchParams] = useSearchParams();
  
  //=> 전달된 Parameter 확인 : searchParams
  console.log(`** 쿼리스트링: id=${searchParams.get('id')}, name=${searchParams.get('name')}`);
  //=> 전달된 Parameter 수정 : setSearchParams
  /*  - 수정 즉시, url 이 변경되고 리랜더링 됨 
  setSearchParams({
    id:'3',
    name:'바나나'
  });
  */
  
  //=> useLocation 확인
  const location = useLocation();
  console.log(`** useLocation: location=${location}`);
  console.log(`** useLocation: location.pathname=${location.pathname}`);
  console.log(`** useLocation: location.search=${location.search}`);

  //=> id(번호) 를 이용해서 Image Select 하기
  //  - 검색기능 을 위해 자료를 배열에 객체형태로 담아줌 
  //  - 배열 emotionList 작성 (전역으로..)
  //  - id 와 일치하는 Data 찾기, id 입력여부, 존재여부 등 전달 값의 확인

  //=> selected_item 기본값은  Not_Found 로 정의
  let selected_item = { 
    name:'~~ Sorry Not Found ~~',
    img: em05
  }  
  const searchId = searchParams.get('id');

  //=> id 입력여부, 존재여부 를 구분
  if ( parseInt(searchId)>0 ) { //id 는 존재 
    const find_item = emotionList.find(({id})=> id===parseInt(searchId) );
    if (find_item) selected_item = find_item ;
  }else {  
    //=> id가 존재하지 않는경우
    selected_item.name='id (번호)를 선택하지 않았습니다 ~~';
    selected_item.img=null;
  }

return (
<>
    <h3>** {searchParams.get('name')} 님의 기분상태 **</h3>
    <img alt='임시Image' src={selected_item.img} />
    <p>{selected_item.name}</p>
</>
)}//SelectEmotion
//-------------------------------------
export default function Contact() {
    console.log(`** Contact Update !!! **`);
return (
  <>
    <h3>*** Contact, EmotionList & Image Test ***</h3>
     {/* ** JSX 에서 image 경로설정 ** 
        1) img 폴더가 public 하위에 존재하는경우
        -> 리액트 프로젝트의 public 은 root 디렉토리이므로 간편한 지정가능
          <img alt="감정1" src="img/emotion1.png" width={100} height={100}/>

        2) img 폴더가 src 하위에 존재하는경우
        2.1) import (위 import 구문 참고, 감정2, 4, 5)
        2.2) require (감정3)
          -> 문서 어디서나 파일을 불러올 수 있으며 이를 사용하면
             inline으로 src의 이미지 파일 경로를 바로 지정할 수 있음
          -> CRA, Webpack 에서만 가능함. (vite 에서는 지원하지않음)  
      */}
    <img alt="감정1_p" src="img/emotion1.png" width={100} height={100}/> 
    <img alt="감정2_2.1" src={em02} width={100} height={100}/>
    {/* <img alt="감정3" src={require('../assets/img/emotion3.png')} width={100} height={100}/> */}
    <img alt="감정3_2.1" src={em03} width={100} height={100}/>
    <img alt="감정4_2.1" src={em04} width={100} height={100}/>
    <img alt="감정5_2.1" src={em05} width={100} height={100}/>

    <p>~~ 당신의 이름과 기분상태 번호를 주소창에 쿼리스트링으로 작성해주세요 ~~</p>
    <p>예) http://localhost:5173/contact?name=홍길동&id=1</p>
    <p> 요청 결과는 아래 컴포넌트에 출력됩니다.</p>
    <SelectEmotion />
  </>
)} //Contact