import React from 'react'
import Header from '../Header'

const Approach = ({ setCurrentPage }) => {
  return (
    <div className="home">
      <Header setCurrentPage={setCurrentPage} />

      <div className="page-menu">
        <button className="menu-item" onClick={() => setCurrentPage('theory')}>THEORY</button>
        <button className="menu-item" onClick={() => setCurrentPage('approach')}>APPROACH</button>
        <button className="menu-item" onClick={() => setCurrentPage('focus')}>FOCUS</button>
        <button className="menu-item" onClick={() => setCurrentPage('background')}>BACKGROUND</button>
        <button className="menu-item" onClick={() => setCurrentPage('contact')}>CONTACT</button>
      </div>

      <div className="page-content">
        <div className="container">
          <h1>APPROACH</h1>
          <p>Content for Approach page...</p>
        </div>
      </div>
    </div>
  )
}

export default Approach
