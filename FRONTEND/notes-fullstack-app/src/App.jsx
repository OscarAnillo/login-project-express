import { useState } from 'react';
import { NavBar } from './Components/Nav-bar';

import { Route, Routes} from 'react-router-dom'

/* Pages */
import { HomePage } from './Pages/Home'
import { LoginPage } from './Pages/Login'
import { RegisterPage} from './Pages/Register'

import './App.css'

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
