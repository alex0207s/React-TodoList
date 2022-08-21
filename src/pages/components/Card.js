import '../../App.css';

function Card({ children }) {
  return (
    <div className="container todoListPage vhContainer">
      <div className="todoList_Content">{children}</div>
    </div>
  );
}

export default Card;
