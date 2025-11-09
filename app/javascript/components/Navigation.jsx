import React, { useState } from 'react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'theory', label: 'THEORY' },
    { id: 'approach', label: 'APPROACH' },
    { id: 'focus', label: 'FOCUS' },
    { id: 'background', label: 'BACKGROUND' },
    { id: 'contact', label: 'CONTACT' }
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <button 
            onClick={() => setCurrentPage('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <h2>Kent Stormans Counseling</h2>
          </button>
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
