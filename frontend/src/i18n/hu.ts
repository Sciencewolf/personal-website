import type { Messages } from './en'

export const hu: Messages = {
  meta: {
    title: 'Márton Áron • Szoftverfejlesztő',
    description:
      'Szoftverfejlesztő és programtervező informatikus MSc hallgató Debrecenben. Full-stack webalkalmazásokat és Raspberry Pi hardverprojekteket készítek Python, React és Kotlin segítségével.',
  },
  nav: {
    label: 'Főnavigáció',
    home: 'Márton Áron – kezdőlap',
    about: 'Rólam',
    skills: 'Készségek',
    experience: 'Tapasztalat',
    projects: 'Projektek',
    contact: 'Kapcsolat',
    cv: 'Önéletrajz',
    github: 'GitHub',
    toggleMenu: 'Navigációs menü megnyitása',
    switchToLight: 'Váltás világos témára',
    switchToDark: 'Váltás sötét témára',
    switchLanguage: 'Nyelv váltása angolra',
  },
  welcome: {
    eyebrow: 'Szoftverfejlesztő · Debrecen, Magyarország',
    title: 'Szia, Márton Áron vagyok.',
    intro:
      'Szoftverfejlesztő vagyok, a teljes stackkel dolgozom — a háttérben Python és Flask, elöl TypeScript és React —, és jelenleg a Debreceni Egyetemen végzem az informatika MSc-t. Egyik lábam a hardvernél maradt: a BSc szakdolgozatom egy Raspberry Pi-re épülő okos inkubátor volt, saját vezérlő elektronikával és egy Android alkalmazással a vezérléséhez. Mostanában az érdekel a leginkább, ahol a beágyazott rendszerek, az IoT és az edge computing találkozik a weben.',
    viewWork: 'Munkáim',
    getInTouch: 'Kapcsolatfelvétel',
    skillsLabel: 'Fő készségek',
  },
  skills: {
    eyebrow: 'Készségek',
    title: 'Amivel dolgozom',
    intro: 'Az eszközök, amikhez a leggyakrabban nyúlok, a szervertől és a böngészőtől egészen a hardverig.',
    groups: [
      { name: 'Backend', items: ['Python', 'Flask', 'REST API-k'] },
      { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'Vue 3', 'React', 'Vite'] },
      { name: 'Mobil', items: ['Kotlin', 'Android'] },
      {
        name: 'Beágyazott rendszerek és hardver',
        items: ['Raspberry Pi', 'C++', 'Vezérlő elektronika', 'IoT'],
      },
      {
        name: 'Eszközök és infrastruktúra',
        items: ['Git', 'GitHub Actions', 'Linux', 'Cloudflare Tunnel', 'Vercel'],
      },
    ],
  },
  experience: {
    eyebrow: 'Háttér',
    title: 'Tapasztalat és tanulmányok',
    experienceHeading: 'Tapasztalat',
    educationHeading: 'Tanulmányok',
    experience: [
      {
        title: 'Önálló szoftverfejlesztő',
        organization: 'Saját és nyílt forráskódú projektek',
        period: 'Folyamatban',
        description:
          'A saját projektjeimet az elejétől a végéig magam építem és üzemeltetem: ez a portfólió (Vue 3, TypeScript, Flask), egy Raspberry Pi-n futó, Cloudflare Tunnelen át elérhető fájlszerver és egy C++ parancssoros kliens hozzá.',
      },
      {
        title: 'Okos inkubátor',
        organization: 'Beágyazott rendszer és IoT projekt',
        period: '',
        description:
          'Raspberry Pi-vel vezérelt inkubátort terveztem és építettem saját vezérlő elektronikával és egy Android alkalmazással a működtetéséhez.',
      },
    ],
    education: [
      {
        title: 'Programtervező informatikus MSc',
        organization: 'Debreceni Egyetem',
        period: 'Folyamatban',
        description:
          'A beágyazott rendszerek, az IoT és az edge computing érdekel, és hogy ezek hogyan kapcsolódnak a webhez.',
      },
      {
        title: 'BSc diploma',
        organization: '',
        period: '',
        description:
          'Szakdolgozat: Raspberry Pi alapú okos inkubátor Android vezérlőalkalmazással.',
      },
    ],
  },
  github: {
    eyebrow: 'Nyílt forráskód',
    title: 'Legfrissebb munkáim a GitHubon',
    viewProfile: 'Profil megtekintése',
    avatarAlt: '{name} profilképe',
    loading: 'GitHub repók betöltése…',
    publicRepository: 'Nyilvános repó',
    topicsLabel: 'Repó témakörei',
    noDescription: 'Egy projekt a GitHub munkaterületemről.',
    liveSite: 'Élő oldal',
    openLiveProject: 'Élő projekt megnyitása',
    recentlyUpdated: 'Nemrég frissítve',
    updated: 'Frissítve: {date}',
    partialError: 'Néhány GitHub-adatot nem sikerült betölteni.',
    unavailable: 'A GitHub-adatok átmenetileg nem érhetők el.',
    empty: 'Még nincs megjeleníthető nyilvános repó.',
    tryAgain: 'Újra',
    retry: 'Újra',
  },
  contact: {
    eyebrow: 'Kapcsolat',
    title: 'Van egy projektötleted? Beszéljünk róla.',
    text: 'Szívesen veszek részt érdekes projektekben, hallgatok új lehetőségeket, és beszélgetek arról, hogyan lehet átgondolt szoftvert építeni.',
    footerLinks: 'Lábléc hivatkozások',
    email: 'E-mail',
    creditBefore: 'Szeretettel',
    creditHeart: 'szeretet',
    creditAfter: 'készítette:',
  },
}
