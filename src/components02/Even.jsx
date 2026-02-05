// ** 과제
//=> count 값이 짝수 일때만 호출되어 출력후
//=> 기능추가: 사라질때(언마운트 될때) 콘솔메시지 출력

import { useEffect } from "react"

export default function Even() {
    //=> 언마운트 제어, 콘솔메시지 출력
    useEffect(()=>{
        return ()=>{ console.log(`** Even 언마운트_Bye Bye !!! **`) }
    });

    console.log(`** Even Update !!! **`);
return (
    <div><h3>짝수 입니다.</h3></div>
)}