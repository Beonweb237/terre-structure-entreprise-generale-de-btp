import { Wrench } from 'lucide-react'

export default function NosMetiers() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Wrench className="w-16 h-16 text-safety-orange mx-auto mb-6" />
        <h1 className="font-archivo text-heading-lg text-pure-white mb-4">Nos Métiers</h1>
        <p className="text-body-lg text-concrete-grey max-w-md mx-auto">
          Découvrez tous nos métiers du bâtiment — gros oeuvre, second oeuvre, rénovation, génie civil et plus.
        </p>
      </div>
    </div>
  )
}
