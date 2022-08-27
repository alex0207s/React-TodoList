import './App.css';
import { v4 } from 'uuid';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';

function App() {
  const [data, setData] = useState([
    {
      id: v4(),
      content: '把冰箱發霉的檸檬拿去丟',
      finished: false,
    },
    {
      id: v4(),
      content: '打電話叫媽媽匯款給我',
      finished: false,
    },
    {
      id: v4(),
      content: '整理電腦資料',
      finished: false,
    },
    {
      id: v4(),
      content: '繳電費水費瓦斯費',
      finished: false,
    },
    {
      id: v4(),
      content: '約vicky禮拜三泡溫泉',
      finished: false,
    },
    {
      id: v4(),
      content: '約 ada 禮拜四吃晚餐',
      finished: false,
    },
  ]);

  return (
    <div id="todoListPage" className="bg-half">
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
