import React from 'react'
import Header from '../Header'

const Services = ({ setCurrentPage, currentPage, isMobile }) => {
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

      {/* Gray divider line below navigation */}
      {!isMobile && <div className="divider-line"></div>}

      {/* Hero Section with Image */}
      <section className="services-hero-section">
        <div className="services-hero-image"></div>
      </section>

      <div className="services" style={{ height: isMobile ? '2em' : '4em' }} >
      </div>

      <div className="services-bubble-content">
        <h2 className="services-title">AREAS OF FOCUS</h2>
        <div className="services-bubbles">
          <div className="service-bubble">anxiety</div>
          <div className="service-bubble">depression</div>
          <div className="service-bubble">trauma / abuse</div>
          <div className="service-bubble">spiritual abuse</div>
          <div className="service-bubble">LGBTQIA+</div>
          <div className="service-bubble">relationships</div>
          <div className="service-bubble">neurodiversity</div>
          <div className="service-bubble">teen / young adult challenges</div>
          <div className="service-bubble">diverse affirming</div>
        </div>
      </div>

      <div className="services-bubble-content">
        <h2 className="services-title">APPROACHES</h2>
        <div className="services-bubbles">
          <div className="service-bubble">relational approach</div>
          <div className="service-bubble">Internal Family Systems model</div>
          <div className="service-bubble">somatic work (body-based)</div>
          <div className="service-bubble">walk + talk therapy</div>
          <div className="service-bubble">trauma-informed</div>
          <div className="service-bubble">attachment-informed</div>
          <div className="service-bubble">Acceptance and Commitment therapy</div>
          <div className="service-bubble">mindfulness</div>
        </div>
      </div>

      <div className="fees-content">
        <h2 className="services-title">FEES</h2>
        <p style={{ marginTop: '-20px' }}>
          50 minute session - $175 <br />
          I offer sliding-scale reduced fees to some clients <br />
          I'm In-network in WA state with: Regence Blue Shield, Cigna, Aetna, Quest, and Carelon. <br /> 
          In-network in CA with Blue Shield, Cigna, Aetna, Quest, and Carelon, and others.
        </p>
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

export default Services
