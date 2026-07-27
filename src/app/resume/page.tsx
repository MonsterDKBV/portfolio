import type { Metadata } from 'next'
import styles from './resume.module.css'

export const metadata: Metadata = {
  title: 'Resume — Daniel Kubanychbekov',
  description: 'Frontend Developer Resume — React, TypeScript, Next.js',
  robots: 'noindex, nofollow',
}

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <div className={styles.resumeContainer}>
        {/* Left Column - Sidebar */}
        <aside className={styles.resumeSidebar}>
          <div className={styles.sidebarHeader}>
            <h1 className={styles.sidebarName}>Даниэл Кубанычбеков</h1>
            <p className={styles.sidebarTitle}>Frontend Developer</p>
            <p className={styles.sidebarLocation}>Бишкек, Кыргызстан</p>
          </div>

          <div className={styles.sidebarContacts}>
            <a href="mailto:mr.daniel.kv@gmail.com" className={styles.contactItem}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              mr.daniel.kv@gmail.com
            </a>
            <a href="https://t.me/DanieL_KBV" className={styles.contactItem}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.3l-3.3 15.6c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.15L17.4 6.3c.4-.36-.09-.56-.63-.2L6.5 12.6l-4.6-1.44c-1-.31-1.02-1 .21-1.48L20.6 2.9c.84-.31 1.57.2 1.3 1.4z"/>
              </svg>
              @DanieL_KBV
            </a>
            <a href="https://github.com/DanielKBV" className={styles.contactItem}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z"/>
              </svg>
              github.com/DanielKBV
            </a>
            <a href="https://daniel-k-dev.vercel.app" className={styles.contactItem}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              daniel-k-dev.vercel.app
            </a>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sectionTitle}>Технологии</h2>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>Frontend</h3>
              <p className={styles.skillList}>React, Next.js, TypeScript, JavaScript, Redux Toolkit, RTK Query, Zustand, React Query, Tailwind CSS, SCSS, Framer Motion</p>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>Инструменты</h3>
              <p className={styles.skillList}>Git, GitHub, Docker, Vercel, DigitalOcean, Directus, Strapi, Figma</p>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sectionTitle}>Компетенции</h2>
            <div className={styles.competenceList}>
              <span>Адаптивная вёрстка</span>
              <span>Компонентная архитектура</span>
              <span>REST API интеграция</span>
              <span>State Management</span>
              <span>Оптимизация производительности</span>
              <span>SEO</span>
              <span>Git Workflow</span>
              <span>Code Review</span>
              <span>CMS интеграция</span>
              <span>Деплой проектов</span>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sectionTitle}>Специализация</h2>
            <div className={styles.competenceList}>
              <span>Корпоративные сайты</span>
              <span>Админ-панели</span>
              <span>CRM-системы</span>
              <span>Интернет-магазины</span>
              <span>Landing Pages</span>
              <span>Web Applications</span>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h2 className={styles.sectionTitle}>Языки</h2>
            <div className={styles.langList}>
              <span>Русский — родной</span>
              <span>Кыргызский — родной</span>
            </div>
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <div className={styles.resumeMain}>
          <header className={styles.mainHeader}>
            <h1 className={styles.mainName}>Даниэл Кубанычбеков</h1>
            <p className={styles.mainTitle}>Frontend Developer</p>
          </header>

          <section className={styles.mainSection}>
            <p className={styles.summary}>
              Frontend-разработчик с 2.5+ годами коммерческого опыта. Специализируюсь на создании современных веб-приложений на React и Next.js. Работаю как с нуля, так и с существующими кодовыми базами. Участвую в полном цикле разработки: от сбора требований и проектирования компонентов до деплоя и передачи проекта заказчику. Пишу чистый, поддерживаемый код с фокусом на производительность и адаптивность интерфейсов.
            </p>
          </section>

          <section className={styles.mainSection}>
            <h2 className={styles.sectionHeading}>Опыт работы</h2>
            <div className={styles.experienceItem}>
              <div className={styles.expHeader}>
                <span className={styles.expCompany}>Monster Ecosystem</span>
                <span className={styles.expDate}>2022 — настоящее время</span>
              </div>
              <p className={styles.expRole}>Frontend Developer</p>
              <ul className={styles.expList}>
                <li>Разрабатывал и поддерживал коммерческие веб-приложения на React и Next.js</li>
                <li>Создавал административные панели, дашборды и клиентские интерфейсы</li>
                <li>Интегрировал REST API и организовывал работу с данными на клиенте</li>
                <li>Работал напрямую с заказчиками: сбор требований, согласование и доставка</li>
                <li>Выполнял деплой проектов на Vercel и DigitalOcean</li>
                <li>Настраивал интеграции с CMS (Directus, Strapi) и CRM-системами</li>
              </ul>
            </div>
          </section>

          <section className={styles.mainSection}>
            <h2 className={styles.sectionHeading}>Избранные проекты</h2>

            <div className={styles.projectItem}>
              <div className={styles.projHeader}>
                <div className={styles.projTitleRow}>
                  <span className={styles.projName}>Система заказов для ресторана</span>
                  <span className={styles.projTag}>Коммерческий</span>
                </div>
                <span className={styles.projStack}>Next.js · TypeScript · Tailwind</span>
              </div>
              <p className={styles.projDesc}>Полный цикл заказа: каталог меню, корзина, оформление, отслеживание статуса, административная панель для управления заказами</p>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projHeader}>
                <div className={styles.projTitleRow}>
                  <span className={styles.projName}>Task Management Dashboard</span>
                  <span className={styles.projTag}>Админ-панель</span>
                </div>
                <span className={styles.projStack}>React · TypeScript · State Machine</span>
              </div>
              <p className={styles.projDesc}>Система управления задачами с созданием, статусами, референсами и синхронизацией состояний между компонентами</p>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projHeader}>
                <div className={styles.projTitleRow}>
                  <span className={styles.projName}>B2B каталог товаров</span>
                  <span className={styles.projTag}>E-commerce</span>
                </div>
                <span className={styles.projStack}>React · TypeScript · SCSS</span>
              </div>
              <p className={styles.projDesc}>Каталог с иерархией категорий, фильтрами, поиском, карточками товаров и избранным. Адаптивная вёрстка</p>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projHeader}>
                <div className={styles.projTitleRow}>
                  <span className={styles.projName}>Платформа управления контентом</span>
                  <span className={styles.projTag}>CRM</span>
                </div>
                <span className={styles.projStack}>React · TypeScript · Kanban</span>
              </div>
              <p className={styles.projDesc}>Workflow публикаций: черновик → ревью → публикация. Календарь, командная работа, канбан-доска</p>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.projHeader}>
                <div className={styles.projTitleRow}>
                  <span className={styles.projName}>Сайт школы английского</span>
                  <span className={styles.projTag}>Landing</span>
                </div>
                <span className={styles.projStack}>Next.js · TypeScript · Tailwind · CMS</span>
              </div>
              <p className={styles.projDesc}>Публичный сайт с интерактивным тестом уровня, таймером, результатами и интеграцией с CMS</p>
            </div>
          </section>

          <section className={`${styles.mainSection} ${styles.achievementsSection}`}>
            <h2 className={styles.sectionHeading}>Ключевые показатели</h2>
            <div className={styles.achievementsGrid}>
              <div className={styles.achievement}>
                <span className={styles.achValue}>2.5+</span>
                <span className={styles.achLabel}>года опыта</span>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achValue}>30+</span>
                <span className={styles.achLabel}>проектов</span>
              </div>
              <div className={styles.achievement}>
                <span className={styles.achValue}>10+</span>
                <span className={styles.achLabel}>в продакшн</span>
              </div>
              <div className={styles.achievementText}>
                <span>React / Next.js</span>
                <span>REST API</span>
                <span>Responsive</span>
                <span>CMS</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
