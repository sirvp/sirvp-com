import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
})

const ROLES = [
  {
    title: 'Data Lead',
    company: 'ScottishPower Digital',
    period: '2023 — Present',
    location: 'Glasgow, UK',
    desc: "Leading data strategy and delivery across engineering, analytics, and science. Responsible for the data platform, data products, and a cross-functional team of engineers and scientists at one of the UK's largest energy companies.",
    tags: ['Python', 'dbt', 'Databricks', 'Spark', 'Airflow', 'AWS', 'Data Strategy', 'Leadership'],
  },
  {
    title: 'Senior Data Scientist',
    company: 'Add your company here',
    period: '20XX — 20XX',
    location: 'Location',
    desc: 'Add a short description of your role and the impact you made. Two to three sentences works well here.',
    tags: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
  },
  {
    title: 'Data Analyst',
    company: 'Add your company here',
    period: '20XX — 20XX',
    location: 'Location',
    desc: 'Add a short description of your role and the impact you made here.',
    tags: ['SQL', 'Python', 'Tableau', 'Analytics'],
  },
]

const SKILLS = [
  { label: 'Languages', items: ['Python', 'SQL', 'Scala', 'TypeScript', 'Bash'] },
  { label: 'Data', items: ['dbt', 'Spark', 'Airflow', 'Databricks', 'Kafka', 'Delta Lake'] },
  { label: 'ML / AI', items: ['scikit-learn', 'PyTorch', 'MLflow', 'LLMs', 'Feature Engineering'] },
  { label: 'Cloud', items: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes'] },
  { label: 'Analytics', items: ['Tableau', 'Looker', 'Power BI', 'dbt Semantic Layer'] },
  { label: 'Practices', items: ['DataOps', 'Data Mesh', 'Agile', 'CI/CD', 'TDD'] },
]

export default function Work() {
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
          <p className="page-title">Work</p>
          <div className="page-header__meta">
            <p className="page-subtitle">
              Experience across data engineering, science, and analytics &mdash; with a
              focus on building platforms and teams that last.
            </p>
            <span className="label" style={{ whiteSpace: 'nowrap' }}>
              {ROLES[0].location}
            </span>
          </div>
        </motion.div>

        {/* Role timeline */}
        <div className="role-list">
          {ROLES.map((role, i) => (
            <motion.div key={i} className="role-item" {...inView(i * 0.08)}>
              <div className="role-item__meta">
                <p className="role-item__period">{role.period}</p>
                <p className="role-item__location">{role.location}</p>
              </div>
              <div className="role-item__content">
                <p className="role-item__company">{role.company}</p>
                <h2 className="role-item__title">{role.title}</h2>
                <p className="role-item__desc">{role.desc}</p>
                <div className="role-item__tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div className="skills-section" {...inView()}>
          <p className="label" style={{ marginBottom: '2rem' }}>Skills &amp; tools</p>
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <motion.div key={group.label} className="skill-row" {...inView(i * 0.06)}>
                <span className="skill-row__label">{group.label}</span>
                <div className="skill-row__items">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
