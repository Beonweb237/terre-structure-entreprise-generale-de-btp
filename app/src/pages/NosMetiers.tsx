import { HardHat, Wrench, Building2, Hammer, Ruler, Truck } from 'lucide-react'

const metiers = [
  {
    icon: Building2,
    title: 'Gros OEuvre',
    description: 'Fondations, structures beton arme, maconnerie, charpente. La base de tout ouvrage durable.',
  },
  {
    icon: Wrench,
    title: 'Second OEuvre',
    description: 'Cloisons, isolation, plomberie, electricite, finitions. L\'amenagement interieur complet.',
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Requalification de batiments anciens, mise aux normes, extension et surelevation.',
  },
  {
    icon: Ruler,
    title: 'Genie Civil',
    description: 'Ouvrages d\'art, infrastructures routieres, terrassement et voirie.',
  },
  {
    icon: HardHat,
    title: 'Construction Neuve',
    description: 'Batiments residentiels, tertiaires et industriels cles en main.',
  },
  {
    icon: Truck,
    title: 'Logistique de Chantier',
    description: 'Gestion des approvisionnements, materiel lourd, coordination des equipes sur site.',
  },
]

export default function NosMetiers() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-midnight-black">
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="font-archivo text-safety-orange text-sm uppercase tracking-[0.15em] mb-4">
            Nos Metiers
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Tous les corps de metier du batiment
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Depuis 1847, Terre &amp; Structure maitrise l'ensemble de la chaine de construction,
            du gros oeuvre a la livraison finale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {metiers.map((metier) => (
              <div
                key={metier.title}
                className="p-8 rounded-lg border border-white/10 hover:border-safety-orange transition-colors duration-300"
              >
                <metier.icon size={36} className="text-safety-orange mb-6" />
                <h3 className="font-archivo text-xl text-pure-white mb-3">{metier.title}</h3>
                <p className="text-body-rg text-concrete-grey">{metier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
