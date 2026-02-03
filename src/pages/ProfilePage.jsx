import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import '../styles/form.css';

const ProfilePage = () => {
  const [user, setUser] = useState({ name: 'Marry Doe', email: 'Marry@Gmail.Com' });

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    if (storedName) setUser({ name: storedName, email: storedEmail || 'Marry@Gmail.Com' });
  }, []);

  return (
    <Container>
      {/* 1. Header Section (White with solid border) */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '28px 25px', 
        borderBottom: '1px solid #ECECEC' 
      }}>
        <h2 style={{ fontSize: '18px', color: '#1D2226', margin: 0 }}>Account Settings</h2>
      </div>

      {/* 2. Main Content Wrapper */}
      <div style={{ backgroundColor: '#F7F8F9', height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Profile Info Row */}
        <div style={{ padding: '30px 25px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: '76px', height: '76px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#ECECEC' }}>
                    {/* Using Dicebear for avatar - you can swap this image src if needed */}
                    <img 
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}&chars=2&backgroundColor=ECECEC`} 
                      alt="Profile" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                {/* Camera Icon (Purple) */}
                <div style={{ 
                    position: 'absolute', 
                    bottom: '0', 
                    right: '-5px', 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: '#6C25FF', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '2px solid white'
                }}>
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/camera--v1.png" alt="camera" style={{width: '12px', height: '12px'}}/>
                </div>
            </div>

            {/* Name and Email */}
            <div style={{ paddingTop: '12px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1D2226', margin: '0 0 5px 0' }}>{user.name}</h3>
                <p style={{ fontSize: '14px', color: '#1D2226', margin: 0 }}>{user.email}</p>
            </div>
        </div>

        {/* 3. The Dashed Line Separator */}
        <div style={{ borderBottom: '1px dashed #CBCBCB', margin: '0 25px' }}></div>

        {/* 4. Bio Description */}
        <div style={{ padding: '25px' }}>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
      
      </div>
    </Container>
  );
};

export default ProfilePage;