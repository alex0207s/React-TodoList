import '../../App.css';
import { useAuth } from '../../components/AuthContext';

function TodoListStatistics({ statisticsNumber, setData }) {
  const { token } = useAuth();

  function deleteItem(id) {
    const _url = 'https://todoo.5xcamp.us/todos/' + id;

    fetch(_url, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        authorization: token?.JWTToken,
      },
    }).then((res) => {
      if (res.status === 401) throw new Error('執行未授權的操作');

      return res.json();
    });
  }

  function clearFinishedItem() {
    setData(function (prev) {
      prev.forEach(function (item) {
        if (item.completed_at !== null) deleteItem(item.id);
      });
      return prev.filter((item) => item.completed_at === null);
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

export default TodoListStatistics;
