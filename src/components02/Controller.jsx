//** Controller
//=> 버튼이 6개 있는 컴포넌트
//  ( -1, -10, -100, +100, +10, +1)
//=> 부모 컴포넌트에 있는 count 의 값이 변경되도록함 

// ** Ver01
//=> 함수도 Props 로 전달가능
//=> 상태값을 모두 Props 로 전달 :  {setCount, count}
//=> 각 버튼의 이벤트 핸들러를 작성
//=> App 에 정의된 상태변수 count 값을 Child 컴포넌트에서 변경
//   그러므로 setCount, count 필요함, 부모로부터 받음   
/*
export default function Controller({setCount, count}) {
console.log(`** Controller Update !!! **`);
return (
    <div>
        <button onClick={()=>{ setCount(count-1) }}>-1</button>
        <button onClick={()=>{ setCount(count-10) }}>-10</button>
        <button onClick={()=>{ setCount(count-100) }}>-100</button>
        <button onClick={()=>{ setCount(count+100) }}>+100</button>
        <button onClick={()=>{ setCount(count+10) }}>+10</button>
        <button onClick={()=>{ setCount(count+1) }}>+1</button>
    </div>
)}
*/
// ** Ver02
//=> Ver01 을 하나의 이벤트 핸들러로 처리
//   App 에 정의해놓은 onChangeCount 를 활용
//=> onChangeCount 는 부모에 정의된 상태변수를 사용하므로
//   부모에 정의하고 내려받아 사용하는것이 편리함   

export default function Controller({onChangeCount}) {
console.log(`** Controller Update !!! **`);
return (
    <div>
        <button onClick={()=>{ onChangeCount(-1) }}>-1</button>
        <button onClick={()=>{ onChangeCount(-10) }}>-10</button>
        <button onClick={()=>{ onChangeCount(-100) }}>-100</button>
        <button onClick={()=>{ onChangeCount(+100) }}>+100</button>
        <button onClick={()=>{ onChangeCount(+10) }}>+10</button>
        <button onClick={()=>{ onChangeCount(+1) }}>+1</button>
        {/* <button onClick={onChangeCount}>+1</button>
            => 콜백함수 방식으로 하면 인자 전달 불가능      */}
    </div>
)}   