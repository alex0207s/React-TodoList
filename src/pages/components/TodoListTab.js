import '../../App.css';

function TodoListTab({ activeTab, setActiveTab }) {
  const tabName = ['全部', '待完成', '已完成'];

  return (
    <div className="todoList_tab">
      {tabName.map((item, i) => (
        <div key={i}>
          <a
            href="#"
            type="button"
            className={item === activeTab ? 'active' : ''}
            onClick={() => {
              setActiveTab(item);
            }}
          >
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}

export default TodoListTab;
