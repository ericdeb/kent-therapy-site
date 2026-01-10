import React, { useState } from 'react'
import ContactModal from './ContactModal'

const Header = ({ setCurrentPage, isMobile = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // On mobile, we don't show the header section (mobile header handles this)
  if (isMobile) {
    return null
  }

  return (
    <>
      <section className="header-section">
        <div className="header-content">
          <h1 className="site-title" 
            style={{ cursor: 'pointer', fontFamily: 'Montserrat', fontSize: '3.4rem', fontWeight: '300', letterSpacing: '-0.02em', lineHeight: '1.2', textAlign: 'center', color: '#333' }}
            onClick={() => setCurrentPage('home')}
            >
              Kent Stormans Therapy
          </h1>  
          <div className="contact-info">
            <div className="contact-left">600 N. 36th St. #220 <br />Seattle WA 98103</div>
            <div className="contact-center">(425) 522-2472</div>
            <div className="contact-right" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" className="icon-email"><path fill="#ADADAD" fillRule="evenodd" d="M2.333.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H2.333c-.916 0-1.666-.75-1.666-1.667V2c0-.917.75-1.667 1.666-1.667zm7.55 6.95l5.45-3.408a.708.708 0 10-.75-1.2L9 6.167 3.417 2.675a.708.708 0 10-.75 1.2l5.45 3.408a1.65 1.65 0 001.766 0z" clipRule="evenodd"></path></svg>
              Contact
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
