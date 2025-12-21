import React from 'react'
import Header from '../Header'

const About = ({ setCurrentPage, currentPage, isMobile }) => {
  return (
    <div className="home">
      {/* Header Section with Name and Contact Info - hidden on mobile */}
      <Header setCurrentPage={setCurrentPage} isMobile={isMobile} />

      {/* Menu Section - hidden on mobile */}
      {!isMobile && (
        <div className="nav-menu-wrapper">
          <div className="nav-line-left"></div>
          <div className="page-menu">
            <button className={`menu-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>HOME</button>
            <button className={`menu-item ${currentPage === 'about' ? 'active' : ''}`} onClick={() => setCurrentPage('about')}>ABOUT</button>
            <button className={`menu-item ${currentPage === 'services' ? 'active' : ''}`} onClick={() => setCurrentPage('services')}>SERVICES</button>
            <button className={`menu-item ${currentPage === 'connect' ? 'active' : ''}`} onClick={() => setCurrentPage('connect')}>CONNECT</button>
          </div>
          <div className="nav-line-right"></div>
        </div>
      )}

      <section className="services-hero-section">
        <div className="about-hero-image"></div>
      </section>

      <div className="about">
        <div className={`container about-content ${isMobile ? 'mobile-about-content' : ''}`} style={isMobile ? { textAlign: 'center', padding: '2rem 1.5rem' } : { textAlign: 'center', padding: '2rem 12rem' }}>
          <p style={{ marginBottom: '2rem' }}>
            I work to create a safe space for people from any background. Acceptance is a cornerstone of my practice. My approach is holistic, acknowledging the impact of society systems and empowering clients to explore healing that works for them.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            I help clients embrace their experience, become grounded in their bodies, moving toward connection and freedom. I'm passionate about working with people who have been overlooked or marginalized.
          </p>

          <p>
          I'm a Licensed Mental Health Counselor (# LH70028267) in the state of Washington, and a Licensed Professional Clinical Counselor (# LPCC19801) in California. My experience has been working with individuals through a community mental health agency in Santa Barbara, CA.
          </p>
        </div>
      </div>

      {/* Gray divider line above footer */}
      <div className="divider-line"></div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
        </div>
      </footer>
    </div>
  )
}

export default About
