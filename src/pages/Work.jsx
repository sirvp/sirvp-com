import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
})

const ROLES = [
  {
    title: 'Data Scientist',
    company: 'Scottish Power',
    period: 'Feb 2023 — Present',
    location: 'Glasgow, UK',
    bullets: [
      'Led data strategy for Customer Experience and Services, championing platform innovation across Azure Synapse, Power BI, and Google Analytics.',
      'Implemented training programmes for digital and marketing teams, improving reporting and analytics capabilities across the department.',
      'Established collaboration pipelines among product, technical, and data teams to align with the organisation\'s data strategy.',
      'Mentored Data Science graduates in data mining, analysis, and reporting.',
    ],
    tags: ['Azure Synapse', 'Power BI', 'Google Analytics', 'Python', 'SQL', 'Data Strategy'],
  },
  {
    title: 'Data Scientist',
    company: 'Belltree Ltd.',
    period: 'Sep 2022 — Feb 2023',
    location: 'Edinburgh, UK',
    bullets: [
      'Built ML models to identify correlations and benchmark oil & gas fields and reservoirs, optimising resource management.',
      'Designed scalable database architectures for Carbon Capture and Sequestration projects, enhancing data integration and analysis.',
    ],
    tags: ['Machine Learning', 'Python', 'SQL', 'Database Architecture', 'CCS'],
  },
  {
    title: 'Data Engineer I — Finance',
    company: 'Nissan Motor Corporation (NDI)',
    period: 'Sep 2020 — Jul 2021',
    location: 'Thiruvananthapuram, India',
    bullets: [
      'Led data engineering and BI projects, driving efficient data solutions across the organisation.',
      'Developed and implemented dashboards for Capacity Management and Learning & Development, expanding adoption across multiple divisions.',
      'Trained 20+ employees on Snowflake Cloud Data Warehouse, enhancing data capabilities across teams.',
    ],
    tags: ['Snowflake', 'Power BI', 'ETL', 'SQL', 'Data Engineering'],
  },
  {
    title: 'Data Engineer — Enterprise Data',
    company: 'Nissan Motor Corporation (NDI)',
    period: 'Sep 2018 — Aug 2020',
    location: 'Thiruvananthapuram, India',
    bullets: [
      'Lead ETL Developer and Data Modeler for Finance Data Warehousing Projects across Africa, Middle East, and India regions.',
      'Promoted to lead a team of three Data Engineers within six months.',
    ],
    tags: ['ETL', 'Data Modelling', 'SQL', 'Data Warehousing', 'Finance Data'],
  },
]

const EDUCATION = [
  {
    degree: 'MSc Data Science',
    institution: 'University of Glasgow',
    period: 'Sep 2021 — Sep 2022',
    location: 'Glasgow, UK',
    detail: 'Grade: Merit · Digital Student Ambassador at Unibuddy',
  },
  {
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'Mahatma Gandhi University',
    period: 'Aug 2014 — Jun 2018',
    location: 'Angamaly, India',
    detail: 'GPA: 8.22/10 · Chairman, FISAT Free Software Cell · Executive Committee, FISAT Computer Society',
  },
]

const PROJECTS = [
  {
    title: 'Intelligent Customer Feedback Analysis',
    period: 'May — Jun 2024',
    highlight: '2nd place · AWS × IBM Gen AI Hackathon, London',
    desc: 'End-to-end Gen AI tool on AWS to gather and analyse customer and competitor reviews from multiple sources, using open-source LLMs in Amazon Bedrock. Insights surfaced via a dynamic dashboard or a RAG chatbot.',
    tags: ['LLMs', 'Amazon Bedrock', 'SageMaker', 'RDS', 'AWS'],
  },
  {
    title: 'Real-Time Hate Speech Detection',
    period: 'Jun — Sep 2022',
    highlight: 'MSc Dissertation',
    desc: 'End-to-end pipeline ingesting real-time tweets from the Twitter API and classifying hate speech using an ML algorithm running on Apache Flink. Includes a full literature survey of existing classification approaches.',
    tags: ['Apache Flink', 'ML Classifiers', 'Twitter API', 'REST', 'Python'],
  },
]

const AWARDS = [
  { title: 'Data Leadership Certification', org: 'MIT Professional Education', year: '2024' },
  { title: 'DigiWin Award × 2 — Top Performance', org: 'ScottishPower Digital', year: '2024' },
  { title: 'Runner-Up, AWS × IBM Gen AI Hackathon', org: 'AWS & IBM, London', year: '2024' },
  { title: 'Saltire Award for Volunteering', org: 'Scottish Government', year: '2022' },
  { title: 'Highly Commended Idea Award', org: 'CENSIS Innovation Generation Workshop', year: '2021' },
  { title: 'Outstanding Performance Award', org: 'Nissan Digital India', year: '2020' },
]

const SKILLS = [
  { label: 'Languages', items: ['Python', 'Advanced SQL'] },
  { label: 'Data Platforms', items: ['Snowflake', 'Azure Synapse', 'PostgreSQL', 'Google Analytics'] },
  { label: 'ML / AI', items: ['scikit-learn', 'LLMs', 'Amazon Bedrock', 'SageMaker', 'Model Deployment'] },
  { label: 'Data Engineering', items: ['ETL', 'Data Modelling', 'Apache Flink', 'Cloud Architecture'] },
  { label: 'Visualisation', items: ['Tableau', 'Power BI', 'Python'] },
  { label: 'Practices', items: ['Agile', 'Scrum', 'Cross-functional Leadership', 'DataOps'] },
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
              Six years across data engineering, science, and strategy &mdash; from
              Nissan's global finance data warehouses to leading data at ScottishPower.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <section className="cv-section">
          <motion.p className="label cv-section__label" {...inView()}>Experience</motion.p>
          <div className="role-list">
            {ROLES.map((role, i) => (
              <motion.div key={i} className="role-item" {...inView(i * 0.07)}>
                <div className="role-item__meta">
                  <p className="role-item__period">{role.period}</p>
                  <p className="role-item__location">{role.location}</p>
                </div>
                <div className="role-item__content">
                  <p className="role-item__company">{role.company}</p>
                  <h2 className="role-item__title">{role.title}</h2>
                  <ul className="role-item__bullets">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="role-item__bullet">{b}</li>
                    ))}
                  </ul>
                  <div className="role-item__tags">
                    {role.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <motion.p className="label cv-section__label" {...inView()}>Education</motion.p>
          <div className="edu-list">
            {EDUCATION.map((edu, i) => (
              <motion.div key={i} className="edu-item" {...inView(i * 0.08)}>
                <div className="role-item__meta">
                  <p className="role-item__period">{edu.period}</p>
                  <p className="role-item__location">{edu.location}</p>
                </div>
                <div>
                  <p className="role-item__company">{edu.institution}</p>
                  <h3 className="role-item__title" style={{ fontSize: '18px' }}>{edu.degree}</h3>
                  <p className="edu-detail">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="cv-section">
          <motion.p className="label cv-section__label" {...inView()}>Projects</motion.p>
          <div className="project-grid">
            {PROJECTS.map((project, i) => (
              <motion.div key={i} className="project-card" {...inView(i * 0.08)}>
                <div>
                  <p className="project-card__highlight label">{project.highlight}</p>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__period label" style={{ marginTop: '4px' }}>{project.period}</p>
                </div>
                <p className="project-card__desc">{project.desc}</p>
                <div className="role-item__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="cv-section">
          <motion.p className="label cv-section__label" {...inView()}>Awards</motion.p>
          <div className="award-list">
            {AWARDS.map((award, i) => (
              <motion.div key={i} className="award-item" {...inView(i * 0.06)}>
                <div>
                  <p className="award-item__title">{award.title}</p>
                  <p className="award-item__org">{award.org}</p>
                </div>
                <span className="award-item__year label">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="cv-section" style={{ paddingBottom: '5rem' }}>
          <motion.p className="label cv-section__label" {...inView()}>Skills &amp; tools</motion.p>
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
        </section>

      </div>
    </main>
  )
}
