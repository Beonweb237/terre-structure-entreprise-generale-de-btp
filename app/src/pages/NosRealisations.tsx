import { useState } from 'react'

const projects = [
  { image: '/boulangerie-henrard.jpg', name: 'Boulangerie Henrard', type: 'Tertiaire', year: '2024' },
  { image: '/boulangerie-henrard.jpg', name: 'Residence Les Terrasses', type: 'Residentiel', year: '2023' },
  { image: '/boulangerie-henrard.jpg', name: 'Entrepot Logistique Nord', type: 'Industriel', year: '2023' },
  { image: '/boulangerie-henrard.jpg', name: 'Ecole Jean Moulin', type: 'Tertiaire', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Renovation Hotel de Ville', type: 'Renovation', year: '2022' },
  { image: '/boulangerie-henrard.jpg', name: 'Pont de la Riviere', type: 'Genie civil', year: '2021' },
]

const types = ['Tous', 'Residentiel', 'Tertiaire', 'Industriel', 'Renovation', 'Genie civil']

export default function NosRealisations() {
  const [activeType, setActiveType] = useState('Tous')

  const filtered = projects.filter((p) => activeType === 'Tous' || p.type === activeType)

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
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-10">
            Decouvrez une selection de nos projets recents, du residentiel au genie civil.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
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
