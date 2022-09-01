import '../../App.css';
import { useAuth } from '../../components/AuthContext';

function Item({ id, content, completed_at, setData }) {
  const { token } = useAuth();

  function setFinished() {
    const _url = 'https://todoo.5xcamp.us/todos/' + id + '/toggle';

    fetch(_url, {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        authorization: token?.JWTToken,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('執行未授權的操作');
        }

        return res.json();
      })
      .then((res) => {
        setData(function (prev) {
          const targetIndex = prev.findIndex((x) => x.id == res.id);

          const updateTodo = [...prev];

          if (updateTodo[targetIndex].completed_at !== null)
            updateTodo[targetIndex].completed_at = null;
          else updateTodo[targetIndex].completed_at = res.completed_at;
          console.log(updateTodo);
          return updateTodo;
        });
        return res;
      });
  }

  function deleteItem() {
    const _url = 'https://todoo.5xcamp.us/todos/' + id;

    fetch(_url, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        authorization: token?.JWTToken,
      },
    }).then((res) => {
      if (res.status === 401) throw new Error('執行未授權的操作');

      setData(function (prev) {
        return prev.filter((item) => item.id !== id);
      });
    });
  }

  return (
    <div className="todoList_item">
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          checked={completed_at === null ? false : true}
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

export default Item;
