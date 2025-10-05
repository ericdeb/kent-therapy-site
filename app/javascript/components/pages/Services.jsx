import React from 'react'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-header" style={{ marginTop: '4rem' }}>
          <h1>Services & Specialties</h1>
          <p className="services-subtitle">
            Comprehensive mental health services tailored to your unique needs and goals
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Individual Therapy</h3>
            <p className="service-duration">50-minute sessions</p>
            <p>
              One-on-one therapy sessions focused on your personal growth and healing. 
              We'll work together to address your specific concerns and develop strategies 
              for lasting change.
            </p>
            <ul className="service-features">
              <li>Personalized treatment planning</li>
              <li>Evidence-based interventions</li>
              <li>Safe, confidential environment</li>
              <li>Flexible scheduling options</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Trauma Therapy</h3>
            <p className="service-duration">60-minute sessions</p>
            <p>
              Specialized trauma-informed care using EMDR and other evidence-based approaches 
              to help you process difficult experiences and reclaim your sense of safety and control.
            </p>
            <ul className="service-features">
              <li>EMDR therapy</li>
              <li>Trauma-informed CBT</li>
              <li>Grounding techniques</li>
              <li>Nervous system regulation</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Anxiety & Depression</h3>
            <p className="service-duration">50-minute sessions</p>
            <p>
              Comprehensive treatment for anxiety and depression using cognitive-behavioral 
              techniques, mindfulness practices, and lifestyle interventions.
            </p>
            <ul className="service-features">
              <li>Cognitive Behavioral Therapy</li>
              <li>Mindfulness-based approaches</li>
              <li>Stress management techniques</li>
              <li>Lifestyle and wellness planning</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Relationship Counseling</h3>
            <p className="service-duration">50-minute sessions</p>
            <p>
              Support for improving communication, resolving conflicts, and building healthier 
              relationships with partners, family members, and friends.
            </p>
            <ul className="service-features">
              <li>Communication skills training</li>
              <li>Conflict resolution strategies</li>
              <li>Boundary setting support</li>
              <li>Attachment-based interventions</li>
            </ul>
          </div>
        </div>

        <div className="approaches">
          <h2>Therapeutic Approaches</h2>
          <div className="approaches-grid">
            <div className="approach-item">
              <h4>Cognitive Behavioral Therapy (CBT)</h4>
              <p>Identifying and changing negative thought patterns and behaviors that contribute to emotional distress.</p>
            </div>
            <div className="approach-item">
              <h4>EMDR</h4>
              <p>Eye Movement Desensitization and Reprocessing for processing trauma and difficult memories.</p>
            </div>
            <div className="approach-item">
              <h4>Internal Family Systems (IFS)</h4>
              <p>Understanding and working with different parts of yourself to achieve internal harmony.</p>
            </div>
            <div className="approach-item">
              <h4>Mindfulness-Based Therapy</h4>
              <p>Developing present-moment awareness and acceptance to reduce stress and improve well-being.</p>
            </div>
            <div className="approach-item">
              <h4>Attachment-Based Therapy</h4>
              <p>Exploring how early relationships shape current patterns and developing secure attachment.</p>
            </div>
            <div className="approach-item">
              <h4>Trauma-Informed Care</h4>
              <p>Understanding the impact of trauma and creating safety for healing and recovery.</p>
            </div>
          </div>
        </div>

        <div className="insurance-payment">
          <h2>Insurance & Payment</h2>
          <div className="payment-info">
            <div className="insurance-info">
              <h3>Insurance Accepted</h3>
              <ul>
                <li>Blue Cross Blue Shield</li>
                <li>Aetna</li>
                <li>Cigna</li>
                <li>UnitedHealthcare</li>
                <li>Out-of-network benefits</li>
              </ul>
            </div>
            <div className="payment-info-details">
              <h3>Payment Options</h3>
              <ul>
                <li>Session fee: $150 (50-minute session)</li>
                <li>Sliding scale available based on need</li>
                <li>Flexible payment plans</li>
                <li>HSA/FSA accepted</li>
                <li>Free 15-minute consultation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Schedule a free consultation to discuss your needs and see if we're a good fit.</p>
          <button className="btn-primary">Schedule Free Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Services
