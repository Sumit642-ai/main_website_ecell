import React, { useState } from 'react';
import RegistrationSun from './RegistrationSun';

export default function RegistrationSection() {
  const [activeTab, setActiveTab] = useState('student');

  return (
    <section id="register" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="registration-container" style={{ display: 'flex', width: '100%', maxWidth: '1400px', margin: '0 auto', height: '80vh', background: 'rgba(0,0,0,0.8)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
        
        {/* Left Side - Sun Animation */}
        <div className="registration-visual" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '50%', left: '-30%', width: '160%', height: '160%', transform: 'translateY(-50%)' }}>
             <RegistrationSun />
           </div>
           <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 10 }}>
             <h2 style={{ fontSize: '3rem', fontFamily: 'Cinzel, serif', margin: 0, color: '#fff' }}>JOIN THE<br/>REVOLUTION</h2>
           </div>
        </div>

        {/* Right Side - Form */}
        <div className="registration-form-wrapper" style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(20,20,20,0.95)', backdropFilter: 'blur(10px)' }}>
          
          <div className="form-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'Montserrat, sans-serif', marginBottom: '0.5rem', color: '#fff' }}>REGISTER NOW</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Secure your spot at the summit</p>
          </div>

          {/* Custom Switch */}
          <div className="role-switch" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '0.3rem', borderRadius: '50px', marginBottom: '2rem', position: 'relative' }}>
            {['student', 'professor', 'startup'].map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: 'none',
                  background: activeTab === role ? 'var(--palette-orange)' : 'transparent',
                  color: activeTab === role ? '#fff' : 'rgba(255,255,255,0.6)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {role}
              </button>
            ))}
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input className="field" placeholder="First Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
              <input className="field" placeholder="Last Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
            </div>
            
            <input className="field" placeholder="Email Address" type="email" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
            
            {activeTab === 'student' && (
              <input className="field" placeholder="University / College" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
            )}
            
            {activeTab === 'professor' && (
              <input className="field" placeholder="Department / Institution" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
            )}
            
            {activeTab === 'startup' && (
              <input className="field" placeholder="Startup Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
            )}

            <input className="field" placeholder="Phone Number" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />

            <button className="primary-btn" type="submit" style={{ marginTop: '1rem', padding: '1rem', background: 'var(--palette-orange)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '800', textTransform: 'uppercase', cursor: 'pointer', fontSize: '1rem' }}>
              Register as {activeTab}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
