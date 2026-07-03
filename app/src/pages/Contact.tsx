import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const contacts = [
  { service: 'Service Commercial / Devis', phone: '+32 81 00 00 01' },
  { service: 'Service Apres-Vente', phone: '+32 81 00 00 02' },
  { service: 'Ressources Humaines', phone: '+32 81 00 00 03' },
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
