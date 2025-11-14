import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import LandingPage from './pages/landing'
import Authentication from'./pages/authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from "./pages/videoMeet";
function App() {

  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/auth" element={<Authentication/>}/> */}
          <Route path="/auth" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Authentication isSignIn={true} />} />
          <Route path="/auth/register" element={<Authentication isSignIn={false} />} />
          
          <Route path='/meet' element={<VideoMeet/>}></Route>
       </Routes>
       </AuthProvider>
      </Router>
       
    </>
  )
}

export default App
