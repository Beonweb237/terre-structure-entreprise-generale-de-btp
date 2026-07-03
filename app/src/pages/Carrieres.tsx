import { useState } from 'react'
import { MapPin, Briefcase, Send } from 'lucide-react'

const offers = [
  { title: 'Chef de Chantier Gros OEuvre', location: 'Saint-Servais', type: 'CDI' },
  { title: 'Conducteur de Travaux', location: 'Saint-Servais', type: 'CDI' },
  { title: 'Ingenieur BIM', location: 'Namur', type: 'CDI' },
  { title: 'Macon Qualifie', location: 'Saint-Servais', type: 'CDI' },
  { title: 'Assistant QSE', location: 'Namur', type: 'CDD' },
]

const benefits = [
  'Formation continue et certifications prises en charge',
  'Vehicule de fonction pour les postes terrain',
  'Mutuelle et prevoyance avantageuses',
  'Evolution interne valorisee',
]

export default function Carrieres() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-20 min-h-[100dvh] bg-midnight-black">
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="font-archivo text-safety-orange text-sm uppercase tracking-[0.15em] mb-4">
            Carrieres
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Construisez votre avenir avec nous
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Depuis 1847, nous formons et faisons grandir des generations de batisseurs.
            Rejoignez une entreprise qui valorise le savoir-faire et l'evolution de carriere.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-archivo text-2xl text-pure-white mb-6">Offres ouvertes</h2>
              <div className="space-y-3 mb-12">
                {offers.map((offer) => (
                  <div
                    key={offer.title}
                    className="flex items-center justify-between gap-4 p-5 rounded-lg border border-white/10 hover:border-safety-orange transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <Briefcase size={20} className="text-safety-orange shrink-0" />
                      <div>
                        <p className="font-archivo text-pure-white">{offer.title}</p>
                        <p className="text-caption text-concrete-grey flex items-center gap-1">
                          <MapPin size={12} />
                          {offer.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-safety-orange/10 text-safety-orange shrink-0">
                      {offer.type}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="font-archivo text-2xl text-pure-white mb-6">Candidature spontanee</h2>
              {sent ? (
                <div className="p-6 rounded-lg bg-safety-orange/10 text-pure-white">
                  Votre candidature a bien ete envoyee. Notre equipe RH vous recontactera.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange"
                  />
                  <textarea
                    placeholder="Votre message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 h-12 px-8 bg-safety-orange text-midnight-black font-semibold rounded-lg hover:bg-warning-yellow transition-colors duration-250"
                  >
                    <Send size={16} />
                    Envoyer ma candidature
                  </button>
                </form>
              )}
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-lg bg-white/5 h-fit">
              <h3 className="font-archivo text-xl text-pure-white mb-6">Pourquoi nous rejoindre</h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="text-body-rg text-concrete-grey pl-4 border-l-2 border-safety-orange">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
