import './Navbar.css'

function Navbar({ isLoggedIn, userEmail, onLogout, onLoginClick, onSignupClick, onLogoClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
          <span className="logo-icon">📄</span>
          <span className="logo-text">ResumeCraft</span>
        </div>

        <div className="navbar-links">
          {isLoggedIn ? (
            <>
              <div className="user-info">
                <span className="user-email">{userEmail}</span>
              </div>
              <button className="navbar-btn logout-btn" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="navbar-btn login-btn" onClick={onLoginClick}>
                Login
              </button>
              <button className="navbar-btn signup-btn" onClick={onSignupClick}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
