import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/a-propos' },
  { label: 'Nos Métiers', path: '/nos-metiers' },
  { label: 'Expertises', path: '/nos-expertises' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-asphalt-grey w-full">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 md:mb-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo-terrestructure-alt.svg"
                alt="Terre & Structure"
                className="h-12 md:h-16"
              />
            </Link>
            <p className="text-concrete-grey font-open-sans text-body-rg mt-4 max-w-xs">
              Entreprise générale de BTP - Construction, rénovation et génie civil depuis 1847.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-open-sans text-body-lg text-concrete-grey hover:text-pure-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Middle - Certifications Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 md:mb-24 py-8 border-t border-b border-white/10">
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange/10">
              <svg viewBox="0 0 48 48" className="w-12 h-12 text-concrete-grey group-hover:text-pure-white transition-colors duration-300" fill="currentColor">
                <path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.5l14 7.8v15.4l-14 7.8-14-7.8V16.3l14-7.8z"/>
                <path d="M16 22l6 6 10-10-1.4-1.4-8.6 8.6-4.6-4.6L16 22z"/>
              </svg>
            </div>
            <span className="text-caption uppercase tracking-wider text-concrete-grey text-center">Qualibat<br/>1112 / 1312</span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange/10">
              <svg viewBox="0 0 48 48" className="w-12 h-12 text-concrete-grey group-hover:text-pure-white transition-colors duration-300" fill="currentColor">
                <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"/>
                <path d="M15 24h4v8h-4zM22 18h4v14h-4zM29 21h4v11h-4z"/>
              </svg>
            </div>
            <span className="text-caption uppercase tracking-wider text-concrete-grey text-center">RGE<br/>Eco-artisan</span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange/10">
              <svg viewBox="0 0 48 48" className="w-12 h-12 text-concrete-grey group-hover:text-pure-white transition-colors duration-300" fill="currentColor">
                <path d="M24 4L4 14v4l20 10 20-10v-4L24 4zm0 28L8 24l-4 2 20 10 20-10-4-2-16 8z"/>
              </svg>
            </div>
            <span className="text-caption uppercase tracking-wider text-concrete-grey text-center">ISO 9001<br/>Certifié qualité</span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange/10">
              <svg viewBox="0 0 48 48" className="w-12 h-12 text-concrete-grey group-hover:text-pure-white transition-colors duration-300" fill="currentColor">
                <path d="M24 4l-6 3v7c0 5.55 2.55 10.74 6 14 3.45-3.26 6-8.45 6-14V7l-6-3zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M12 26v6h4v-6c0-4.42 3.58-8 8-8s8 3.58 8 8v6h4v-6c0-6.62-5.38-12-12-12S12 19.38 12 26z"/>
                <path d="M8 36h32v4H8z"/>
              </svg>
            </div>
            <span className="text-caption uppercase tracking-wider text-concrete-grey text-center">MASE<br/>Sécurité certifiée</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Legal badge */}
          <div className="flex items-center gap-6">
            <Link
              to="/mentions-legales"
              className="text-caption uppercase tracking-wider text-concrete-grey border border-steel rounded-full px-4 py-1 hover:text-pure-white hover:border-pure-white transition-colors duration-200"
            >
              Mentions Légales
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1 text-caption text-concrete-grey text-center md:text-right">
            <p>Terre &amp; Structure, all rights reserved</p>
            <p>Rue Gédéon Darchambeau 23A, 5002 Saint-Servais - NDA BE0420.513.263</p>
            <p>
              <Link to="/contact" className="underline hover:text-pure-white transition-colors">Contact us by mail</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
