import '../../App.js';
import { useState } from 'react';
import { v4 } from 'uuid';

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

export default InputBox;
