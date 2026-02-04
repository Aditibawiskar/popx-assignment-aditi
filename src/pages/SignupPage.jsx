import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import '../styles/form.css'; 

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', company: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();
    // Save data
    localStorage.setItem('userName', formData.name || 'Marry Doe');
    localStorage.setItem('userEmail', formData.email || 'Marry@Gmail.Com');
    
    // Redirect
    navigate('/profile');
  };

  return (
    <Container>
      <style>{`
        .signup-content {
          display: flex;
          flex-direction: column;
          padding: 30px 20px;
          height: 100%; /* Ensures it fills the card */
        }

        .custom-field {
          position: relative;
          margin-bottom: 24px;
        }

        .custom-field input {
          width: 100%;
          height: 48px;
          padding: 0 12px;
          border: 1px solid #CBCBCB;
          border-radius: 6px;
          outline: none;
          font-size: 14px;
          color: #1D2226;
          font-weight: 500;
          background-color: transparent;
        }

        .custom-field label {
          position: absolute;
          top: -9px;
          left: 10px;
          background-color: #ffffff;
          padding: 0 4px;
          font-size: 13px;
          color: #6C25FF;
          font-weight: 500;
          pointer-events: none;
        }

        .custom-field label span {
          color: #DD2C00;
          margin-left: 2px;
        }

        .signup-btn {
          background-color: #6C25FF;
          color: white;
          width: 100%;
          height: 46px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          /* Removed margin-top here because we handle it with flexbox below */
        }
        
        .signup-btn:hover {
          background-color: #5818db;
          /* REMOVED margin-top change - this fixes the flickering! */
        }
      `}</style>

      <div className="signup-content">
        <h1 style={{ fontSize: '28px', marginBottom: '35px', marginTop: '10px', lineHeight: '1.2', color: '#1D2226' }}>
          Create your <br /> PopX account
        </h1>

        {/* Added height: 100% to ensure form fills space */}
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
          
          <div className="custom-field">
            <label>Full Name<span>*</span></label>
            <input type="text" name="name" placeholder="Marry Doe" required onChange={handleChange} />
          </div>

          <div className="custom-field">
            <label>Phone number<span>*</span></label>
            <input type="tel" name="phone" placeholder="Marry Doe" required onChange={handleChange} />
          </div>

          <div className="custom-field">
            <label>Email address<span>*</span></label>
            <input type="email" name="email" placeholder="Marry Doe" required onChange={handleChange} />
          </div>

          <div className="custom-field">
            <label>Password<span>*</span></label>
            <input type="password" name="password" placeholder="Marry Doe" required onChange={handleChange} />
          </div>

          <div className="custom-field">
            <label>Company name</label>
            <input type="text" name="company" placeholder="Marry Doe" onChange={handleChange} />
          </div>

          <div style={{ marginTop: '5px' }}>
            <label style={{ fontSize: '15px', color: '#1D2226', fontWeight: '500', display:'block', marginBottom:'12px' }}>
              Are you an Agency?<span>*</span>
            </label>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="radio" name="agency" value="yes" defaultChecked style={{ width: '22px', height: '22px', accentColor: '#6C25FF' }} />
                <span style={{ marginLeft: '8px', fontSize: '14px', color: '#1D2226' }}>Yes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="radio" name="agency" value="no" style={{ width: '22px', height: '22px', accentColor: '#6C25FF' }} />
                <span style={{ marginLeft: '8px', fontSize: '14px', color: '#1D2226' }}>No</span>
              </div>
            </div>
          </div>

          {/* This wrapper pushes the button to the bottom stably */}
          <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
            <button className="signup-btn" type="submit">
              Create Account
            </button>
          </div>

        </form>
      </div>
    </Container>
  );
};

export default SignupPage;