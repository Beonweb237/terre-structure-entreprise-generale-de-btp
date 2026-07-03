import { Award, Shield, Cpu, ClipboardCheck } from 'lucide-react'

const methodologySteps = [
  { step: '01', title: 'Etude & Faisabilite', desc: 'Analyse du terrain, du programme et du budget pour valider la faisabilite technique et financiere.' },
  { step: '02', title: 'Conception', desc: 'Elaboration des plans avec notre bureau d\'etudes interne, modelisation BIM en 3D.' },
  { step: '03', title: 'Planification', desc: 'Etablissement du planning previsionnel, coordination des corps d\'etat et des approvisionnements.' },
  { step: '04', title: 'Realisation', desc: 'Execution du chantier avec suivi qualite et securite quotidien, reporting client regulier.' },
  { step: '05', title: 'Livraison & SAV', desc: 'Reception des travaux, levee des reserves et suivi en garantie de parfait achevement.' },
]

const technologies = ['Logiciel BIM Revit', 'Suivi de chantier numerique PlanRadar', 'Drones de releve topographique', 'Capteurs IoT de suivi structure', 'Plateforme collaborative client']

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

          {/* Methodology */}
          <div className="mb-20">
            <h2 className="font-archivo text-2xl text-pure-white mb-8">Notre methodologie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {methodologySteps.map((step) => (
                <div key={step.step} className="p-6 rounded-lg bg-white/5">
                  <p className="font-archivo text-3xl text-safety-orange mb-3">{step.step}</p>
                  <h3 className="font-archivo text-lg text-pure-white mb-2">{step.title}</h3>
                  <p className="text-body-rg text-concrete-grey text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="font-archivo text-2xl text-pure-white mb-8">Technologies & outils</h2>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <span key={tech} className="px-5 py-3 rounded-lg bg-white/5 text-body-rg text-concrete-grey">
                  {tech}
                </span>
              ))}
            </div>
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
