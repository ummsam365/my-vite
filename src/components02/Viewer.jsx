//** Viewer
//=> h2 크기로 숫자출력
//=> 출력할 숫자는 부모컴포넌트로 부터 전달받음
export default function Viewer({countArg}) {
    console.log(`** Viewer Update !!! **`);
    return (
    <>
        <h2>count = {countArg}</h2>
    </>
)}
