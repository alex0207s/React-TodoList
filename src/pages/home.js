import '../App.css';
import Card from './components/Card';
import InputBox from './components/InputBox';
import Empty from './components/Empty';
import List from './components/List';

function Home({ data, setData }) {
  return (
    <>
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>

      <Card>
        <InputBox setData={setData} />
        {data.length === 0 ? <Empty /> : <List data={data} setData={setData} />}
      </Card>
    </>
  );
}

export default Home;
