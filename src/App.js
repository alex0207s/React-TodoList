import { useState } from 'react';
import './App.css';

function Items(props) {
  const { content, finished } = props;

  return (
    <li>
      <label class="todoList_label">
        <input class="todoList_input" type="checkbox" value="true" />
        <span>{content}</span>
      </label>
      <a href="#">
        <i class="fa fa-times"></i>
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

  return (
    <div id="todoListPage" class="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div class="container todoListPage vhContainer">
        <div class="todoList_Content">
          <div class="inputBox">
            <input type="text" placeholder="請輸入待辦事項" />
            <a href="#">
              <i class="fa fa-plus"></i>
            </a>
          </div>
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
                {todo.map((item, i) => {
                  return <Items key={i} content={item.content} />;
                })}
              </ul>
              <div class="todoList_statistics">
                <p>5 個已完成項目</p>
                <a href="#">清除已完成項目</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
