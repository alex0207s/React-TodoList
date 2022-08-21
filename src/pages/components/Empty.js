import '../../App.css';

function Empty() {
  return (
    <div className="empty">
      <h3>目前尚無待辦事項</h3>
      <img className="image" src={require('../../img/empty.png')} />
    </div>
  );
}

export default Empty;
