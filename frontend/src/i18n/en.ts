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
    switchLanguage: 'Switch language to Hungarian',
  },
  welcome: {
    eyebrow: 'Software Engineer · Debrecen, Hungary',
    title: "Hi there, I'm Márton Áron.",
    intro:
      "I'm a software developer working across the stack — Python and Flask on the backend, TypeScript and React on the front — and I'm currently doing my Computer Science MSc at the University of Debrecen. I keep one foot in hardware: my BSc thesis was an intelligent chick incubator built on a Raspberry Pi, with its own control electronics and an Android app to run it. These days I'm most interested in where embedded systems, IoT and edge computing meet the web.",
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    skillsLabel: 'Main skills',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'What I work with',
    intro: 'The tools I reach for most, from the server and the browser down to the hardware.',
    groups: [
      { name: 'Backend', items: ['Python', 'Flask', 'REST APIs'] },
      { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'Vue 3', 'React', 'Vite'] },
      { name: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Android'] },
      {
        name: 'Embedded & hardware',
        items: ['Raspberry Pi', 'C++', 'Sensors & relays', 'Control electronics', 'IoT'],
      },
      {
        name: 'Tools & infrastructure',
        items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Cloudflare Tunnel', 'Vercel'],
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
        title: 'Independent software developer',
        organization: 'Personal & open-source projects',
        period: 'Ongoing',
        description:
          'Building and hosting my own projects end to end: this portfolio (Vue 3, TypeScript, Flask), a file server on a Raspberry Pi published through a Cloudflare Tunnel, and a C++ command-line client for it.',
      },
      {
        title: 'Intelligent chick incubator',
        organization: 'Embedded & IoT project · BSc thesis',
        period: '2025',
        description:
          'A Raspberry Pi 4 controls the whole incubator: an AHT20 sensor measures temperature and humidity, relays switch the heating element and the fan, a DC motor turns the eggs, a limit switch detects the open lid, and LEDs show the state. I wired the electronics myself and wrote the Python backend and an Android app (Kotlin, Jetpack Compose, Retrofit) to monitor and control it. Tested in two real hatching cycles.',
        links: [
          { label: 'Hardware & backend', href: 'https://github.com/Sciencewolf/szakdolgozat-raspberry-pi' },
          { label: 'Android app', href: 'https://github.com/Sciencewolf/szakdolgozat-app' },
        ],
      },
    ] as TimelineItem[],
    education: [
      {
        title: 'Computer Science MSc',
        organization: 'University of Debrecen · Faculty of Informatics',
        period: '2026 – 2028',
        description:
          'Interested in embedded systems, IoT and edge computing, and in how they connect to the web.',
      },
      {
        title: 'Computer Science BSc',
        organization: 'University of Debrecen · Faculty of Informatics',
        period: '2022 – 2026',
        description:
          'Thesis: Intelligent chick incubator — Raspberry Pi and Android integration (written in Hungarian).',
        links: [{ label: 'Thesis (PDF)', href: 'https://github.com/Sciencewolf/szakdolgozat/blob/main/szakdolgozat.pdf' }],
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
