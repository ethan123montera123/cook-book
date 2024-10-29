import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './AuthPage.css'; // Optional: for styling
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header title="Cook Book - Login" />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
