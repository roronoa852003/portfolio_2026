import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkSection from './components/WorkSection'
import ProjectShowcase from './components/ProjectShowcase'
import { TechStack } from './components/TechStack'
import { HeroGeometric } from './components/ui/HeroGeometric'
import { HistoryTimeline } from './components/HistoryTimeline'
import { StackedCircularFooter } from './components/ui/StackedCircularFooter'

import { ThemeProvider } from 'next-themes'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen relative">
        <HeroGeometric />
        <Navbar />
        <HeroSection />
        <WorkSection />
        <ProjectShowcase />
        <TechStack />
        <HistoryTimeline />
        <StackedCircularFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
