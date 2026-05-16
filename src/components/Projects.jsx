const projects = [
  {
    type: 'Mobile App',
    name: 'Moving Parcels',
    url: 'https://play.google.com/store/apps/developer?id=Molo',
    description:
      'A peer-to-peer delivery platform where drivers earn by dropping off parcels along their existing routes. Two beautifully designed apps — one for drivers, one for senders. Built with React Native and a Laravel backend.',
    cta: 'View on Play Store',
    icon: 'logo-google-playstore',
  },
  {
    type: 'Web App',
    name: 'Notifyza',
    url: 'https://notifyza.co.za',
    description:
      'A bulk SMS platform for South African businesses. Send to individual contacts or large lists in seconds. Built with React and Laravel.',
    cta: 'Visit site',
    icon: 'planet-outline',
  },
  {
    type: 'Mobile App',
    name: 'Loadshedding App',
    url: 'https://play.google.com/store/apps/details?id=com.cyriandev.loadshedding',
    description:
      'A go-to app for navigating South Africa\'s loadshedding — real-time national status, area schedules, live tweets, and a personal watchlist. Built with React Native.',
    cta: 'View on Play Store',
    icon: 'logo-google-playstore',
  },
  {
    type: 'Web App',
    name: 'Movies & TV',
    url: 'https://moviesntv.cyriandev.co.za',
    description:
      'A slick, dark-themed movie discovery app powered by the TMDB API. Find your next watch with a clean search and browsing experience. Built with React and Bootstrap.',
    cta: 'Visit site',
    icon: 'planet-outline',
  },
]

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <p className="section-eyebrow">Featured Work</p>
      <h2 className="section-title">Things I've built</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <span className="project-type">{project.type}</span>
            <span className="project-name">{project.name}</span>
            <p className="project-description">{project.description}</p>
            <span className="project-footer">
              <ion-icon name={project.icon}></ion-icon>
              {project.cta}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
