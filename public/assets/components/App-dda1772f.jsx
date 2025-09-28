import React from 'react'

const App = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#333',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        Kent Stormans Therapy
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#666',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Professional therapy services to help you on your journey to wellness and healing.
      </p>
    </div>
  )
}

export default App
