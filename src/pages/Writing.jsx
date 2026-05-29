import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay },
})

const POSTS = [
  {
    date: 'Jul 2026',
    category: 'Data',
    title: 'On Building Data Culture from Scratch',
    desc: 'What it actually takes to shift an organisation from intuition-first to data-first — and why the hard part is never the technology.',
    readTime: '8 min',
  },
  {
    date: 'May 2026',
    category: 'Photography',
    title: 'Six Months with the Fujifilm X-T50',
    desc: 'A field review after shooting the Scottish Highlands, Glasgow streets, and everything in between.',
    readTime: '6 min',
  },
  {
    date: 'Mar 2026',
    category: 'Travel',
    title: 'Glasgow: A City for Walkers',
    desc: 'On the particular pleasure of learning a city on foot — and why Glasgow rewards the curious more than any guide suggests.',
    readTime: '10 min',
  },
  {
    date: 'Jan 2026',
    category: 'Data',
    title: 'Why dbt Changed How I Think About SQL',
    desc: 'It\'s not just a framework. It\'s a different mental model for thinking about data transformation, ownership, and documentation.',
    readTime: '7 min',
  },
  {
    date: 'Dec 2025',
    category: 'Books',
    title: 'Reading List: What I Finished in 2025',
    desc: 'Twenty-three books, a handful of regrets, and a few that genuinely changed how I think.',
    readTime: '4 min',
  },
  {
    date: 'Oct 2025',
    category: 'Travel',
    title: 'Notes from the Cairngorms',
    desc: 'A long weekend with too much camera gear, not enough food, and the exact quality of light that makes you forgive Scotland everything.',
    readTime: '12 min',
  },
]

export default function Writing() {
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
          <p className="page-title">Writing</p>
          <div className="page-header__meta">
            <p className="page-subtitle">
              Notes on data, photography, travel, and whatever else I find
              worth thinking about slowly.
            </p>
          </div>
        </motion.div>

        {/* Posts list */}
        <div className="writing-list">
          {POSTS.map((post, i) => (
            <motion.a
              key={i}
              href="https://medium.com/@sirvp"
              target="_blank"
              rel="noopener noreferrer"
              className="writing-item"
              {...inView(i * 0.06)}
            >
              <span className="writing-item__date label">{post.date}</span>
              <div className="writing-item__body">
                <p className="writing-item__category">{post.category}</p>
                <h2 className="writing-item__title">{post.title}</h2>
                <p className="writing-item__desc">{post.desc}</p>
              </div>
              <span className="writing-item__read label">{post.readTime}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  )
}
