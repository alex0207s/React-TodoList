import '../../App.css';
import { useState } from 'react';
import TodoListTab from './TodoListTab';
import TodoListItems from './TodoListItems';
import TodoListStatistics from './TodoListStatistics';

function List({ data, setData }) {
  const [activeTab, setActiveTab] = useState('全部');

  function switchTab() {
    if (activeTab === '全部') {
      return data;
    } else if (activeTab === '待完成') {
      const showData = data?.filter((item) => item.completed_at === null);
      return showData;
    } else if (activeTab === '已完成') {
      const showData = data?.filter((item) => item.completed_at !== null);
      return showData;
    }
  }

  const showData = switchTab(activeTab);

  return (
    <div className="todoList_list">
      <TodoListTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoListItems data={showData} setData={setData} />
      <TodoListStatistics
        statisticsNumber={
          data?.filter((item) => item.completed_at === null).length
        }
        setData={setData}
      />
    </div>
  );
}

export default List;
