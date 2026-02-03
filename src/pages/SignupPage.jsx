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
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userEmail', formData.email);
    navigate('/profile');
  };

  return (
    <Container>
      {/* INTERNAL STYLES FOR EXACT MATCH */}
      <style>{`
        .signup-content {
          display: flex;
          flex-direction: column;
          padding: 30px 20px;
        }

        /* The Container for the Input */
        .custom-field {
          position: relative;
          margin-bottom: 24px; /* Space between boxes */
        }

        /* The Input Box */
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
          background-color: transparent; /* Important for the look */
        }

        /* The Label - positioned to "Cut" the border */
        .custom-field label {
          position: absolute;
          top: -9px; /* Pulls it up to sit on the line */
          left: 10px;
          background-color: #ffffff; /* White background hides the border line behind it */
          padding: 0 4px; /* Space around text so line doesn't touch it */
          font-size: 13px;
          color: #6C25FF; /* The specific Purple */
          font-weight: 500;
          pointer-events: none;
        }

        /* The Red Asterisk */
        .custom-field label span {
          color: #DD2C00;
          margin-left: 2px;
        }

        /* The Create Account Button */
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
          margin-top: 110px; /* Pushes to bottom */
        }
        
        .signup-btn:hover {
        margin-top: 50px;
          background-color: #5818db;
        }
      `}</style>

      <div className="signup-content">
        <h1 style={{ fontSize: '28px', marginBottom: '35px', marginTop: '10px', lineHeight: '1.2', color: '#1D2226' }}>
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          
          {/* Full Name */}
          <div className="custom-field">
            <label>Full Name<span>*</span></label>
            <input type="text" name="name" defaultValue="Marry Doe" required onChange={handleChange} />
          </div>

          {/* Phone */}
          <div className="custom-field">
            <label>Phone number<span>*</span></label>
            <input type="tel" name="phone" defaultValue="Marry Doe" required onChange={handleChange} />
          </div>

          {/* Email */}
          <div className="custom-field">
            <label>Email address<span>*</span></label>
            <input type="email" name="email" defaultValue="Marry Doe" required onChange={handleChange} />
          </div>

          {/* Password */}
          <div className="custom-field">
            <label>Password<span>*</span></label>
            <input type="password" name="password" defaultValue="Marry Doe" required onChange={handleChange} />
          </div>

          {/* Company */}
          <div className="custom-field">
            <label>Company name</label>
            <input type="text" name="company" defaultValue="Marry Doe" onChange={handleChange} />
          </div>

          {/* Radio Buttons */}
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

          {/* Submit Button */}
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