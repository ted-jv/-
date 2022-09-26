import { Routes, Route } from 'react-router-dom';
import Post from './page/Post';
import Join from './page/SignUp/SignUp';
import Login from './page/SignIn/SignIn';
import PostBoxDetail from './page/post_box_detail';
import Header from './components/Header';
import Home from './page/Home/Home';

function App() {
  return (
    <>
      <Header />
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
