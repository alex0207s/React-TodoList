import '../../App.js';
import { useState } from 'react';
import { useAuth } from '../../components/AuthContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function InputBox({ setData }) {
  const { token } = useAuth();
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo === '') {
      return MySwal.fire({
        title: '請先輸入代辦事項!',
      });
    } else if (todo.trim() === '') {
      return MySwal.fire({
        title: '代辦事項有誤!',
        text: '請勿輸入全空白的文字',
      });
    }

    const _url = 'https://todoo.5xcamp.us/todos';

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
