# 02 — Технологический стек

Всё перечисленное реально встречается в твоём коде (по анализу git). Разбито по категориям и по уровню владения, чтобы можно было брать блоками.

Уровни:
- **Core** — используешь ежедневно, основа работы
- **Proficient** — уверенно применяешь на реальных проектах
- **Familiar** — использовал в проде, но реже

---

## Frontend

| Технология | Уровень | Где / как использовал |
|------------|---------|------------------------|
| React | Core | 72 репозитория — основной инструмент |
| TypeScript | Core | 68 репозиториев, типизированные пропсы и интерфейсы |
| Next.js | Core | 28 проектов, SSR/ISR, standalone-режим для Docker |
| Tailwind CSS | Core | 60 проектов, адаптивная вёрстка (`hidden md:flex` и т.п.) |
| SCSS / CSS | Proficient | кастомные стили, дизайн-системы |
| Redux (store/features) | Proficient | управление состоянием в SPA |
| react-i18next (i18n) | Proficient | мультиязычные интерфейсы |
| Swiper | Proficient | карусели, слайдеры тарифов |
| react-intersection-observer | Familiar | ленивая подгрузка, анимации по скроллу |
| HLS video / react-custom-scroll | Familiar | кастомный видеоплеер, потоковое видео |

---

## Backend

| Технология | Уровень | Где / как использовал |
|------------|---------|------------------------|
| Python | Core | 2400+ изменений, основной бэкенд-язык |
| Django | Proficient | admin (fieldsets, ModelForm, миграции), REST-эндпоинты |
| aiogram (Telegram bots) | Proficient | 7 ботов, async, сервис-слой, роутеры, клавиатуры |
| FastAPI | Proficient | 4 проекта, async API |
| SQLAlchemy (async) | Proficient | ORM, `AsyncSession`, паттерн get_or_create |
| Flask | Familiar | лёгкие сервисы |
| Express.js (Node) | Familiar | 4 проекта |
| Prisma ORM | Proficient | схемы данных, многотенантность, enum-роли и статусы |

---

## Базы данных

| Технология | Уровень |
|------------|---------|
| PostgreSQL | Proficient (Railway, Prisma, SSL-подключения) |
| SQL | Proficient (93 изменения .sql-файлов) |

---

## DevOps / Infra

| Технология | Уровень | Детали |
|------------|---------|--------|
| Docker | Proficient | standalone/ISR-режим для Next.js |
| CI/CD (GitHub Actions) | Proficient | `.github/workflows`, отдельный CI/CD-проект |
| Git (ветки, мерджи, ревью) | Core | 600+ merge-коммитов, работа через ветки |
| Railway | Familiar | деплой + PostgreSQL |
| DigitalOcean Spaces | Familiar | хранилище медиа |
| Cloudflare R2 / Stream | Familiar | статика и потоковое видео |

---

## Интеграции

| Что | Где |
|-----|-----|
| WhatsApp Business | сценарии заказов, воронки |
| Telegram | боты (aiogram) + push-уведомления в группы |
| Web Push (VAPID) | браузерные уведомления в SaaS-портале |
| Directus (headless CMS) | контент для Next.js-сайтов |
| CRM-интеграции | формы заявок, лиды |

---

## Архитектурные паттерны (важно для senior-позиций)

- **Многотенантность** — изоляция данных по `companyId`
- **RBAC** — ролевой доступ (напр. 7 ролей: super_admin, PM, creator, client_owner…)
- **State machines** — жизненный цикл статусов задач/контента
- **Сервис-слой** — вынос бизнес-логики из хендлеров (UserService и т.п.)
- **Адаптивный дизайн** — mobile-first, брейкпоинты
- **Telegram Mini Apps** — фронтенд под встроенные приложения TG

---

## Готовый блок «Skills» для резюме (копипаст)

```
Frontend:  React · TypeScript · Next.js · Tailwind CSS · Redux · SCSS · i18next
Backend:   Python · Django · FastAPI · aiogram · Flask · Node/Express · SQLAlchemy
Database:  PostgreSQL · Prisma · SQL
DevOps:    Docker · GitHub Actions (CI/CD) · Git · Railway · DigitalOcean · Cloudflare
Integr.:   WhatsApp · Telegram Bots · Web Push (VAPID) · Directus CMS · REST APIs
Patterns:  Multi-tenancy · RBAC · State machines · Service layer · Responsive design
```

---

## Короткий tag-набор (для карточек проектов)

`React` `TypeScript` `Next.js` `Tailwind` `Python` `Django` `FastAPI` `aiogram` `Prisma` `PostgreSQL` `Docker` `CI/CD` `Telegram` `WhatsApp`
