import '../App.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
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
        authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.todos);
      });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
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
