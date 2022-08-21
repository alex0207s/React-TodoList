import '../../App.css';

function TodoListStatistics({ statisticsNumber, setData }) {
  function clearFinishedItem() {
    setData(function (prev) {
      return prev.filter((item) => item.finished === false);
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
