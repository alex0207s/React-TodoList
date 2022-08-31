import '../../App.js';
import { useState } from 'react';
import { useAuth } from '../../components/AuthContext';

function InputBox({ setData }) {
  const { token } = useAuth();
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo === '') {
      alert('請輸入待辦事項!');
      return;
    }

    const _url = 'https://todoo.5xcamp.us/todos';
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(_url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization: token?.JWTToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: { content: todo },
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('新增代辦事項失敗！');
        }
        return res.json();
      })
      .then((res) => {
        setData(function (prev) {
          return [
            ...prev,
            { id: res.id, content: res.content, completed_at: null },
          ];
        });
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
