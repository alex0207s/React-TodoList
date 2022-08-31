import '../../App.css';
import Item from './Item';

function TodoListItems({ data, setData }) {
  return (
    <div className="todoList_items">
      {data?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          content={item.content}
          completed_at={item.completed_at}
          setData={setData}
        />
      ))}
    </div>
  );
}

export default TodoListItems;
