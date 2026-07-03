import { HardHat, Wrench, Building2, Hammer, Ruler, Truck, ShieldCheck } from 'lucide-react'

const metiers = [
  {
    icon: Building2,
    title: 'Gros OEuvre',
    description: 'Fondations, structures beton arme, maconnerie, charpente. La base de tout ouvrage durable.',
    detail: 'Nos equipes maitrisent l\'ensemble des techniques de fondation (semelles, radiers, pieux) et de structure beton arme, garantissant la solidite et la perennite de chaque ouvrage sur plusieurs generations.',
  },
  {
    icon: Wrench,
    title: 'Second OEuvre',
    description: 'Cloisons, isolation, plomberie, electricite, finitions. L\'amenagement interieur complet.',
    detail: 'De la cloison seche a l\'isolation thermique et acoustique, nos artisans coordonnent l\'ensemble des corps d\'etat pour une finition impeccable et conforme aux dernieres normes RE2020.',
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Requalification de batiments anciens, mise aux normes, extension et surelevation.',
    detail: 'Specialistes de la renovation patrimoniale comme de la renovation energetique, nous accompagnons chaque projet avec un diagnostic complet et une methodologie adaptee au bati existant.',
  },
  {
    icon: Ruler,
    title: 'Genie Civil',
    description: 'Ouvrages d\'art, infrastructures routieres, terrassement et voirie.',
    detail: 'Ponts, ouvrages hydrauliques, voiries et reseaux divers : notre bureau d\'etudes interne concoit et realise des infrastructures complexes en respectant les delais et budgets contractuels.',
  },
  {
    icon: HardHat,
    title: 'Construction Neuve',
    description: 'Batiments residentiels, tertiaires et industriels cles en main.',
    detail: 'Pilotage de projet cles en main, de la conception a la livraison, pour des programmes residentiels, bureaux et batiments industriels adaptes aux besoins specifiques de chaque client.',
  },
  {
    icon: Truck,
    title: 'Logistique de Chantier',
    description: 'Gestion des approvisionnements, materiel lourd, coordination des equipes sur site.',
    detail: 'Une centrale logistique dediee optimise l\'approvisionnement en materiaux, la gestion du materiel lourd et la coordination des sous-traitants pour tenir les plannings les plus exigeants.',
  },
]

const equipment = [
  'Grues a tour et mobiles', 'Engins de terrassement', 'Centrale a beton mobile', 'Echafaudages certifies', 'Materiel de levage specialise',
]

const teamCertifications = [
  { name: 'CACES', desc: 'Conducteurs d\'engins certifies pour tous types de materiel' },
  { name: 'Habilitation electrique', desc: 'Equipes formees aux normes NF C 18-510' },
  { name: 'AIPR', desc: 'Autorisation d\'Intervention a Proximite des Reseaux' },
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {metiers.map((metier) => (
              <div
                key={metier.title}
                className="p-8 rounded-lg border border-white/10 hover:border-safety-orange transition-colors duration-300"
              >
                <metier.icon size={36} className="text-safety-orange mb-6" />
                <h3 className="font-archivo text-xl text-pure-white mb-3">{metier.title}</h3>
                <p className="text-body-rg text-concrete-grey mb-3">{metier.description}</p>
                <p className="text-body-rg text-concrete-grey/70 text-sm">{metier.detail}</p>
              </div>
            ))}
          </div>

          {/* Equipment */}
          <div className="mb-20">
            <h2 className="font-archivo text-2xl text-pure-white mb-8">Equipements et materiel</h2>
            <div className="flex flex-wrap gap-4">
              {equipment.map((item) => (
                <span key={item} className="px-5 py-3 rounded-lg bg-white/5 text-body-rg text-concrete-grey">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Team certifications */}
          <div>
            <h2 className="font-archivo text-2xl text-pure-white mb-8 flex items-center gap-2">
              <ShieldCheck size={24} className="text-safety-orange" />
              Certifications de nos equipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamCertifications.map((cert) => (
                <div key={cert.name} className="p-6 rounded-lg bg-white/5">
                  <p className="font-archivo text-lg text-pure-white mb-2">{cert.name}</p>
                  <p className="text-body-rg text-concrete-grey text-sm">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
