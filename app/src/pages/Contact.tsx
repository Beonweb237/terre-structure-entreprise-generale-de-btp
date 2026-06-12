import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Mail className="w-16 h-16 text-safety-orange mx-auto mb-6" />
        <h1 className="font-archivo text-heading-lg text-pure-white mb-4">Contact</h1>
        <p className="text-body-lg text-concrete-grey max-w-md mx-auto">
          Demandez votre devis gratuitement. Notre équipe vous répond sous 48h.
        </p>
      </div>
    </div>
  )
}
