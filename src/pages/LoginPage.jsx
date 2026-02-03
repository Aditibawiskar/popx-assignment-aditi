import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import '../styles/form.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', 'Marry Doe'); 
    localStorage.setItem('userEmail', email);
    navigate('/profile');
  };

  return (
    <Container>
      <div className="page-content">
        <h1>Signin to your<br />PopX account</h1>
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px', lineHeight: '1.4' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>

          <button className="btn btn-grey" type="submit">
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;