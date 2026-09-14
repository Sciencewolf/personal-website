# Personal Website

My personal developer portfolio and website, built to showcase my projects, GitHub activity, skills, and work.

🌐 **Live website:** [martonaron.dev](https://martonaron.dev)

## About

This repository contains the source code for my personal website.

The project consists of a Vue frontend and a Python Flask backend. The backend communicates with the GitHub API to dynamically retrieve profile information and repositories, and caches the responses in memory so the public GitHub rate limit is not exhausted.

The project is currently under active development.

## Tech Stack

### Frontend

- Vue 3
- TypeScript
- Vite
- Inter (self-hosted via Fontsource)
- Vercel Analytics

### Backend

- Python
- Flask
- Flask-CORS
- GitHub REST API
- Requests
- python-dotenv

## Project Structure

```
personal-website/
├── .github/
│   └── workflows/
│       └── ci.yml
├── backend/
│   ├── api.py
│   ├── apihelper.py
│   ├── pyproject.toml
│   ├── requirements.txt
│   ├── .env.example
│   └── .gitignore
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── og-image.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── assets/
│   │   │   └── main.css
│   │   ├── components/
│   │   │   ├── ContactFooter.vue
│   │   │   ├── GitHubShowcase.vue
│   │   │   ├── NavBar.vue
│   │   │   └── Welcome.vue
│   │   ├── services/
│   │   │   └── github.ts
│   │   ├── App.vue
│   │   └── main.ts
│   ├── env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── .env.example
│   └── README.md
├── LICENSE
└── README.md
```

## Getting Started

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env      # optional: add a GitHub token to raise the rate limit
python api.py             # http://127.0.0.1:5050
```

### Frontend

```bash
cd frontend
npm ci
cp .env.example .env      # point VITE_API_BASE_URL at the local backend
npm run dev               # http://localhost:5173
```

## Backend API

The Flask backend exposes the following endpoints:

### Health

```
GET /
GET /api/v1/health
```

Returns the service status.

### Profile

```
GET /api/v1/profile
```

Returns GitHub profile information.

### Repositories

```
GET /api/v1/repos?limit=6
```

Returns GitHub repositories sorted by their latest push date. Forks and archived repositories are excluded. If any repository carries the `showcase` topic, only those are returned. `limit` is optional and capped at 24.

Responses are cached in memory for `CACHE_TTL_SECONDS` (default 300) and served with `Cache-Control` headers for CDN caching.

## Roadmap

Planned features include:

- Personal introduction and developer profile
- Project showcase
- Dynamic GitHub repositories
- GitHub profile integration
- Skills and technologies
- Contact information
- Responsive design
- Improved animations and interactions
- Hand-picked project pages with case studies
- Hungarian / English language switch
- Contact form

## License

This project is released under the [Unlicense](LICENSE).
