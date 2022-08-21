import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import Login from './pages/login';
import SignUp from './pages/signup';

function Item({ id, content, finished, setData }) {
  function setFinished() {
    setData(function (prev) {
      const targetIndex = prev.findIndex((x) => x.id == id);

      const updateTodo = [...prev];
      updateTodo[targetIndex].finished = !updateTodo[targetIndex].finished;

      return updateTodo;
    });
  }

  function deleteItem() {
    // submittingStatus.current = true
    setData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="todoList_item">
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          checked={finished}
          onChange={setFinished}
        />
        <span>{content}</span>
      </label>
      <a href="#" onClick={deleteItem}>
        <i className="fa fa-times"></i>
      </a>
    </div>
  );
}

function TodoListItems({ data, setData }) {
  return (
    <div className="todoList_items">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          content={item.content}
          finished={item.finished}
          setData={setData}
        />
      ))}
    </div>
  );
}

function InputBox({ setData }) {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo === '') {
      alert('請輸入待辦事項!');
      return;
    }

    setData(function (prev) {
      return [...prev, { id: v4(), content: todo, finished: false }];
    });

    setTodo(() => {
      return '';
    });
  };

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}

function TodoListTab({ activeTab, setActiveTab }) {
  const tabName = ['全部', '待完成', '已完成'];

  return (
    <div className="todoList_tab">
      {tabName.map((item, i) => (
        <div key={i}>
          <a
            href="#"
            type="button"
            className={item === activeTab ? 'active' : ''}
            onClick={() => {
              setActiveTab(item);
            }}
          >
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}

function TodoListStatistics({ statisticsNumber, setData }) {
  function clearFinishedItem() {
    setData(function (prev) {
      return prev.filter((item) => item.finished === false);
    });
  }

  return (
    <div className="todoList_statistics">
      <p>{statisticsNumber} 個待完成項目</p>
      <a href="#" type="button" onClick={clearFinishedItem}>
        清除已完成項目
      </a>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="container todoListPage vhContainer">
      <div className="todoList_Content">{children}</div>
    </div>
  );
}

function List({ data, setData }) {
  const [activeTab, setActiveTab] = useState('全部');

  function switchTab() {
    if (activeTab === '全部') {
      return data;
    } else if (activeTab === '待完成') {
      const showData = data.filter((item) => item.finished === false);
      return showData;
    } else if (activeTab === '已完成') {
      const showData = data.filter((item) => item.finished === true);
      return showData;
    }
  }

  const showData = switchTab(activeTab);

  return (
    <div className="todoList_list">
      <TodoListTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoListItems data={showData} setData={setData} />
      <TodoListStatistics
        statisticsNumber={data.filter((item) => item.finished === false).length}
        setData={setData}
      />
    </div>
  );
}

function Empty() {
  return (
    <div className="empty">
      <h3>目前尚無待辦事項</h3>
      <img className="image" src={require('./img/empty.png')} />
    </div>
  );
}

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
      {/* <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>

      <Card>
        <InputBox setData={setData} />
        {data.length === 0 ? <Empty /> : <List data={data} setData={setData} />}
      </Card> */}
      {/* <Login></Login> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;
