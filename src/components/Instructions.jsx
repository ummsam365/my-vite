//** Recipe02 에서 사용함

// ** 조리과정
//=> 화살표 함수로 정의 : {}, return 생략
//=> const 앞에는 export default 사용불가
//   ( export 는 가능 )
const Instructions = ({name, steps}) =>  
  <section className="instructions">
    <h3>** {name} 조리방법 **</h3>
    {steps.map((step, i) => 
          <p key={i}>{(i+1)+'. '+step}</p>
    )}
  </section> //Instructions-end

export default Instructions