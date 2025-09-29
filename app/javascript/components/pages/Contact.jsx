import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message. I will get back to you within 24 hours.')
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact & Location</h1>
          <p className="contact-subtitle">
            Ready to take the next step? I'm here to help you begin your journey to healing and growth.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h2>Get in Touch</h2>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(206) 555-0123</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>kent@kentstormanstherapy.com</p>
              </div>
              <div className="contact-item">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="location">
              <h2>Office Location</h2>
              <div className="address">
                <h3>Kent Stormans Therapy</h3>
                <p>1234 Main Street, Suite 200</p>
                <p>Seattle, WA 98101</p>
              </div>
              <div className="location-details">
                <p><strong>Parking:</strong> Free parking available in the building garage</p>
                <p><strong>Accessibility:</strong> Wheelchair accessible entrance and elevator</p>
                <p><strong>Public Transit:</strong> 2 blocks from the Metro bus stop</p>
              </div>
              <button className="btn-secondary">Get Directions</button>
            </div>

            <div className="emergency-info">
              <h3>Emergency Resources</h3>
              <p>If you are experiencing a mental health emergency, please call:</p>
              <ul>
                <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                <li><strong>Emergency Services:</strong> 911</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Schedule a Consultation</h2>
            <p>Fill out the form below to schedule a free 15-minute consultation.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Contact Method</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please tell me a bit about what you'd like to work on in therapy..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary full-width">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I schedule my first appointment?</h3>
              <p>You can schedule a free 15-minute consultation by filling out the contact form above, calling me directly, or emailing me. During this consultation, we'll discuss your needs and determine if we're a good fit.</p>
            </div>
            <div className="faq-item">
              <h3>What should I expect in my first session?</h3>
              <p>Your first session will be an opportunity for us to get to know each other. I'll ask about your background, current concerns, and goals for therapy. This helps me understand how best to support you.</p>
            </div>
            <div className="faq-item">
              <h3>How long does therapy typically last?</h3>
              <p>The length of therapy varies depending on your individual needs and goals. Some people benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. We'll discuss this together and adjust as needed.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer virtual sessions?</h3>
              <p>Yes, I offer both in-person and virtual therapy sessions. Virtual sessions are conducted through a secure, HIPAA-compliant platform. We can discuss which option works best for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
