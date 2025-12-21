import React, { useState, useRef, useEffect } from 'react'

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nameYouGoBy: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    gender: '',
    preferredContactMethod: 'phone',
    state: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitError, setSubmitError] = useState(null)
  const [isFadingOut, setIsFadingOut] = useState(false)

  // Scroll to top when success or error message appears, then fade out on success
  useEffect(() => {
    if ((submitStatus || submitError) && modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      
      // If successful, wait 1 second after scrolling, then fade out
      if (submitStatus) {
        const fadeOutTimer = setTimeout(() => {
          setIsFadingOut(true)
          // Close modal after fade-out animation completes (0.3s)
          setTimeout(() => {
            onClose()
            setSubmitStatus(null)
            setIsFadingOut(false)
          }, 300)
        }, 1000)
        
        return () => clearTimeout(fadeOutTimer)
      }
    }
  }, [submitStatus, submitError, onClose])

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
      const response = await fetch('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          contact: formData
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus(data.message || 'Thank you for your message. I will get back to you as soon as possible.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          nameYouGoBy: '',
          dateOfBirth: '',
          email: '',
          phone: '',
          gender: '',
          preferredContactMethod: 'phone',
          state: '',
          message: ''
        })
        // Fade out and close handled in useEffect after scrolling
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const states = [
    'Select', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  if (!isOpen) return null

  return (
    <div className="contact-modal-overlay" onClick={handleBackdropClick}>
      <div className={`contact-modal ${isFadingOut ? 'fade-out' : ''}`} ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-header">
          <div className="contact-modal-header-left">Kent Stormans Therapy</div>
          <div className="contact-modal-header-center">Send Message</div>
          <button className="contact-modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form className="contact-modal-form" onSubmit={handleSubmit}>
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

          <div className="contact-modal-section">
            <h3 className="contact-modal-section-title">Your info</h3>
            
            <div className="contact-modal-form-row">
              <div className="contact-modal-form-group">
                <label htmlFor="firstName">
                  First name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-modal-form-group">
                <label htmlFor="lastName">
                  Last name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="contact-modal-form-group">
              <label htmlFor="nameYouGoBy">Name you go by</label>
              <input
                type="text"
                id="nameYouGoBy"
                name="nameYouGoBy"
                value={formData.nameYouGoBy}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="contact-modal-form-row">
              <div className="contact-modal-form-group">
                <label htmlFor="dateOfBirth">
                  Date of birth <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="mm/dd/yyyy"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-modal-form-group">
                <label htmlFor="email">
                  Email <span className="required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="contact-modal-form-row">
              <div className="contact-modal-form-group">
                <label htmlFor="phone">
                  Phone <span className="required-asterisk">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-modal-form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>


            <div className="contact-modal-form-row">
              <div className="contact-modal-form-group">
                <label htmlFor="preferredContactMethod">
                  Preferred Contact Method <span className="required-asterisk">*</span>
                </label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  className="contact-modal-state-select"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div className="contact-modal-form-group">
                <label htmlFor="state">
                  State <span className="required-asterisk">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  className="contact-modal-state-select"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  {states.map(state => (
                    <option key={state} value={state === 'Select' ? '' : state}>
                      {state}
                    </option>
                  ))}
                </select>
                <p className="contact-modal-helper-text">Select the state you live in.</p>
              </div>
            </div>
          </div>

          <div className="contact-modal-section">
            <h3 className="contact-modal-section-title">Is there anything else you want to share?</h3>
            <p className="contact-modal-helper-text">
              For example: what you'd like to focus on, insurance or payment questions, etc.
            </p>
            <div className="contact-modal-form-group">
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="contact-modal-actions">
            <button type="submit" className="contact-modal-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal

