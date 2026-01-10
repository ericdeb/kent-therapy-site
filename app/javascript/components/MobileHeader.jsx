import React, { useState, useEffect } from 'react'

const MobileHeader = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on orientation change to prevent UI issues
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsMenuOpen(false)
    }

    window.addEventListener('orientationchange', handleOrientationChange)
    window.addEventListener('resize', handleOrientationChange)

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
      window.removeEventListener('resize', handleOrientationChange)
    }
  }, [])

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
  }

  return (
    <header className="mobile-header">
      <div className="mobile-header-container">
        <button 
          className="mobile-brand"
          onClick={() => handleNavClick('home')}
        >
          <span className="mobile-brand-text">Kent Stormans Therapy</span>
        </button>

        <button 
          className={`mobile-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          HOME
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          ABOUT
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === 'services' ? 'active' : ''}`}
          onClick={() => handleNavClick('services')}
        >
          SERVICES
        </button>
        <button 
          className={`mobile-nav-item ${currentPage === 'connect' ? 'active' : ''}`}
          onClick={() => handleNavClick('connect')}
        >
          CONNECT
        </button>
        
        <div className="mobile-nav-contact-info">
          <div className="mobile-nav-phone">
            <a href="tel:4255222472">(425) 522-2472</a>
          </div>
          <div className="mobile-nav-address">
            600 N. 36th St. #220<br />Seattle WA 98103
          </div>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="mobile-nav-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default MobileHeader

