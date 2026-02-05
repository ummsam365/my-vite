import { Route, Routes } from "react-router-dom";

import MainDefault from './MainPage';
import Login from './Login';
import Join from './Join';
import BList from "./BList";
import MList from "./MList";
import MyInfo from "./MyInfo";

export default function Main({onLoginSubmit}) {
return(
  <>
    <hr />
    <Routes>
      <Route path="/" element={<MainDefault />} />
      <Route path="/my-vite" element={<MainDefault />} />
      <Route path="/login" element={<Login onLoginSubmit={onLoginSubmit}/>} />
      <Route path="/join" element={<Join />} />
      <Route path="/boardList" element={<BList />} />
      <Route path="/memberList" element={<MList />} />
      <Route path="/myInfo" element={<MyInfo />} />
    </Routes>
  </>
)}