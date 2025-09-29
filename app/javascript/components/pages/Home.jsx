import React from 'react'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Path to Healing and Growth
          </h1>
          <p className="hero-subtitle">
            Life can feel overwhelming at times, like waves that swell over you as you try to draw in your next breath. 
            You might feel like you're treading water or slipping just below the surface.
          </p>
          <p className="hero-description">
            Maybe you recently discovered a deep desire just beginning to swell in you, but you aren't quite sure 
            what to do with it just yet. Maybe your true self feels sunk deep below the surface of your life.
          </p>
          <p className="hero-call-to-action">
            We all need support when life feels too painful or confusing. If you would like support as you are 
            learning to navigate the challenges you are facing, reach out. Set up a free consultation to get started.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Schedule Consultation</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">How I Can Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Individual Therapy</h3>
              <p>One-on-one sessions tailored to your unique needs and goals, providing a safe space for exploration and healing.</p>
            </div>
            <div className="feature-card">
              <h3>Trauma-Informed Care</h3>
              <p>Specialized approaches for processing trauma and building resilience, helping you reclaim your sense of safety and control.</p>
            </div>
            <div className="feature-card">
              <h3>Anxiety & Depression</h3>
              <p>Evidence-based techniques to manage symptoms and develop coping strategies for lasting emotional well-being.</p>
            </div>
            <div className="feature-card">
              <h3>Relationship Issues</h3>
              <p>Support for improving communication, setting boundaries, and building healthier connections with others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Meet Kent Stormans</h2>
              <p>
                I'm here to offer a space where you can explore your experiences with compassion and curiosity. 
                As a licensed therapist, I use a combination of evidence-based approaches to help you reconnect 
                with yourself and those around you with confidence and clarity.
              </p>
              <p>
                While we may explore tools to bring support to symptoms in the short-term, my approach to therapy 
                focuses on the root of your struggles by meeting weekly to explore and truly understand your experiences. 
                This is a place where you have a chance to slow down and come home to yourself.
              </p>
              <button className="btn-primary">Learn More About Me</button>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Professional Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Take the first step towards healing and growth. Schedule a free consultation to see if we're a good fit.</p>
          <button className="btn-primary large">Schedule Free Consultation</button>
        </div>
      </section>
    </div>
  )
}

export default Home
