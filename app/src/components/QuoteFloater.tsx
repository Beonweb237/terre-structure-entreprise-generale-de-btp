import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText } from 'lucide-react'

export default function QuoteFloater() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <button
      onClick={() => navigate('/contact')}
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-safety-orange flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 animate-pulse-gentle ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Demander un devis"
      title="Demander un devis"
    >
      <FileText className="w-6 h-6 text-midnight-black" />
    </button>
  )
}
