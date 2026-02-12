'use client'

import { useState, createContext, useContext } from 'react'
import { UrgencyBanner } from './UrgencyBanner'
import { NavBar } from './NavBar'

// Context to share banner visibility state
const BannerContext = createContext<{
  isBannerVisible: boolean
  closeBanner: () => void
}>({
  isBannerVisible: true,
  closeBanner: () => {},
})

export const useBannerState = () => useContext(BannerContext)

export function HeaderWrapper() {
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  const closeBanner = () => setIsBannerVisible(false)

  return (
    <BannerContext.Provider value={{ isBannerVisible, closeBanner }}>
      {/* Fixed header container that stacks banner + nav */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <UrgencyBanner isVisible={isBannerVisible} onClose={closeBanner} />
        <NavBar />
      </div>
      {/* Spacer to push content below fixed header */}
      <div 
        className="transition-all duration-300"
        style={{ height: isBannerVisible ? '116px' : '72px' }}
        aria-hidden="true"
      />
    </BannerContext.Provider>
  )
}
