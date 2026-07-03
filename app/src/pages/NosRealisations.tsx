import { useState } from 'react'
import { Quote } from 'lucide-react'

const featuredProjects = [
  {
    image: '/boulangerie-henrard.jpg',
    name: 'Boulangerie Henrard',
    type: 'Tertiaire',
    year: '2024',
    budget: '480 K€',
    duration: '6 mois',
    desc: 'Construction complete d\'une boulangerie artisanale avec laboratoire de production, incluant l\'ensemble des reseaux techniques specifiques a l\'agroalimentaire.',
    testimonial: 'Une equipe reactive qui a su respecter nos delais serres malgre la complexite des installations frigorifiques.',
    client: 'Famille Henrard',
  },
  {
    image: '/boulangerie-henrard.jpg',
    name: 'Residence Les Terrasses',
    type: 'Residentiel',
    year: '2023',
    budget: '3,2 M€',
    duration: '18 mois',
    desc: 'Livraison de 42 logements repartis sur 4 batiments, avec espaces verts partages et parking souterrain, labellises RE2020.',
    testimonial: 'Terre & Structure a livre un ensemble residentiel de grande qualite, dans le respect strict du cahier des charges environnemental.',
    client: 'Promoteur Habitat Sud',
  },
  {
    image: '/boulangerie-henrard.jpg',
    name: 'Pont de la Riviere',
    type: 'Genie civil',
    year: '2021',
    budget: '2,8 M€',
    duration: '14 mois',
    desc: 'Reconstruction d\'un pont routier de 45 metres, avec maintien de la circulation locale grace a un phasage de chantier optimise.',
    testimonial: 'Un chantier complexe mene avec rigueur, sans aucune interruption majeure de la circulation.',
    client: 'Conseil Departemental',
  },
]

const projects = [
  { image: '/boulangerie-henrard.jpg', name: 'Boulangerie Henrard', type: 'Tertiaire', year: '2024' },
  { image: '/boulangerie-henrard.jpg', name: 'Residence Les Terrasses', type: 'Residentiel', year: '2023' },
  { image: '/boulangerie-henrard.jpg', name: 'Entrepot Logistique Nord', type: 'Industriel', year: '2023' },
  { image: '/boulangerie-henrard.jpg', name: 'Ecole Jean Moulin', type: 'Tertiaire', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Renovation Hotel de Ville', type: 'Renovation', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Pont de la Riviere', type: 'Genie civil', year: '2021' },
  { image: '/boulangerie-henrard.jpg', name: 'Immeuble de Bureaux Riverside', type: 'Tertiaire', year: '2024' },
  { image: '/boulangerie-henrard.jpg', name: 'Lotissement Les Vergers', type: 'Residentiel', year: '2023' },
  { image: '/boulangerie-henrard.jpg', name: 'Plateforme Logistique Est', type: 'Industriel', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Rehabilitation Cite Ouvriere', type: 'Renovation', year: '2021' },
  { image: '/boulangerie-henrard.jpg', name: 'Giratoire Route Nationale', type: 'Genie civil', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Complexe Sportif Municipal', type: 'Tertiaire', year: '2021' },
]

const types = ['Tous', 'Residentiel', 'Tertiaire', 'Industriel', 'Renovation', 'Genie civil']
const years = ['Toutes', '2024', '2023', '2022', '2021']

export default function NosRealisations() {
  const [activeType, setActiveType] = useState('Tous')
  const [activeYear, setActiveYear] = useState('Toutes')

  const filtered = projects.filter((p) => {
    const matchesType = activeType === 'Tous' || p.type === activeType
    const matchesYear = activeYear === 'Toutes' || p.year === activeYear
    return matchesType && matchesYear
  })

  return (
    <div className="pt-20 min-h-[100dvh] bg-midnight-black">
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="font-archivo text-safety-orange text-sm uppercase tracking-[0.15em] mb-4">
            Nos Realisations
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Des chantiers qui parlent d'eux-memes
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Decouvrez une selection de nos projets recents, du residentiel au genie civil.
          </p>

          {/* Featured case studies */}
          <div className="mb-20">
            <h2 className="font-archivo text-2xl text-pure-white mb-8">Etudes de cas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.name} className="rounded-lg overflow-hidden border border-white/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-safety-orange text-midnight-black text-xs font-semibold uppercase px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-archivo text-xl text-pure-white mb-2">{project.name}</h3>
                    <p className="text-body-rg text-concrete-grey text-sm mb-4">{project.desc}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-white/10">
                      <div>
                        <p className="text-xs text-concrete-grey/60">Budget</p>
                        <p className="font-archivo text-safety-orange">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-concrete-grey/60">Duree</p>
                        <p className="font-archivo text-safety-orange">{project.duration}</p>
                      </div>
                    </div>
                    <Quote size={16} className="text-safety-orange mb-2" />
                    <p className="text-body-rg text-concrete-grey text-sm italic mb-2">"{project.testimonial}"</p>
                    <p className="text-xs text-concrete-grey/60">{project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full gallery with filters */}
          <h2 className="font-archivo text-2xl text-pure-white mb-6">Galerie complete</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2 rounded-full text-sm font-open-sans font-medium transition-colors duration-200 ${
                  activeType === type
                    ? 'bg-safety-orange text-midnight-black'
                    : 'border border-white/20 text-concrete-grey hover:border-safety-orange'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-1.5 rounded-full text-xs font-open-sans font-medium transition-colors duration-200 ${
                  activeYear === year
                    ? 'bg-white/20 text-pure-white'
                    : 'border border-white/10 text-concrete-grey/70 hover:border-white/30'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.name} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-safety-orange text-midnight-black text-xs font-semibold uppercase px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-archivo text-lg text-pure-white mb-1">{project.name}</h3>
                <p className="text-body-rg text-concrete-grey">{project.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
