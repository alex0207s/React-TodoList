import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';

function Items(props) {
  const { todo, setTodo, activeTab } = props;

  const setFinished = (id) => {
    const targetIndex = todo.findIndex((x) => x.id == id);

    const updateTodo = [...todo];
    updateTodo[targetIndex].finished = !updateTodo[targetIndex].finished;

    setTodo(updateTodo);
  };

  const removeTodoItem = (id) => {
    setTodo(todo.filter((item) => item.id != id));
  };

  let showTodo = [];

  if (activeTab === '全部') {
    showTodo = [...todo];
  } else if (activeTab === '待完成') {
    showTodo = [...todo].filter((item) => item.finished === false);
  } else if (activeTab === '已完成') {
    showTodo = [...todo].filter((item) => item.finished === true);
  }

  return showTodo.map((todo_item) => (
    <li key={todo_item.id}>
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          checked={todo_item.finished}
          onChange={() => {
            setFinished(todo_item.id);
          }}
        />
        <span>{todo_item.content}</span>
      </label>
      <a href="#" onClick={() => removeTodoItem(todo_item.id)}>
        <i className="fa fa-times"></i>
      </a>
    </li>
  ));
}

function InputBox(props) {
  const { todo, setTodo } = props;

  const addTodo = (e) => {
    if (e.target.input.value == '') {
      alert('請輸入待辦事項!');
      return;
    }

    setTodo([
      ...todo,
      { id: v4(), content: e.target.input.value, finished: false },
    ]);

    e.target.input.value = '';
  };

  return (
    <form className="inputBox" onSubmit={addTodo}>
      <input name="input" type="text" placeholder="請輸入待辦事項" />
      <button type="submit">
        <i className="fa fa-plus"></i>
      </button>
    </form>
  );
}

function TodoListTab(props) {
  const { activeTab, setActiveTab } = props;

  return (
    <ul className="todoList_tab">
      {['全部', '待完成', '已完成'].map((item, i) => {
        return (
          <li key={i}>
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
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  const [todo, setTodo] = useState([
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
            <TodoListTab activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="todoList_items">
              <ul className="todoList_item">
                <Items todo={todo} setTodo={setTodo} activeTab={activeTab} />
              </ul>
              <div className="todoList_statistics">
                <p>
                  {todo.filter((item) => item.finished === true).length}{' '}
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
