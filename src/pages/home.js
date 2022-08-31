import '../App.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import { Link } from 'react-router-dom';
import Card from './components/Card';
import InputBox from './components/InputBox';
import Empty from './components/Empty';
import List from './components/List';

function Home() {
  const { token } = useAuth();
  const [data, setData] = useState([]);

  const getTodo = () => {
    const _url = 'https://todoo.5xcamp.us/todos';
    fetch(_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token?.JWTToken,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.todos);
        setData(res.todos);
      });
  };

  function logout() {
    const _url = 'https://todoo.5xcamp.us/users/sign_out';
    fetch(_url, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        authorization: token?.JWTToken,
      },
    }).then((res) => {
      if (res.status === 401) {
        throw new Error('登出失敗！');
      }
      console.log('登出成功!');
      return res.json();
    });
  }

  useEffect(() => {
    console.log('useEffect is invoked!');
    getTodo();
  }, []);

  return (
    <>
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
        <ul>
          <li className="todo_sm">
            <a href="#">
              <span>{token?.name}</span>
            </a>
          </li>
          <li>
            <Link to="/login" onClick={logout}>
              登出
            </Link>
            {/* <a href="#loginPage">登出</a> */}
          </li>
        </ul>
      </nav>

      <Card>
        <InputBox setData={setData} />
        {data?.length === 0 ? (
          <Empty />
        ) : (
          <List data={data} setData={setData} />
        )}
      </Card>
    </>
  );
}

export default Home;
