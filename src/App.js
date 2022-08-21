import './App.css';
import { useState } from 'react';
import { v4 } from 'uuid';
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
      <Home data={data} setData={setData}></Home>
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </div>
  );
}

export default App;
