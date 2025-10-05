import React, { useState } from 'react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Kent Stormans Counseling</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-cta">
          <button className="cta-button">
            Schedule Consultation
          </button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
