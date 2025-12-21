import React, { useState } from 'react'
import useMobileDetect from './hooks/useMobileDetect'
import MobileHeader from './MobileHeader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const isMobile = useMobileDetect()

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} currentPage={currentPage} isMobile={isMobile} />
      case 'about':
        return <About setCurrentPage={setCurrentPage} currentPage={currentPage} isMobile={isMobile} />
      case 'services':
        return <Services setCurrentPage={setCurrentPage} currentPage={currentPage} isMobile={isMobile} />
      case 'connect':
        return <Contact setCurrentPage={setCurrentPage} currentPage={currentPage} isMobile={isMobile} />
      default:
        return <Home setCurrentPage={setCurrentPage} currentPage={currentPage} isMobile={isMobile} />
    }
  }

  // Mobile layout
  if (isMobile) {
    return (
      <div className="app app-mobile">
        <MobileHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="mobile-main">
          {renderPage()}
        </main>
      </div>
    )
  }

  // Desktop layout
  return (
    <div className="app">
      <div style={{ border: '2px solid rgba(0,0,0,.1)', padding: '80px', 
        marginTop: '100px', marginBottom: '100px', marginLeft: '120px', marginRight: '120px'}}>
        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App

