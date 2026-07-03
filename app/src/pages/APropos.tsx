import { Leaf } from 'lucide-react'

const stats = [
  { value: '1847', label: 'Annee de fondation' },
  { value: '178', label: 'Ans d\'experience' },
  { value: '320', label: 'Collaborateurs' },
  { value: '450+', label: 'Chantiers livres' },
]

const timeline = [
  { year: '1847', event: 'Fondation de l\'entreprise par Jean-Baptiste Henrard, artisan macon a Saint-Servais.' },
  { year: '1920', event: 'Premiere generation de mecanisation, acquisition des premiers engins de chantier.' },
  { year: '1965', event: 'Diversification vers le genie civil et les ouvrages d\'art.' },
  { year: '1998', event: 'Obtention de la certification ISO 9001, structuration du bureau d\'etudes interne.' },
  { year: '2015', event: 'Deploiement du BIM sur l\'ensemble des projets de construction neuve.' },
  { year: '2025', event: '178 ans d\'existence, 450+ chantiers livres, 320 collaborateurs.' },
]

const values = [
  { title: 'Exigence', desc: 'Une qualite d\'execution irreprochable sur chaque chantier.' },
  { title: 'Securite', desc: 'La protection de nos equipes avant toute chose.' },
  { title: 'Innovation', desc: 'L\'adoption continue de nouvelles techniques et materiaux.' },
  { title: 'Proximite', desc: 'Une relation de confiance durable avec chaque client.' },
]

const leadership = [
  { name: 'Philippe Henrard', role: 'Directeur General', bio: 'Sixieme generation a la tete de l\'entreprise familiale, Philippe Henrard perpetue l\'exigence artisanale tout en modernisant les outils de production.' },
  { name: 'Anne Delacroix', role: 'Directrice Technique', bio: 'Ingenieure genie civil de formation, Anne pilote le bureau d\'etudes interne et l\'integration des technologies BIM depuis 2015.' },
  { name: 'Marc Vandenberg', role: 'Directeur QSE', bio: 'Fort de 20 ans d\'experience terrain, Marc porte la politique zero accident et les certifications qualite de l\'entreprise.' },
]

export default function APropos() {
  return (
    <div className="pt-20 min-h-[100dvh] bg-midnight-black">
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="font-archivo text-safety-orange text-sm uppercase tracking-[0.15em] mb-4">
            A Propos
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Notre histoire depuis 1847
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Terre &amp; Structure est une entreprise generale de BTP fondee a Saint-Servais,
            transmise de generation en generation. Aujourd'hui, nous restons fideles a nos
            valeurs d'origine tout en integrant les techniques de construction les plus modernes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 py-10 border-y border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-archivo text-3xl sm:text-4xl text-safety-orange mb-1">{stat.value}</p>
                <p className="text-caption text-concrete-grey">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-archivo text-2xl text-pure-white mb-8">Notre parcours</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <span className="font-archivo text-2xl text-safety-orange shrink-0 w-20">{item.year}</span>
                  <p className="text-body-rg text-concrete-grey pl-6 border-l border-white/10">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <h2 className="font-archivo text-2xl text-pure-white mb-8">Nos valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-white/10">
                <h3 className="font-archivo text-lg text-pure-white mb-2">{value.title}</h3>
                <p className="text-body-rg text-concrete-grey">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Environmental responsibility */}
          <div className="mb-20 p-8 rounded-lg bg-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={24} className="text-safety-orange" />
              <h2 className="font-archivo text-2xl text-pure-white">Responsabilite environnementale</h2>
            </div>
            <p className="text-body-rg text-concrete-grey max-w-[720px]">
              Terre &amp; Structure s'engage dans une demarche bas carbone : materiaux biosources
              privilegies, valorisation de 85% des dechets de chantier, et objectif de neutralite
              carbone sur nos chantiers d'ici 2030. Nous accompagnons egalement nos clients vers
              des constructions labellisees RE2020 et HQE.
            </p>
          </div>

          {/* Leadership */}
          <h2 className="font-archivo text-2xl text-pure-white mb-8">Direction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {leadership.map((leader) => (
              <div key={leader.name} className="p-6 rounded-lg bg-white/5">
                <p className="font-archivo text-lg text-pure-white mb-1">{leader.name}</p>
                <p className="text-caption text-safety-orange mb-3">{leader.role}</p>
                <p className="text-body-rg text-concrete-grey text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
