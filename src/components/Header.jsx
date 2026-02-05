//** 컴포넌트
//=> 1 컴포넌트 1 화일(문서)
//=> 그러므로 대부분 export default 사용함. 

/* 부모로부터 객체(Data) 전달 받기
1) 객체로 (App 의 보내는 방법1로  보낸경우)
=> (props) : props={ 'bestDress'=bestDress } 
=> 속성 접근 방법 : props.bestDress.color 

2) { bestDress } (App 의 보내는 방법1로  보낸경우)
=> bestDress = bestDress_전달된객체)
=> 속성 접근 방법 : bestDress.color 

3) 구조분해 (App 의 보내는 방법2로  보낸경우)
=> {color, style, price, size}
=> 속성 접근 방법 : color 

4) (props)  (App 의 보내는 방법2로  보낸경우)
=> (props) 
=> 속성 접근 방법 : props.color 

*/

export default function Header({color, style, price, size}) {
    return (
    <header>
        <h2>** Header **</h2>
        <p> 안녕하세요 ~~</p>
        <p> 금주의 인기 상품 ~~</p>
        <b>color:{color}, style:{style}, price:{price}<br></br>
        size 는 {size.length} 종류가 있습니다.</b>
        <hr></hr>
    </header>
    );//return
};//Header