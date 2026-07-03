import { Award, Shield, Cpu, ClipboardCheck } from 'lucide-react'

const certifications = [
  { name: 'Qualibat 1112 / 1312', desc: 'Certification qualite construction' },
  { name: 'RGE Eco-artisan', desc: 'Reconnu Garant de l\'Environnement' },
  { name: 'ISO 9001', desc: 'Certifie qualite management' },
  { name: 'MASE', desc: 'Securite certifiee sur chantier' },
]

const expertises = [
  {
    icon: Cpu,
    title: 'BIM & Digitalisation',
    description: 'Modelisation 3D des ouvrages, suivi de chantier numerique, maquette collaborative BIM.',
  },
  {
    icon: ClipboardCheck,
    title: 'Gestion de Projet',
    description: 'Pilotage de chantier de A a Z, planning previsionnel, coordination des sous-traitants.',
  },
  {
    icon: Shield,
    title: 'Securite & QSE',
    description: 'Politique securite renforcee, formations regulieres, zero accident comme objectif permanent.',
  },
  {
    icon: Award,
    title: 'Innovation & R&D',
    description: 'Materiaux bas carbone, techniques de construction hors-site, veille technologique continue.',
  },
]

export default function NosExpertises() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-midnight-black">
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="font-archivo text-safety-orange text-sm uppercase tracking-[0.15em] mb-4">
            Nos Expertises
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Une exigence de qualite a chaque etape
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Nos certifications et notre methodologie garantissent des ouvrages conformes
            aux plus hauts standards du secteur.
          </p>

          {/* Expertises */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {expertises.map((expertise) => (
              <div key={expertise.title} className="p-8 rounded-lg border border-white/10">
                <expertise.icon size={32} className="text-safety-orange mb-5" />
                <h3 className="font-archivo text-xl text-pure-white mb-3">{expertise.title}</h3>
                <p className="text-body-rg text-concrete-grey">{expertise.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="font-archivo text-2xl text-pure-white mb-8">Nos certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-6 rounded-lg bg-white/5 text-center">
                <p className="font-archivo text-pure-white mb-1">{cert.name}</p>
                <p className="text-caption text-concrete-grey">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
