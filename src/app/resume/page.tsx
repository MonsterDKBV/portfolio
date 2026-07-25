import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Daniel Kubanychbekov',
  description: 'Frontend Developer Resume — React, TypeScript, Next.js',
  robots: 'noindex, nofollow',
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-container">
        {/* Left Column */}
        <aside className="resume-sidebar">
          <div className="sidebar-header">
            <h1 className="sidebar-name">Daniel Kubanychbekov</h1>
            <p className="sidebar-title">Frontend Developer</p>
            <p className="sidebar-location">Bishkek, Kyrgyzstan</p>
          </div>

          <div className="sidebar-contacts">
            <a href="mailto:your@email.com" className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              your@email.com
            </a>
            <a href="https://t.me/yourusername" className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.3l-3.3 15.6c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.15L17.4 6.3c.4-.36-.09-.56-.63-.2L6.5 12.6l-4.6-1.44c-1-.31-1.02-1 .21-1.48L20.6 2.9c.84-.31 1.57.2 1.3 1.4z"/>
              </svg>
              @yourusername
            </a>
            <a href="https://github.com/yourusername" className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z"/>
              </svg>
              github.com/yourusername
            </a>
            <a href="https://daniel-k-dev.vercel.app" className="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              daniel-k-dev.vercel.app
            </a>
          </div>

          <div className="sidebar-section">
            <h2 className="section-title">Skills</h2>

            <div className="skill-group">
              <h3 className="skill-category">Frontend</h3>
              <p className="skill-list">React, Next.js, TypeScript, JavaScript, Redux Toolkit, Zustand, Tailwind CSS, SCSS, Framer Motion</p>
            </div>

            <div className="skill-group">
              <h3 className="skill-category">Backend</h3>
              <p className="skill-list">Node.js, Express, REST API, PostgreSQL, Prisma</p>
            </div>

            <div className="skill-group">
              <h3 className="skill-category">Tools</h3>
              <p className="skill-list">Git, GitHub, Docker, Vercel, DigitalOcean, Directus, Strapi, Figma</p>
            </div>

            <div className="skill-group">
              <h3 className="skill-category">Languages</h3>
              <p className="skill-list">Russian — Native<br/>Kyrgyz — Native<br/>English — B1-B2</p>
            </div>
          </div>
        </aside>

        {/* Right Column */}
        <div className="resume-main">
          <header className="main-header">
            <h1 className="main-name">Daniel Kubanychbekov</h1>
            <p className="main-title">Frontend Developer</p>
          </header>

          <section className="main-section">
            <p className="summary">
              Frontend developer with 2.5+ years of commercial experience building modern web applications.
              Focused on clean code, performance, and responsive interfaces.
              Experienced in full project lifecycle: from client communication to deployment and handoff.
              Goal — become a Product Engineer capable of delivering projects end-to-end.
            </p>
          </section>

          <section className="main-section">
            <h2 className="section-heading">Experience</h2>
            <div className="experience-item">
              <div className="exp-header">
                <span className="exp-company">Monster Ecosystem</span>
                <span className="exp-date">2022 — Present</span>
              </div>
              <p className="exp-role">Frontend Developer</p>
              <ul className="exp-list">
                <li>Developed and maintained multiple commercial web applications using React and Next.js</li>
                <li>Built admin panels, dashboards, and customer-facing interfaces</li>
                <li>Integrated REST APIs and managed client-server data flow</li>
                <li>Worked directly with clients on requirements and project delivery</li>
                <li>Handled deployment, CRM integrations, and project handoffs</li>
              </ul>
            </div>
          </section>

          <section className="main-section">
            <h2 className="section-heading">Selected Projects</h2>

            <div className="project-item">
              <div className="proj-header">
                <span className="proj-name">Restaurant Order System</span>
                <span className="proj-stack">Next.js, TypeScript, Tailwind, API</span>
              </div>
              <p className="proj-desc">Full order flow: menu → cart → checkout → order status → admin panel</p>
            </div>

            <div className="project-item">
              <div className="proj-header">
                <span className="proj-name">Task Management Dashboard</span>
                <span className="proj-stack">React, TypeScript, Dashboard UI</span>
              </div>
              <p className="proj-desc">Task creation, status management, modals, and state synchronization</p>
            </div>

            <div className="project-item">
              <div className="proj-header">
                <span className="proj-name">B2B Product Catalog</span>
                <span className="proj-stack">React, TypeScript, Responsive UI</span>
              </div>
              <p className="proj-desc">Large catalog navigation, filters, search, and product cards</p>
            </div>

            <div className="project-item">
              <div className="proj-header">
                <span className="proj-name">Content Management Platform</span>
                <span className="proj-stack">React, TypeScript, Charts</span>
              </div>
              <p className="proj-desc">Content workflow: draft → review → publish with calendar and team features</p>
            </div>
          </section>

          <section className="main-section">
            <h2 className="section-heading">Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement">
                <span className="ach-value">2.5+</span>
                <span className="ach-label">years in development</span>
              </div>
              <div className="achievement">
                <span className="ach-value">30+</span>
                <span className="ach-label">projects completed</span>
              </div>
              <div className="achievement">
                <span className="ach-value">10+</span>
                <span className="ach-label">launched to production</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .resume-page {
          min-height: 100vh;
          background: #f8f9fa;
          display: flex;
          justify-content: center;
          padding: 40px 20px;
        }

        .resume-container {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          background: #ffffff;
          display: grid;
          grid-template-columns: 30% 70%;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
          overflow: hidden;
        }

        /* Left Sidebar */
        .resume-sidebar {
          background: #0a0a0b;
          color: #f0f0f0;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-header {
          border-bottom: 1px solid #23262a;
          padding-bottom: 20px;
        }

        .sidebar-name {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .sidebar-title {
          font-size: 12px;
          color: #9281f7;
          margin: 0 0 8px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sidebar-location {
          font-size: 11px;
          color: #8a8e90;
          margin: 0;
        }

        .sidebar-contacts {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-bottom: 1px solid #23262a;
          padding-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          color: #a7abac;
          text-decoration: none;
          transition: color 0.15s;
        }

        .contact-item:hover {
          color: #9281f7;
        }

        .contact-item svg {
          flex-shrink: 0;
          opacity: 0.7;
        }

        .sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .section-title {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9281f7;
          margin: 0;
        }

        .skill-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .skill-category {
          font-size: 10px;
          font-weight: 600;
          color: #f0f0f0;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .skill-list {
          font-size: 9.5px;
          color: #8a8e90;
          margin: 0;
          line-height: 1.5;
        }

        /* Right Main Content */
        .resume-main {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: #1a1a1a;
        }

        .main-header {
          border-bottom: 2px solid #9281f7;
          padding-bottom: 14px;
        }

        .main-name {
          font-size: 28px;
          font-weight: 600;
          margin: 0;
          letter-spacing: -0.03em;
          color: #0a0a0b;
        }

        .main-title {
          font-size: 14px;
          color: #6b6f72;
          margin: 4px 0 0;
          font-weight: 400;
        }

        .main-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary {
          font-size: 11px;
          line-height: 1.65;
          color: #4a4a4a;
          margin: 0;
        }

        .section-heading {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9281f7;
          margin: 0;
          padding-bottom: 6px;
          border-bottom: 1px solid #e5e5e5;
        }

        /* Experience */
        .experience-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .exp-company {
          font-size: 12px;
          font-weight: 600;
          color: #0a0a0b;
        }

        .exp-date {
          font-size: 10px;
          color: #8a8e90;
        }

        .exp-role {
          font-size: 10px;
          color: #6b6f72;
          margin: 0;
          font-style: italic;
        }

        .exp-list {
          margin: 6px 0 0;
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .exp-list li {
          font-size: 10px;
          color: #4a4a4a;
          line-height: 1.5;
        }

        /* Projects */
        .project-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 6px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .project-item:last-child {
          border-bottom: none;
        }

        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }

        .proj-name {
          font-size: 11px;
          font-weight: 600;
          color: #0a0a0b;
        }

        .proj-stack {
          font-size: 9px;
          color: #8a8e90;
          font-family: var(--font-geist-mono), monospace;
        }

        .proj-desc {
          font-size: 10px;
          color: #6b6f72;
          margin: 0;
          line-height: 1.5;
        }

        /* Achievements */
        .achievements-grid {
          display: flex;
          gap: 24px;
        }

        .achievement {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ach-value {
          font-size: 18px;
          font-weight: 600;
          color: #9281f7;
        }

        .ach-label {
          font-size: 9px;
          color: #8a8e90;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        /* Print Styles */
        @media print {
          .resume-page {
            padding: 0;
            background: none;
            min-height: auto;
          }

          .resume-container {
            box-shadow: none;
            width: 100%;
            height: 100%;
          }
        }

        /* Responsive for screen viewing */
        @media screen and (max-width: 900px) {
          .resume-container {
            width: 100%;
            max-width: 210mm;
            min-height: auto;
            max-height: none;
            grid-template-columns: 1fr;
          }

          .resume-sidebar {
            padding: 24px 20px;
          }

          .resume-main {
            padding: 24px 20px;
          }
        }
      `}</style>
    </main>
  )
}
