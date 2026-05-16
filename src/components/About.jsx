const techStack = [
  { icon: 'logo-react', label: 'React' },
  { icon: 'logo-react', label: 'React Native' },
  { icon: 'logo-javascript', label: 'JavaScript' },
  { icon: 'logo-nodejs', label: 'Node.js' },
  { icon: 'logo-laravel', label: 'Laravel' },
  { icon: 'logo-firebase', label: 'Firebase' },
  { icon: 'logo-html5', label: 'HTML5' },
  { icon: 'logo-css3', label: 'CSS3' },
]

export default function About() {
  return (
    <div id="about" className="about">
      <p className="about-eyebrow">Software Developer · South Africa</p>

      <h1 className="about-headline">
        I build software<br />
        people <span className="accent">actually use.</span>
      </h1>

      <p className="about-bio">
        From apps shipped on the Play Store to web platforms handling real transactions —
        I turn ideas into polished, production-ready products. I specialise in React,
        React Native, and Laravel, and I care as much about the experience as I do
        about the code behind it.
      </p>

      <div className="tech-stack">
        {techStack.map(({ icon, label }) => (
          <span className="tech-pill" key={label}>
            <ion-icon name={icon}></ion-icon>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
