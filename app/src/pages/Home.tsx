import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────────────────────
   Home Page — Terre & Structure
   All sections per design/home.md
   ────────────────────────────────────────────── */

/* ═══════════ HERO SECTION ═══════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background scale animation
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.5, ease: 'power2.out' }
      )

      // Content staggered reveal
      const elements = contentRef.current?.querySelectorAll('.hero-anim')
      if (elements) {
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'expo.out',
            delay: 0.2,
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/boulangerie-henrard.jpg)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32 w-full">
        <div ref={contentRef} className="max-w-2xl">
          {/* Label */}
          <p className="hero-anim font-archivo text-heading-lg text-pure-white uppercase mb-2">
            Rénovation Intérieure
          </p>

          {/* Title */}
          <h1 className="hero-anim font-archivo text-heading-lg md:text-display-sm text-pure-white uppercase mb-6">
            Boulangerie Pâtisserie Henrard
          </h1>

          {/* Description */}
          <p className="hero-anim font-open-sans text-body-lg text-white/70 mb-8 max-w-lg">
            Notre client souhaitait transformer la boulangerie d'Henrard et la rénover afin de lui donner un aspect plus moderne et plus frais.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="hero-anim inline-block bg-safety-orange text-midnight-black font-open-sans font-semibold text-body-rg uppercase px-8 py-4 rounded-btn hover:bg-warning-yellow transition-colors duration-250"
          >
            Demander un Devis
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════ NOS METIERS SECTION ═══════════ */
const tradesData = [
  { word: 'RENOVATION', badge: null, caption: null, image: null },
  { word: 'FINITIONS', badge: 'Finitions', caption: null, image: 'finitions-1.jpg' },
  { word: 'CHARPENTE', badge: 'Charpente', caption: null, image: 'charpente-1.jpg' },
  { word: 'CHAUFFAGE', badge: null, caption: null, image: null },
  { word: null, badge: null, caption: 'revêtements, façades', image: 'finitions-2.jpg' },
  { word: 'CHAUFFAGE', badge: null, caption: null, image: null },
  { word: 'MENUISERIE', badge: null, caption: 'bois, alu et PVC', image: 'charpente-2.jpg' },
  { word: 'ELECTRICITE', badge: null, caption: null, image: null },
  { word: 'MAÇONNERIE', badge: null, caption: 'maçonnerie, couverture, terrassement', image: 'gros-oeuvre-1.jpg' },
  { word: null, badge: null, caption: "bureau d'étude", image: 'gros-oeuvre-2.jpg' },
  { word: 'GENIE CIVIL', badge: null, caption: null, image: null },
  { word: 'CARRIERE', badge: null, caption: null, image: null },
  { word: 'QUINCAILLERIE', badge: null, caption: null, image: 'dalle-plancher.jpg' },
]

function NosMetiersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<(HTMLDivElement | null)[]>([])
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line animation
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          }
        )
      }

      // Words animation
      wordsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0.3, color: '#656565' },
          {
            opacity: 1,
            color: '#FFFFFF',
            duration: 0.3,
            scrollTrigger: {
              trigger: el,
              start: 'top 60%',
              end: 'top 40%',
              scrub: true,
            },
          }
        )

        // Staggered slide-in
        gsap.fromTo(
          el,
          { y: (i % 2 === 0 ? -30 : 30), opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Image parallax
      imagesRef.current.forEach((img, i) => {
        if (!img) return
        const speed = 0.5 + (i % 3) * 0.3
        gsap.to(img, {
          y: -80 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const activeImages = tradesData.filter((t) => t.image).map((t) => t.image as string)

  return (
    <section
      ref={sectionRef}
      className="relative bg-midnight-black py-32 md:py-48 overflow-hidden"
    >
      {/* Background parallax images */}
      <div className="absolute inset-0 pointer-events-none">
        {activeImages.map((img, i) => (
          <img
            key={img}
            ref={(el) => { imagesRef.current[i] = el }}
            src={`/${img}`}
            alt=""
            className="absolute w-48 md:w-64 lg:w-80 h-auto rounded-card opacity-20"
            style={{
              top: `${15 + i * 25}%`,
              left: i % 2 === 0 ? '5%' : 'auto',
              right: i % 2 !== 0 ? '5%' : 'auto',
              transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
            }}
          />
        ))}
      </div>

      {/* Center line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-white/10 -translate-x-1/2">
        <div
          ref={progressRef}
          className="absolute inset-x-0 top-0 bg-safety-orange origin-top"
          style={{ height: '100%' }}
        />
      </div>

      {/* Words */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {tradesData.map((item, i) => (
          <div
            key={`${item.word || item.caption}-${i}`}
            ref={(el) => { wordsRef.current[i] = el }}
            className={`flex items-center gap-4 mb-12 md:mb-16 ${
              i % 2 === 0 ? 'justify-start md:pr-24' : 'justify-end md:pl-24'
            }`}
          >
            {item.word && (
              <span className="font-archivo text-display-sm md:text-display-lg text-concrete-grey uppercase tracking-tight">
                {item.word}
              </span>
            )}
            {item.badge && (
              <span className="bg-safety-orange text-midnight-black font-open-sans text-caption font-semibold uppercase px-4 py-1 rounded-badge whitespace-nowrap">
                {item.badge}
              </span>
            )}
            {item.caption && (
              <span className="font-open-sans text-body-rg text-blueprint-blue italic">
                {item.caption}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════ PROJECTS CAROUSEL SECTION ═══════════ */
const projects = [
  { title: 'Projet Logement', image: 'proj-logement.jpg', location: 'Namur', year: '2023', categories: ['Génie civil', 'Prestataire'] },
  { title: 'Projet Industriel', image: 'proj-industriel.jpg', location: 'Liège', year: '2023', categories: ['Génie civil', 'Finitions', 'Finances'] },
  { title: 'Projet Infrastructure', image: 'proj-infrastructure.jpg', location: 'Charleroi', year: '2022', categories: ['Finitions'] },
  { title: 'Projet Parking', image: 'proj-parking.jpg', location: 'Bruxelles', year: '2024', categories: ['Finances'] },
]

function NosRealisationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card reveal animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Scroll progress tracking
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      if (max > 0) setProgress(el.scrollLeft / max)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollBy = (dir: number) => {
    const el = scrollContainerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="bg-asphalt-grey py-24 md:py-32">
      {/* Header */}
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="flex items-center justify-between">
          <h2 className="font-archivo text-display-lg text-pure-white uppercase tracking-tight">
            Nos Réalisations
          </h2>
          <Link
            to="/nos-realisations"
            className="hidden md:flex items-center gap-2 font-open-sans text-body-lg text-safety-orange hover:text-warning-yellow transition-colors duration-200"
          >
            Voir tout <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative group">
        {/* Nav buttons */}
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-pure-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-safety-orange"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-pure-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-safety-orange"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-20 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => { cardsRef.current[i] = el }}
              className="flex-shrink-0 w-80 md:w-96 snap-start group/card cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-card">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-400 group-hover/card:scale-105"
                  />
                </div>

                {/* Metadata overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur text-pure-white font-open-sans text-caption uppercase px-3 py-1 rounded-full">
                    {project.location}
                  </span>
                  <span className="bg-black/60 backdrop-blur text-pure-white font-open-sans text-caption uppercase px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16">
                  <h3 className="font-archivo text-heading-sm text-pure-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-open-sans text-caption text-pure-white/80 border border-white/30 px-2 py-0.5 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20 mt-8">
        <div className="h-1 bg-steel/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-safety-orange transition-all duration-300 rounded-full"
            style={{ width: `${Math.max(10, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
}

/* ═══════════ KEY NUMBERS SECTION ═══════════ */
const stats = [
  { number: '150+', label: 'CHANTIERS', desc: "Menés à bien chaque année.", suffix: '+' },
  { number: '1', label: 'EXPLOITATION', desc: "Permettant d'extraire nos roches à moindre coût.", suffix: '' },
  { number: '1847', label: 'ANNEE DE CREATION', desc: 'De notre société.', suffix: '' },
  { number: '10.7M', label: 'CA EN 2024', desc: "À l'échelle de notre société.", suffix: 'M' },
  { number: '50', label: 'TRAVAILLEURS', desc: "Au sein de notre entreprise.", suffix: '' },
]

function AnimatedCounter({ target, suffix }: { target: string; suffix: string }) {
  const [count, setCount] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''))
          const prefix = target.match(/^[^0-9]*/)?.[0] || ''
          const duration = 1500
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out expo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const current = numericValue * eased

            if (Number.isInteger(numericValue)) {
              setCount(Math.floor(current).toString())
            } else {
              setCount(current.toFixed(1))
            }

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target.replace(prefix, '').replace(suffix, ''))
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  const prefix = target.match(/^[^0-9]*/)?.[0] || ''

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

function ChiffresSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftImageRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left image slide-in
      if (leftImageRef.current) {
        gsap.fromTo(
          leftImageRef.current,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: leftImageRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Stats cards stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-midnight-black py-24 md:py-32 lg:py-40">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20">
        {/* Split view */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 mb-20 lg:mb-32">
          {/* Left - Image (40%) */}
          <div ref={leftImageRef} className="lg:w-2/5">
            <div className="relative overflow-hidden rounded-card aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-[500px]">
              <img
                src="/chiffres-terrassement.jpg"
                alt="Exploitation de carrière"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text (60%) */}
          <div className="lg:w-3/5 lg:pl-16 flex flex-col justify-center">
            <span className="font-open-sans text-caption text-blueprint-blue uppercase tracking-wider mb-4">
              Notre activité principale
            </span>
            <h2 className="font-archivo text-heading-lg text-pure-white uppercase mb-6">
              Exploitation de Carrière
            </h2>
            <p className="font-open-sans text-body-rg text-white/70 max-w-lg mb-8">
              Le but de notre carrière est d'extraire la roche, de la concasser puis de la livrer sur chantier. Nous sommes maîtres dans l'extraction de nos pierres grâce à nos carrières de calcaire présentes à différents endroits de la Wallonie.
            </p>
            <span className="font-archivo text-display-xl text-pure-white tracking-tighter lg:text-right">
              <AnimatedCounter target="1847" suffix="" />
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { cardsRef.current[i] = el }}
              className="bg-asphalt-grey rounded-card p-6 md:p-8 text-center group hover:bg-white/5 transition-colors duration-300"
            >
              <span className="font-archivo text-display-sm text-pure-white block mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </span>
              <span className="font-open-sans text-caption uppercase tracking-wider text-safety-orange block mb-2">
                {stat.label}
              </span>
              <p className="font-open-sans text-body-rg text-white/50">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════ CERTIFICATIONS BANNER ═══════════ */
const certifications = [
  {
    name: 'Qualibat',
    desc: 'Qualification 1112 / 1312',
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.5l14 7.8v15.4l-14 7.8-14-7.8V16.3l14-7.8z"/>
        <path d="M16 22l6 6 10-10-1.4-1.4-8.6 8.6-4.6-4.6L16 22z"/>
      </svg>
    ),
  },
  {
    name: 'RGE',
    desc: "Eco-artisan reconnu",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"/>
        <path d="M15 24h4v8h-4zM22 18h4v14h-4zM29 21h4v11h-4z"/>
      </svg>
    ),
  },
  {
    name: 'ISO 9001',
    desc: 'Certifié qualité',
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
        <path d="M24 4L4 14v4l20 10 20-10v-4L24 4zm0 28L8 24l-4 2 20 10 20-10-4-2-16 8z"/>
      </svg>
    ),
  },
  {
    name: 'MASE',
    desc: 'Sécurité certifiée',
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="currentColor">
        <path d="M24 4l-6 3v7c0 5.55 2.55 10.74 6 14 3.45-3.26 6-8.45 6-14V7l-6-3zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        <path d="M12 26v6h4v-6c0-4.42 3.58-8 8-8s8 3.58 8 8v6h4v-6c0-6.62-5.38-12-12-12S12 19.38 12 26z"/>
        <path d="M8 36h32v4H8z"/>
      </svg>
    ),
  },
]

function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Items stagger
      itemsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'expo.out',
            delay: 0.1 * (i + 1),
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-asphalt-grey diagonal-stripes py-10 md:py-12"
    >
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-8 md:gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              ref={(el) => { itemsRef.current[i] = el }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-concrete-grey group-hover:text-pure-white group-hover:border-safety-orange transition-all duration-300">
                {cert.svg}
              </div>
              <div>
                <span className="font-archivo text-body-rg text-pure-white block">
                  {cert.name}
                </span>
                <span className="font-open-sans text-caption text-concrete-grey group-hover:text-white/70 transition-colors duration-300">
                  {cert.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════ QUOTE CTA SECTION ═══════════ */
function QuoteCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll('.cta-anim')
      if (elements) {
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Parallax on background
      const bg = sectionRef.current?.querySelector('.cta-bg')
      if (bg) {
        gsap.to(bg, {
          y: '-15%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center"
    >
      {/* Background with parallax */}
      <div className="cta-bg absolute inset-0 w-full h-[130%] -top-[15%]">
        <img
          src="/contact-chantier.jpg"
          alt="Chantier"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <h2 className="cta-anim font-archivo text-heading-lg md:text-display-sm text-pure-white uppercase mb-4">
          Un Projet de Construction ou de Rénovation ?
        </h2>
        <p className="cta-anim font-open-sans text-body-lg text-white/70 mb-8 max-w-xl mx-auto">
          Demandez votre devis gratuitement en quelques clics. Notre équipe vous répond sous 48h.
        </p>
        <Link
          to="/contact"
          className="cta-anim inline-block bg-safety-orange text-midnight-black font-open-sans font-semibold text-body-rg uppercase px-12 py-4 rounded-btn hover:bg-warning-yellow transition-colors duration-250"
        >
          Demander un Devis
        </Link>
      </div>
    </section>
  )
}

/* ═══════════ MAIN HOME PAGE ═══════════ */
export default function Home() {
  return (
    <div className="bg-midnight-black">
      <HeroSection />
      <NosMetiersSection />
      <NosRealisationsSection />
      <ChiffresSection />
      <CertificationsSection />
      <QuoteCTASection />
    </div>
  )
}
