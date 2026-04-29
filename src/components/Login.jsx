import { useState } from 'react'
import './AuthForm.css'

function Login({ onLoginSuccess, onSwitchToSignup, onBack }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    // Simple validation - store in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}')
    const user = users[email]

    if (!user || user.password !== password) {
      setError('Invalid email or password')
      return
    }

    // Successful login
    localStorage.setItem('currentUser', JSON.stringify({ email, password }))
    onLoginSuccess(email)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Login to your ResumeCraft account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-submit-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <button className="auth-link-btn" onClick={onSwitchToSignup}>
              Sign up here
            </button>
          </p>
        </div>

        <button className="back-to-home-btn" onClick={onBack}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default Login
