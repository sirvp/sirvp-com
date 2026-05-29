import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay },
})

/* Gradient placeholders evoke Scottish landscapes.
   Replace each `gradient` with your actual <img> src when ready. */
const PHOTOS = [
  { gradient: 'linear-gradient(165deg, #0c1826 0%, #1a2d4a 60%, #0a1520 100%)', location: 'Isle of Skye', date: 'Mar 2026', wide: true },
  { gradient: 'linear-gradient(155deg, #141e0a 0%, #1e3012 100%)', location: 'Glencoe', date: 'Jan 2026' },
  { gradient: 'linear-gradient(170deg, #1a1028 0%, #2a1a42 100%)', location: 'Edinburgh', date: 'Feb 2026' },
  { gradient: 'linear-gradient(160deg, #1e1208 0%, #2e1e0c 100%)', location: 'Cairngorms', date: 'Nov 2025' },
  { gradient: 'linear-gradient(165deg, #081826 0%, #102438 100%)', location: 'Loch Lomond', date: 'Oct 2025', wide: true },
  { gradient: 'linear-gradient(155deg, #1a0a1e 0%, #28102e 100%)', location: 'Glasgow', date: 'Sep 2025' },
  { gradient: 'linear-gradient(160deg, #081e14 0%, #102a1c 100%)', location: 'Trossachs', date: 'Aug 2025' },
  { gradient: 'linear-gradient(170deg, #141414 0%, #1e1e1e 100%)', location: 'Shetland', date: 'Jul 2025' },
  { gradient: 'linear-gradient(165deg, #0a2018 0%, #163228 100%)', location: 'Rannoch Moor', date: 'Jun 2025', wide: true },
]

export default function Photos() {
  return (
    <main className="page">
      <div className="wrap">
        {/* Page header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="page-title">Photos</p>
          <div className="page-header__meta">
            <p className="page-subtitle">
              Landscapes and streets. Shot on a Fujifilm X-T50, mostly in Scotland.
            </p>
            <span className="label">Fujifilm X-T50 &middot; 18–55mm</span>
          </div>
        </motion.div>

        <p className="photo-intro mono">
          — Photos are placeholder gradients. Replace each gradient string in{' '}
          <code>Photos.jsx</code> with your actual image URLs when ready.
        </p>
      </div>

      {/* Full-width photo grid */}
      <div className="photo-grid" style={{ padding: '0 3px 5rem' }}>
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            className={`photo-item${photo.wide ? ' photo-item--wide' : ''}`}
            {...inView(i * 0.04)}
          >
            <div
              className="photo-item__bg"
              style={{ background: photo.gradient }}
            />
            <div className="photo-item__overlay">
              <p className="photo-item__location">{photo.location}</p>
              <p className="photo-item__date">{photo.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
