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
      "I'm a software developer working across the stack — Python and Flask on the backend, TypeScript and React on the front — and I'm currently doing my Computer Science MSc at the University of Debrecen. I keep one foot in hardware: my BSc thesis was a smart incubator built on a Raspberry Pi, with its own control electronics and an Android app to run it. These days I'm most interested in where embedded systems, IoT and edge computing meet the web.",
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
      { name: 'Mobile', items: ['Kotlin', 'Android'] },
      {
        name: 'Embedded & hardware',
        items: ['Raspberry Pi', 'C++', 'Control electronics', 'IoT'],
      },
      {
        name: 'Tools & infrastructure',
        items: ['Git', 'GitHub Actions', 'Linux', 'Cloudflare Tunnel', 'Vercel'],
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
        title: 'Smart incubator',
        organization: 'Embedded & IoT project',
        period: '',
        description:
          'Designed and built an incubator controlled by a Raspberry Pi, with custom control electronics and an Android app to operate it.',
      },
    ],
    education: [
      {
        title: 'Computer Science MSc',
        organization: 'University of Debrecen',
        period: 'In progress',
        description:
          'Interested in embedded systems, IoT and edge computing, and in how they connect to the web.',
      },
      {
        title: 'BSc degree',
        organization: '',
        period: '',
        description: 'Thesis: a Raspberry Pi based smart incubator with an Android control app.',
      },
    ],
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
