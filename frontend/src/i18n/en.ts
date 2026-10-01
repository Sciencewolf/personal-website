export interface TimelineLink {
  label: string
  href: string
}

export interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
  links?: TimelineLink[]
}

export const en = {
  meta: {
    title: 'Márton Áron • Software Engineer',
    description:
      'Software engineer and Computer Science MSc student in Debrecen. I build full-stack web apps and Raspberry Pi hardware projects with Python, React and Kotlin.',
  },
  nav: {
    label: 'Main navigation',
    home: 'Márton Áron – home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    github: 'GitHub',
    toggleMenu: 'Toggle navigation menu',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
  },
  welcome: {
    eyebrow: 'Software Engineer · Debrecen, Hungary',
    title: "Hi there, I'm Márton Áron.",
    intro:
      "I'm a software developer working across the stack — Python and Flask on the backend, TypeScript and React on the front — and I currently build automation pipelines and internal tools in Python and n8n alongside my Computer Science MSc at the University of Debrecen. I keep one foot in hardware: my BSc thesis was a smart chicken incubator built on a Raspberry Pi, with its own control electronics and an Android app to run it. These days I'm most interested in where embedded systems, IoT and edge computing meet the web.",
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    skillsLabel: 'Main skills',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'What I work with',
    intro: 'The tools I reach for most, from the server and the browser down to the hardware.',
    groups: [
      { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'C++'] },
      { name: 'Backend & data', items: ['Flask', 'REST APIs', 'PostgreSQL', 'Supabase'] },
      {
        name: 'Frontend & mobile',
        items: ['React', 'Vue 3', 'HTML', 'CSS', 'Vite', 'Android', 'Jetpack Compose', 'Retrofit'],
      },
      { name: 'Automation & AI', items: ['n8n', 'OpenAI API', 'Gemini API'] },
      {
        name: 'Embedded & hardware',
        items: ['Raspberry Pi', 'Sensors & relays', 'Control electronics', 'IoT'],
      },
      {
        name: 'Tools & infrastructure',
        items: [
          'Git',
          'GitHub Actions',
          'Docker',
          'Linux',
          'Cloudflare Tunnel',
          'Postman',
          'Vercel',
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Background',
    title: 'Experience & education',
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    experience: [
      {
        title: 'Automation & Backend Developer Intern',
        organization: 'Debrecen, Hungary',
        period: '2025 – Present',
        description:
          'Designed and maintain a fully automated n8n product-enrichment pipeline that processes 20,000+ products a day and cut manual work by 90%. I build and document Python REST APIs and internal business applications for automation, reporting and data management, and production n8n workflows that use the OpenAI and Gemini APIs for data enrichment, classification and content generation. I also built internal and customer-facing web apps, such as a replacement-support portal and an in-store coupon generator, integrating PostgreSQL and third-party REST APIs.',
      },
      {
        title: 'Web Development Intern',
        organization: 'React',
        period: 'Feb 2025 – Jun 2025',
        description:
          'Maintained and extended existing React applications: fixed frontend issues, delivered new features and refactored reusable UI components for maintainability in an established codebase.',
      },
    ] as TimelineItem[],
    education: [
      {
        title: 'Computer Science MSc',
        organization: 'University of Debrecen · Faculty of Informatics',
        period: '2026 – 2028 (expected)',
        description:
          'Interested in embedded systems, IoT and edge computing, and in how they connect to the web.',
      },
      {
        title: 'Computer Science BSc',
        organization: 'University of Debrecen · Faculty of Informatics',
        period: '2022 – 2026',
        description:
          'Thesis project: a smart chicken incubator, built end to end. A Raspberry Pi 4 with temperature and humidity sensing, heating and cooling control and motorized egg rotation, a Python/Flask REST API for telemetry, hardware control and statistics, and an Android app (Kotlin, Jetpack Compose, Retrofit) for real-time monitoring and remote control. Tested in two real hatching cycles.',
        links: [
          { label: 'Thesis (PDF)', href: 'https://github.com/Sciencewolf/szakdolgozat/blob/main/szakdolgozat.pdf' },
          { label: 'Hardware & backend', href: 'https://github.com/Sciencewolf/szakdolgozat-raspberry-pi' },
          { label: 'Android app', href: 'https://github.com/Sciencewolf/szakdolgozat-app' },
        ],
      },
    ] as TimelineItem[],
  },
  github: {
    eyebrow: 'Open source',
    title: 'Latest work on GitHub',
    viewProfile: 'View profile',
    avatarAlt: "{name}'s avatar",
    loading: 'Loading GitHub repositories…',
    publicRepository: 'Public repository',
    topicsLabel: 'Repository topics',
    noDescription: 'A project from my GitHub workspace.',
    liveSite: 'Live site',
    openLiveProject: 'Open live project',
    recentlyUpdated: 'Recently updated',
    updated: 'Updated {date}',
    partialError: 'Some GitHub information could not be loaded.',
    unavailable: 'GitHub information is temporarily unavailable.',
    empty: 'No public repositories to show yet.',
    tryAgain: 'Try again',
    retry: 'Retry',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a project in mind? Let’s talk.',
    text: 'I’m always open to interesting projects, new opportunities, and conversations about building thoughtful software.',
    footerLinks: 'Footer links',
    email: 'Email',
    creditBefore: 'Developed with',
    creditHeart: 'love',
    creditAfter: 'by',
  },
}

export type Messages = typeof en
