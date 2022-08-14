import './App.css';

function App() {
  return (
    <div id="todoListPage" class="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div class="conatiner todoListPage vhContainer">
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
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>把冰箱發霉的檸檬拿去丟</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>打電話叫媽媽匯款給我</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>整理電腦資料夾</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>繳電費水費瓦斯費</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>約vicky禮拜三泡溫泉</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
                <li>
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      value="true"
                    />
                    <span>約ada禮拜四吃晚餐</span>
                  </label>
                  <a href="#">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
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
