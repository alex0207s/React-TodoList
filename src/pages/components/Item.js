import '../../App.css';

function Item({ id, content, finished, setData }) {
  function setFinished() {
    setData(function (prev) {
      console.log('checkbox click');
      const targetIndex = prev.findIndex((x) => x.id == id);

      const updateTodo = [...prev];
      updateTodo[targetIndex].finished = !updateTodo[targetIndex].finished;
      console.log(updateTodo);
      return updateTodo;
    });
  }

  function deleteItem() {
    // submittingStatus.current = true
    setData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="todoList_item">
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          checked={finished}
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
