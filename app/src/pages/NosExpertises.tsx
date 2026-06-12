import { Lightbulb } from 'lucide-react'

export default function NosExpertises() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Lightbulb className="w-16 h-16 text-safety-orange mx-auto mb-6" />
        <h1 className="font-archivo text-heading-lg text-pure-white mb-4">Nos Expertises</h1>
        <p className="text-body-lg text-concrete-grey max-w-md mx-auto">
          BIM, gestion de projet, sécurité, QSE, innovation et R&D.
        </p>
      </div>
    </div>
  )
}
