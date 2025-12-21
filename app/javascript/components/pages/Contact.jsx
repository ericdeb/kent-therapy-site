import React, { useState } from 'react'
import Header from '../Header'

const Contact = ({ setCurrentPage, currentPage }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'phone',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  const getCSRFToken = () => {
    const metaTag = document.querySelector('meta[name="csrf-token"]')
    return metaTag ? metaTag.getAttribute('content') : null
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status messages when user starts typing
    if (submitStatus || submitError) {
      setSubmitStatus(null)
      setSubmitError(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitError(null)

    try {
      const csrfToken = getCSRFToken()
      const response = await fetch('/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          inquiry: formData
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus(data.message || 'Thank you for your message. I will get back to you as soon as possible.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preferredContactMethod: 'phone',
          message: ''
        })
      } else {
        setSubmitError(data.errors ? data.errors.join(', ') : 'There was an error submitting your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="home">
      {/* Header Section with Name and Contact Info */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Menu Section */}
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

      {/* Hero Section with Image */}
      <section className="connect-hero-section">
        <div className="connect-hero-image"></div>
      </section>

      {/* Contact Content Section */}
      <div className="contact-page-content">
        <div className="contact-two-column">
          {/* Left Column: Contact Info and Map */}
          <div className="contact-left-column">
            
            <div className="contact-office">
              <p>
              If you'd like to explore the possibility of working together, you're welcome to schedule a free consultation. I'd love to hear from you.
              </p>
            </div>

            <div className="contact-phone">
              <strong>Phone: (503) 395-7192</strong>
            </div>

            <div className="contact-map-container">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.3560088453697%2C47.64668040723378%2C-122.3460088453697%2C47.65668040723378&layer=mapnik&marker=47.65168040723378%2C-122.3510088453697"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
            <div className="services-bubble-content" style={{ marginBottom: '-2rem', display: 'flex', justifyContent: 'center' }}>
              <a href="https://kent.sessionshealth.com/" target="_blank" rel="noopener noreferrer" className="service-bubble" style={{ textDecoration: 'none', padding: '1rem 2rem', fontSize: '1.2rem' }}>
                Client Portal
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right-column">
            <div className="contact-form-intro">
              <p>
              To schedule an appointment or if you have any questions, please fill out the form below and I’ll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form-new" onSubmit={handleSubmit}>
              {submitStatus && (
                <div className="form-message form-message-success">
                  {submitStatus}
                </div>
              )}
              {submitError && (
                <div className="form-message form-message-error">
                  {submitError}
                </div>
              )}

              <div className="form-group-name form-group">
                <label htmlFor="firstName">Name</label>
                <div className="name-fields">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredContactMethod">Preferred Contact Method</label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </div>
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

export default Contact
