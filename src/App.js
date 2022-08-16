import { useState } from 'react';
import './App.css';

function Items(props) {
  const { todo, setTodo } = props;

  const setFinished = (content) => {
    const targetIndex = todo.findIndex((x) => x.content == content);

    const todo2 = [...todo];
    todo2[targetIndex].finished = !todo2[targetIndex].finished;

    setTodo(todo2);
  };

  return todo.map((todo_item, i) => (
    <li key={i}>
      <label class="todoList_label">
        <input
          class="todoList_input"
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
          class="fa fa-times"
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

  return (
    <div class="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        onChange={(e) => {
          setNewTodo({ content: e.target.value, finished: false });
        }}
      />
      <a href="#">
        <i class="fa fa-plus" onClick={() => setTodo([...todo, newTodo])}></i>
      </a>
    </div>
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

  const clearFinishedItem = () => {
    setTodo([...todo].filter((item) => item.finished === false));
    // setTodo([...todo].slice(1));
  };

  return (
    <div id="todoListPage" class="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div class="container todoListPage vhContainer">
        <div class="todoList_Content">
          <InputBox todo={todo} setTodo={setTodo} />
          <div class="todoList_list">
            <ul class="todoList_tab">
              <li>
                <a href="#" class="active">
                  全部
                </a>
              </li>
              <li>
                <a href="#">待完成</a>
              </li>
              <li>
                <a href="#">已完成</a>
              </li>
            </ul>
            <div class="todoList_items">
              <ul class="todoList_item">
                <Items todo={todo} setTodo={setTodo} />
              </ul>
              <div class="todoList_statistics">
                <p>{todo.length} 個已完成項目</p>
                <a
                  href="#"
                  type="button"
                  onClick={() => {
                    clearFinishedItem();
                    console.log(todo);
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
