# Personal Website

My personal developer portfolio and website, built to showcase my projects, GitHub activity, skills, and work.

🌐 **Live website:** [martonaron.dev](https://martonaron.dev)

## About

This repository contains the source code for my personal website.

The project consists of a Vue frontend and a Python Flask backend. The backend communicates with the GitHub API to dynamically retrieve profile information and repositories.

The project is currently under active development.

## Tech Stack

### Frontend

* Vue 3
* TypeScript
* Vite
* Vue Router
* Vercel Analytics

### Backend

* Python
* Flask
* Flask-CORS
* GitHub REST API
* Requests
* python-dotenv

## Project Structure

```text
personal-website/
├── backend/
│   ├── api.py
│   ├── apihelper.py
│   ├── pyproject.toml
│   ├── requirements.txt
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── base.css
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
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── README.md
├── LICENSE
└── README.md
```

## Backend API

The Flask backend exposes the following endpoints:

### Profile

```http
GET /api/v1/profile
```

Returns GitHub profile information.

### Repositories

```http
GET /api/v1/repos
```

Returns GitHub repositories sorted by their latest push date.


## Roadmap

Planned features include:

* Personal introduction and developer profile
* Project showcase
* Dynamic GitHub repositories
* GitHub profile integration
* Skills and technologies
* Contact information
* Responsive design
* Improved animations and interactions

## License

This project is released under the [Unlicense](LICENSE).
