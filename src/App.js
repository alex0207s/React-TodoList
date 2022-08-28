import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div id="todoListPage" className="bg-half">
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
