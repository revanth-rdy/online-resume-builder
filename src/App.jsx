import { useState, useEffect } from 'react'
import Landing from './components/Landing'
import Builder from './components/Builder'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  // Check if user is already logged in on mount
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      const { email } = JSON.parse(currentUser)
      setIsLoggedIn(true)
      setUserEmail(email)
    }
  }, [])

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
    setCurrentPage('landing')
  }

  const handleSignupSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
    setCurrentPage('landing')
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setIsLoggedIn(false)
    setUserEmail('')
    setCurrentPage('landing')
  }

  const handleBuilderAccess = () => {
    if (isLoggedIn) {
      setCurrentPage('builder')
    } else {
      setCurrentPage('login')
    }
  }

  return (
    <div className="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
        onLoginClick={() => setCurrentPage('login')}
        onSignupClick={() => setCurrentPage('signup')}
        onLogoClick={() => setCurrentPage('landing')}
      />

      <main className="app-main">
        {currentPage === 'landing' && (
          <Landing onGetStarted={handleBuilderAccess} />
        )}
        {currentPage === 'builder' && isLoggedIn && (
          <Builder onBackToHome={() => setCurrentPage('landing')} />
        )}
        {currentPage === 'login' && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onSwitchToSignup={() => setCurrentPage('signup')}
            onBack={() => setCurrentPage('landing')}
          />
        )}
        {currentPage === 'signup' && (
          <Signup
            onSignupSuccess={handleSignupSuccess}
            onSwitchToLogin={() => setCurrentPage('login')}
            onBack={() => setCurrentPage('landing')}
          />
        )}
      </main>
    </div>
  )
}

export default App
