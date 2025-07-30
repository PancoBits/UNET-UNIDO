import { useState } from 'react'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(false); // 🧠 Controla acceso
  const [userInfo, setUserInfo] = useState(null);
   return (
  <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuthenticated}setUser={setUserInfo} />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home user={userInfo}/> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
