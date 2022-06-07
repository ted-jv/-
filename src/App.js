import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/Post";
import Join from "./page/Join";
import Login from "./page/Login";
import PostBoxDetail from "./page/post_box_detail";
import Navbar_1 from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar_1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostBoxDetail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
