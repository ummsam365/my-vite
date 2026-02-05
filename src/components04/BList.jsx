import { NavLink } from "react-router-dom";
import { useEffect } from "react";

//=> 해민님 게시판 추가
// 	- BList.jsx, Post.jsx
// 	- Main.jsx :  Route 추가
// 	<Route path="/boardList/post/:id" element={<Post />} />

const Data = [
  { id: "1", title: "개구리와 왕자", content: "개구리가 여행하는 내용." },
  { id: "2", title: "신데렐라", content: "유리 구두 찾는 내용." },
  { id: "3", title: "백설공주", content: "사과 먹는 내용." },
  { id: "4", title: "잠자는 숲속의 공주", content: "공주가 잠자는 내용." },
  { id: "5", title: "라푼젤젤", content: "머리긴 공주 내용" },
];

export default function BList() {
  //게시판 데이터를 순회 메서드를 사용해 배열에 담아준다.
  const boardList = Data.map(({ id, title, content }) => {
    console.log(id);
    return (
      <li>
        {/* 게시글 상세 조회를 위해 id로 경로 설정 */}
        <NavLink to={`/boardList/post/${id}`}>
          {id} {title} - {content}
        </NavLink>
      </li>
    );
  }); //boardList

  //페이지가 로드 되면 게시물 데이터를 localStorage에 저장
  useEffect(() => {
    Data.map((m) => {
      localStorage.setItem(m.id, JSON.stringify(m));
    });
  }, []);

  return (
    <>
      <div className="title">
        <h2>게시판 입니다.</h2>
      </div>
      <div className="boardList">
        <ul>{boardList}</ul>
      </div>
    </>
  );
} //BList