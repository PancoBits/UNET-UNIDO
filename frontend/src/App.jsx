import { useState } from 'react'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Login/Register'
import UserPage from './components/UserPage';
function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false); // 🧠 Controla acceso
  const [userInfo, setUserInfo] = useState(null);
   return (
  <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuthenticated}setUser={setUserInfo} />} />
        <Route
          path="/UserPage"
          element={isAuthenticated ? <UserPage user={userInfo}/> : <Navigate to="/" />}
        />
      <Route path='/register' element={<Register setAuth={setIsAuthenticated} setUser={setUserInfo} />} />

     
      </Routes>
    </Router>
  )
}

export default App
