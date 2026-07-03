const stats = [
  { value: '1847', label: 'Annee de fondation' },
  { value: '178', label: 'Ans d\'experience' },
  { value: '320', label: 'Collaborateurs' },
  { value: '450+', label: 'Chantiers livres' },
]

const values = [
  { title: 'Exigence', desc: 'Une qualite d\'execution irreprochable sur chaque chantier.' },
  { title: 'Securite', desc: 'La protection de nos equipes avant toute chose.' },
  { title: 'Innovation', desc: 'L\'adoption continue de nouvelles techniques et materiaux.' },
  { title: 'Proximite', desc: 'Une relation de confiance durable avec chaque client.' },
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

          {/* Leadership */}
          <h2 className="font-archivo text-2xl text-pure-white mb-8">Direction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['Philippe Henrard — Directeur General', 'Anne Delacroix — Directrice Technique', 'Marc Vandenberg — Directeur QSE'].map((leader) => (
              <div key={leader} className="p-6 rounded-lg bg-white/5 text-center">
                <p className="font-archivo text-pure-white">{leader}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
