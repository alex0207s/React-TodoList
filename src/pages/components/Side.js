import '../../App.css';

function Side() {
  return (
    <div className="side">
      <a href="#">
        <img className="logoImg" src={require('../../img/logo.png')} alt="" />
      </a>
      <img
        className="d-m-n"
        src={require('../../img/cover.png')}
        alt="workImg"
      />
    </div>
  );
}

export default Side;
