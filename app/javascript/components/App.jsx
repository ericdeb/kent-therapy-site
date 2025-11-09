import React, { useState } from 'react'
import Navigation from './Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} currentPage={currentPage} />
      case 'about':
        return <About setCurrentPage={setCurrentPage} currentPage={currentPage} />
      case 'services':
        return <Services setCurrentPage={setCurrentPage} currentPage={currentPage} />
      case 'connect':
        return <Contact setCurrentPage={setCurrentPage} currentPage={currentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} currentPage={currentPage} />
    }
  }

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
