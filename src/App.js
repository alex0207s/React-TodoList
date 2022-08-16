import { useState } from 'react';
import './App.css';

function Items(props) {
  const { todo, setTodo, activeTab } = props;

  const setFinished = (content) => {
    const targetIndex = todo.findIndex((x) => x.content == content);

    const todo2 = [...todo];
    todo2[targetIndex].finished = !todo2[targetIndex].finished;

    setTodo(todo2);
  };

  let showTodo = [];

  if (activeTab === '全部') {
    showTodo = [...todo];
  } else if (activeTab === '待完成') {
    showTodo = [...todo].filter((item) => item.finished === false);
  } else if (activeTab === '已完成') {
    showTodo = [...todo].filter((item) => item.finished === true);
  }

  return showTodo.map((todo_item, i) => (
    <li key={i}>
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          checked={todo_item.finished}
          onClick={(e) => {
            setFinished(todo_item.content);
            console.log(e.target.value);
          }}
        />
        <span>{todo_item.content}</span>
      </label>
      <a href="#">
        <i
          className="fa fa-times"
          onClick={() => {
            console.log(todo_item.content);
            setTodo(
              [...todo].filter((item) => item.content !== todo_item.content)
            );
          }}
        ></i>
      </a>
    </li>
  ));
}

function InputBox(props) {
  const { todo, setTodo } = props;
  const [newTodo, setNewTodo] = useState({ content: '', finished: false });

  const addTodo = () => {
    if (newTodo.content == '') alert('請輸入待辦事項!');

    setTodo([...todo, newTodo]);
    setNewTodo({ content: '', finished: false });
  };

  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={newTodo.content}
        onChange={(e) => {
          setNewTodo({ content: e.target.value, finished: false });
        }}
      />
      <a href="#">
        <i className="fa fa-plus" onClick={addTodo}></i>
      </a>
    </div>
  );
}

function TodoListTab(props) {
  const { tabName, activeTab, setActiveTab } = props;

  return (
    <li>
      <a
        href="#"
        type="button"
        className={tabName === activeTab ? 'active' : ''}
        onClick={() => {
          setActiveTab(tabName);
        }}
      >
        {tabName}
      </a>
    </li>
  );
}

function App() {
  const [todo, setTodo] = useState([
    {
      content: '把冰箱發霉的檸檬拿去丟',
      finished: false,
    },
    {
      content: '打電話叫媽媽匯款給我',
      finished: false,
    },
    {
      content: '整理電腦資料',
      finished: false,
    },
    {
      content: '繳電費水費瓦斯費',
      finished: false,
    },
    {
      content: '約vicky禮拜三泡溫泉',
      finished: false,
    },
    {
      content: '約 ada 禮拜四吃晚餐',
      finished: false,
    },
  ]);

  const [activeTab, setActiveTab] = useState('全部');

  const clearFinishedItem = () => {
    setTodo([...todo].filter((item) => item.finished === false));
  };

  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div className="container todoListPage vhContainer">
        <div className="todoList_Content">
          <InputBox todo={todo} setTodo={setTodo} />
          <div className="todoList_list">
            <ul className="todoList_tab">
              {['全部', '待完成', '已完成'].map((item, i) => {
                return (
                  <TodoListTab
                    tabName={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                );
              })}
            </ul>
            <div className="todoList_items">
              <ul className="todoList_item">
                <Items todo={todo} setTodo={setTodo} activeTab={activeTab} />
              </ul>
              <div className="todoList_statistics">
                <p>
                  {[...todo].filter((item) => item.finished === true).length}{' '}
                  個已完成項目
                </p>
                <a
                  href="#"
                  type="button"
                  onClick={() => {
                    clearFinishedItem();
                  }}
                >
                  清除已完成項目
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
