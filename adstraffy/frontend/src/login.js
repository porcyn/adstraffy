import React from "react";
import './style.css';
import logogoogle from './assets/logogoogle.png'; // โลโก้ Google
import lgtraffy from './assets/lgtraffy.png'; // โลโก้ ADS TRAFFY

function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google"; // เรียก Google OAuth
  };

  return (
    <div className="login">
      <div className="container">
        <div className="box">
          <img src={lgtraffy} alt="ADS TRAFFY Logo" className="lg-traffy-logo" />
          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img src={logogoogle} alt="Google Logo" className="google-logo" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>

  );
}

export default Login;
