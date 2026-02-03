import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import '../styles/form.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
     
      <div className="page-content" style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
      
      }}>
        
        {/* Text Section */}
        <div style={{ marginBottom: '20px' }}>
          <h1>Welcome to PopX</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons Section */}
        <div>
          <button onClick={() => navigate('/signup')} className="btn btn-primary">
              Create Account
          </button>
          
          <button onClick={() => navigate('/login')} className="btn btn-secondary">
              Already Registered? Login
          </button>
        </div>

      </div>
    </Container>
  );
};

export default LandingPage;