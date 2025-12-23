import { useState, useEffect, useCallback } from 'react'

const MOBILE_BREAKPOINT = 768

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= MOBILE_BREAKPOINT
    }
    return false
  })

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
  }, [])

  useEffect(() => {
    // Use matchMedia for more reliable breakpoint detection
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches)
    }

    // Handle orientation changes with a small delay to ensure viewport has updated
    const handleOrientationChange = () => {
      // Small delay to let the viewport dimensions settle after rotation
      setTimeout(checkMobile, 100)
    }

    // Set initial state from media query
    setIsMobile(mediaQuery.matches)

    // Listen for media query changes (modern approach)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaChange)
    }

    // Also listen for orientation changes specifically for mobile rotation
    window.addEventListener('orientationchange', handleOrientationChange)
    
    // Resize as a fallback
    window.addEventListener('resize', checkMobile)

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange)
      } else {
        mediaQuery.removeListener(handleMediaChange)
      }
      window.removeEventListener('orientationchange', handleOrientationChange)
      window.removeEventListener('resize', checkMobile)
    }
  }, [checkMobile])

  return isMobile
}

export default useMobileDetect

