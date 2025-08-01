import { useState } from 'react'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Login/Register'
import Front from './components/front/front'

import Home from './components/Home';
function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false); // 🧠 Controla acceso
  const [userInfo, setUserInfo] = useState(null);
   return (
  <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuthenticated}setUser={setUserInfo} />} />
      
         <Route path='/register' element={<Register  setAuth={setIsAuthenticated} setUser={setUserInfo} />} />
        <Route path='/home' element={isAuthenticated ? <Home   user={userInfo}/> : <Navigate to="/" />}
        />
     <Route path="/profile" element={<Front/>}/>
      </Routes>
    </Router>
  )
}

export default App
