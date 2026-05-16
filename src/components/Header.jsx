import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Résumé', external: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    const onScroll = () => setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header>
        <a href="#about" className="header-name">
          <em>Sbusiso</em> Ndlovu.
        </a>
        <ul className={`nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ href, label, external }, i) => (
            <li key={label} style={{ '--i': i }}>
              <a
                href={href}
                onClick={close}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`menu${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <ion-icon name={menuOpen ? 'close-outline' : 'reorder-two-outline'}></ion-icon>
        </button>
      </header>
      <div
        className={`nav-backdrop${menuOpen ? ' visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  )
}
