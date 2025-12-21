import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= MOBILE_BREAKPOINT
    }
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    }

    window.addEventListener('resize', handleResize)
    // Call once to ensure correct initial state
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export default useMobileDetect

