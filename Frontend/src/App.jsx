import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'


const App = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log("CONTEXT DATA",authUser)

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={ authUser ?  <Courses/> : <Navigate to='/signup' /> } />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Toaster />

    </>

  )
}

export default App