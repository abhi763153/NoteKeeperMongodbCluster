import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Error from './components/Error/Error';



function App() {

  const [user, setUser] = useState("");


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home setUser={setUser} user={user} /> : <Login setUser={setUser} />} />
          <Route path="/register" element={< Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter >


    </>
  );
}

export default App;
