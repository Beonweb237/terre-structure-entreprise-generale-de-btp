import { Users } from 'lucide-react'

export default function Carrieres() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Users className="w-16 h-16 text-safety-orange mx-auto mb-6" />
        <h1 className="font-archivo text-heading-lg text-pure-white mb-4">Carrières</h1>
        <p className="text-body-lg text-concrete-grey max-w-md mx-auto">
          Rejoignez notre équipe. Découvrez nos métiers, notre culture et nos postes ouverts.
        </p>
      </div>
    </div>
  )
}
