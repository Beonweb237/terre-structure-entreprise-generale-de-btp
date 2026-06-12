import { Building2 } from 'lucide-react'

export default function APropos() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <Building2 className="w-16 h-16 text-safety-orange mx-auto mb-6" />
        <h1 className="font-archivo text-heading-lg text-pure-white mb-4">À Propos</h1>
        <p className="text-body-lg text-concrete-grey max-w-md mx-auto">
          Notre histoire depuis 1847, nos valeurs, notre équipe et nos chiffres clés.
        </p>
      </div>
    </div>
  )
}
