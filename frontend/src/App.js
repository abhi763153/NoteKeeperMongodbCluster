import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import Error from './components/Error/Error';



function App() {

  const [user, setUser] = useState("Abhishek");


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter >


    </>
  );
}

export default App;
