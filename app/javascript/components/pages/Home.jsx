import React from 'react'
import Header from '../Header'

const Home = ({ setCurrentPage, currentPage }) => {
  return (
    <div className="home">
      {/* Header Section with Name and Contact Info */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Menu Section - matches reference site */}
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

      {/* Gray divider line below navigation */}
      <div className="divider-line"></div>

      {/* Hero Section with Image and Welcome Text */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-overlay">
            <h1 className="hero-title">Welcome</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hi, I'm Kent (he / him)</h2>
          <p style={{ textAlign: 'center' }}>
            I'm a therapist in Washington state + California, working with adults and teens. I support people through challenges like anxiety, trauma / abuse, relationships, depression, and work with neurodiverse individuals.
          </p>
          <p style={{ textAlign: 'center' }}>
            I'm here to meet you where you're at. Therapy that's relational, connection-oriented. Finding a sense of home in yourself, even if home feels far away.
          </p>
          <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '2rem', fontWeight: '500', marginTop: '3em' }}>
            "I was born a long way from where I belong…I'm on my way home" - Bob Dylan
          </p>
        </div>
      </section>

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

export default Home
