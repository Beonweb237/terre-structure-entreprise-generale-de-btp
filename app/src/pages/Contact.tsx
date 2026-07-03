import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, HelpCircle } from 'lucide-react'

const contacts = [
  { service: 'Service Commercial / Devis', phone: '+32 81 00 00 01' },
  { service: 'Service Apres-Vente', phone: '+32 81 00 00 02' },
  { service: 'Ressources Humaines', phone: '+32 81 00 00 03' },
]

const interventionZones = ['Namur', 'Liege', 'Bruxelles', 'Luxembourg', 'Hainaut']

const faqs = [
  { q: 'Le devis est-il gratuit ?', a: 'Oui, toute demande de devis est gratuite et sans engagement.' },
  { q: 'En combien de temps recevez-vous une reponse ?', a: 'Notre equipe commerciale s\'engage a vous repondre sous 48 heures ouvrees.' },
  { q: 'Intervenez-vous en dehors de Namur ?', a: 'Oui, nous intervenons dans toute la Wallonie et a Bruxelles, voir nos zones ci-contre.' },
  { q: 'Puis-je visiter un chantier en cours ?', a: 'Sur demande et sous reserve des contraintes de securite, nous organisons volontiers des visites.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
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
            Contact
          </p>
          <h1 className="font-archivo text-heading-lg text-pure-white mb-6 max-w-[720px]">
            Demandez votre devis gratuit
          </h1>
          <p className="text-body-lg text-concrete-grey max-w-[640px] mb-16">
            Notre equipe commerciale vous repond sous 48h pour etudier votre projet.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {sent ? (
                <div className="p-6 rounded-lg bg-safety-orange/10 text-pure-white">
                  Votre demande a bien ete envoyee. Nous revenons vers vous rapidement.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nom complet"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Type de projet (construction, renovation...)"
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange"
                  />
                  <textarea
                    placeholder="Decrivez votre projet"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg outline-none text-pure-white focus:border-safety-orange resize-none"
                  />
                  <button
                    type="submit"
                    className="h-12 px-8 bg-safety-orange text-midnight-black font-semibold rounded-lg hover:bg-warning-yellow transition-colors duration-250"
                  >
                    Demander un devis
                  </button>
                </form>
              )}

              {/* Map placeholder */}
              <div className="mt-10 aspect-[16/9] rounded-lg bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-safety-orange mx-auto mb-2" />
                  <p className="text-body-rg text-concrete-grey text-sm">Rue Gedeon Darchambeau 23A, 5002 Saint-Servais</p>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-10">
                <h2 className="font-archivo text-2xl text-pure-white mb-6 flex items-center gap-2">
                  <HelpCircle size={22} className="text-safety-orange" />
                  Questions frequentes
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="p-4 rounded-lg bg-white/5">
                      <p className="font-archivo text-pure-white text-sm mb-1">{faq.q}</p>
                      <p className="text-body-rg text-concrete-grey text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white/5">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-safety-orange mt-0.5 shrink-0" />
                  <div>
                    <p className="font-archivo text-pure-white">Siege Social</p>
                    <p className="text-body-rg text-concrete-grey">Rue Gedeon Darchambeau 23A, 5002 Saint-Servais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Phone size={20} className="text-safety-orange mt-0.5 shrink-0" />
                  <p className="text-body-rg text-concrete-grey">+32 81 00 00 00</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-safety-orange mt-0.5 shrink-0" />
                  <p className="text-body-rg text-concrete-grey">contact@terre-structure.be</p>
                </div>
              </div>

              <div>
                <h3 className="font-archivo text-lg text-pure-white mb-3">Coordonnees par service</h3>
                <div className="space-y-2">
                  {contacts.map((c) => (
                    <div key={c.service} className="flex justify-between text-sm p-3 rounded-lg bg-white/5">
                      <span className="text-concrete-grey">{c.service}</span>
                      <span className="text-pure-white">{c.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} className="text-safety-orange" />
                  <h3 className="font-archivo text-pure-white">Delai de reponse garanti</h3>
                </div>
                <p className="text-body-rg text-concrete-grey text-sm">
                  Reponse sous 48h ouvrees pour toute demande de devis.
                </p>
              </div>

              <div>
                <h3 className="font-archivo text-lg text-pure-white mb-3">Zones d'intervention</h3>
                <div className="flex flex-wrap gap-2">
                  {interventionZones.map((zone) => (
                    <span key={zone} className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-concrete-grey">
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
