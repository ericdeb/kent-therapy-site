import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About Kent Stormans</h1>
          <p className="about-subtitle">Licensed Therapist & Mental Health Professional</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <h2>My Approach to Therapy</h2>
              <p>
                I believe that healing happens in relationship. My approach to therapy is collaborative, 
                compassionate, and grounded in evidence-based practices. I work with individuals who are 
                ready to explore their inner world and make meaningful changes in their lives.
              </p>
              
              <p>
                As a trauma-informed therapist, I understand that many of our current struggles are rooted 
                in past experiences. Together, we'll gently explore these patterns while building new 
                skills and perspectives that serve you better.
              </p>

              <h3>My Background</h3>
              <p>
                I completed my Master's in Clinical Psychology and have been practicing for over 8 years. 
                I specialize in working with adults dealing with anxiety, depression, trauma, and relationship 
                challenges. My training includes:
              </p>
              
              <ul className="training-list">
                <li>Trauma-Informed Cognitive Behavioral Therapy (CBT)</li>
                <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
                <li>Internal Family Systems (IFS)</li>
                <li>Mindfulness-Based Stress Reduction</li>
                <li>Attachment-Based Therapy</li>
              </ul>

              <h3>What to Expect</h3>
              <p>
                In our work together, you can expect a warm, non-judgmental space where your experiences 
                are validated and your strengths are recognized. I'll meet you where you are and help you 
                move toward where you want to be.
              </p>
            </div>

            <div className="about-sidebar">
              <div className="credentials">
                <h3>Credentials</h3>
                <ul>
                  <li>Licensed Clinical Social Worker (LCSW)</li>
                  <li>Master's in Clinical Psychology</li>
                  <li>8+ years of experience</li>
                  <li>EMDR Certified</li>
                  <li>Trauma-Informed Care Specialist</li>
                </ul>
              </div>

              <div className="specialties">
                <h3>Specialties</h3>
                <ul>
                  <li>Anxiety & Panic Disorders</li>
                  <li>Depression & Mood Disorders</li>
                  <li>Trauma & PTSD</li>
                  <li>Relationship Issues</li>
                  <li>Life Transitions</li>
                  <li>Grief & Loss</li>
                  <li>Self-Esteem & Identity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="philosophy">
          <h2>My Philosophy</h2>
          <blockquote>
            "Healing is not about becoming perfect. It's about becoming whole. It's about learning to 
            embrace all parts of yourself with compassion and understanding."
          </blockquote>
          <p>
            I believe that everyone has the capacity for growth and healing. My role is to provide 
            the support, tools, and safe space you need to tap into your own inner wisdom and strength.
          </p>
        </div>

        <div className="cta-section">
          <h2>Ready to Work Together?</h2>
          <p>I'd love to learn more about you and how I can support your journey.</p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default About
