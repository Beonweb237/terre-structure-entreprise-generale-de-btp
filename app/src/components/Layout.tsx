import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import QuoteFloater from './QuoteFloater'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isContactPage = location.pathname === '/contact'

  return (
    <div className="min-h-[100dvh] flex flex-col bg-midnight-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {!isContactPage && <QuoteFloater />}
    </div>
  )
}
