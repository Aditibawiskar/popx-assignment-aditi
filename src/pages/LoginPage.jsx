import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import '../styles/form.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if both fields have text
  const isFormFilled = email.length > 0 && password.length > 0;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormFilled) {
        localStorage.setItem('userName', 'Marry Doe'); 
        localStorage.setItem('userEmail', email);
        navigate('/profile');
    }
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
            <input 
              type="email" 
              placeholder="Enter email address" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          {/* DYNAMIC BUTTON LOGIC:
             If 'isFormFilled' is true -> use 'btn-primary' (Purple)
             If 'isFormFilled' is false -> use 'btn-grey' (Grey)
          */}
          <button 
            className={`btn ${isFormFilled ? 'btn-primary' : 'btn-grey'}`} 
            type="submit"
            disabled={!isFormFilled} // Optional: Prevents clicking if empty
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;