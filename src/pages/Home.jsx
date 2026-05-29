import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay },
})

const NAV_CARDS = [
  {
    href: '/work',
    num: '01',
    title: 'Work',
    desc: "Experience, projects, and what I've built professionally.",
  },
  {
    href: '/photos',
    num: '02',
    title: 'Photos',
    desc: 'Landscapes and streets, shot on a Fujifilm X-T50.',
  },
  {
    href: '/writing',
    num: '03',
    title: 'Writing',
    desc: 'Notes on data, travel, books, and things I find interesting.',
  },
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/sir_vp', label: 'Instagram', handle: '@sir_vp' },
  { href: 'https://linkedin.com/in/vpvishnuprasad', label: 'LinkedIn', handle: 'Vishnu Prasad' },
  { href: 'https://github.com/sirvp', label: 'GitHub', handle: '@sirvp' },
]

export default function Home() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div className="hero__inner">
            <motion.p className="hero__eyebrow label" {...fadeUp(0.1)}>
              Data Lead &middot; Photographer &middot; Writer
            </motion.p>

            <motion.h1 className="hero__name" {...fadeUp(0.2)}>
              Vishnu
              <br />
              <em>Prasad</em>
            </motion.h1>

            <motion.div className="hero__divider" {...fadeUp(0.35)} />

            <motion.p className="hero__tagline" {...fadeUp(0.4)}>
              Leading data at <strong>ScottishPower Digital</strong>, sitting at the
              crossroads of engineering, analytics, and science. Originally from India,
              now building things in Glasgow.
            </motion.p>

            <motion.div className="hero__scroll" {...fadeUp(0.6)}>
              <span className="hero__scroll-label label">scroll</span>
              <span className="hero__scroll-line" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap-narrow">
          <motion.div {...inView()}>
            <p className="label" style={{ marginBottom: '1.5rem' }}>About</p>
            <p className="about-text">
              Full-stack data huckleberry &mdash; part scientist, part analyst,
              part engineer. Outside of work, I spend time on landscape photography,
              travelling, and keeping a close eye on the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <motion.p className="label" {...inView()}>
            Explore
          </motion.p>
          <div className="nav-cards">
            {NAV_CARDS.map((card, i) => (
              <motion.div key={card.href} {...inView(i * 0.08)}>
                <Link to={card.href} className="nav-card">
                  <span className="nav-card__num label">{card.num}</span>
                  <span className="nav-card__title">{card.title}</span>
                  <span className="nav-card__desc">{card.desc}</span>
                  <span className="nav-card__arrow">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="wrap-narrow">
          <motion.p className="label" style={{ marginBottom: '1.5rem' }} {...inView()}>
            Find me elsewhere
          </motion.p>
          <div className="links">
            {SOCIAL_LINKS.map(({ href, label, handle }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-row"
                {...inView(i * 0.07)}
              >
                <span className="link-row__label">{label}</span>
                <span className="link-row__handle">
                  {handle} <span className="link-row__arrow">&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
