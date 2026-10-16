export default function KasiLingoDeleteAccount() {
  return (
    <div className="container">
      <header>
        <a className="header-name" href="/">Kasi <em>Lingo</em></a>
        <a className="back-link" href="/">← Back</a>
      </header>

      <main className="privacy">
        <p className="about-eyebrow">Legal</p>
        <h1 className="about-headline" style={{ marginBottom: 12 }}>Delete Your Account</h1>
        <p className="privacy-meta">Kasi Lingo &nbsp;·&nbsp; Last updated: October 2026</p>

        <p className="privacy-body">
          This page explains how to delete your <strong>Kasi Lingo</strong> account
          (package name: <code>com.cyriandev.kasilingo</code>) and what happens to your data
          when you do.
        </p>

        <h2 className="privacy-heading">Delete in the app</h2>
        <p className="privacy-body">
          Open Kasi Lingo, go to your <strong>Profile</strong> tab, tap <strong>Edit profile</strong>,
          then scroll down and tap <strong>Delete account</strong>. This takes effect immediately —
          no waiting period.
        </p>

        <h2 className="privacy-heading">Request deletion without the app</h2>
        <p className="privacy-body">
          If you no longer have the app installed, or can't sign in, email us at{' '}
          <a href="mailto:cyriandev@gmail.com?subject=Delete%20my%20Kasi%20Lingo%20account">
            cyriandev@gmail.com
          </a>{' '}
          from the email address on your account and ask us to delete it. We'll confirm once it's
          done, typically within a few days.
        </p>

        <h2 className="privacy-heading">What gets deleted</h2>
        <p className="privacy-body">
          Deleting your account removes your profile, email address, and push notification token
          from our systems. Words, definitions, comments, votes, and audio pronunciation recordings
          you've contributed to the shared dictionary may be retained in anonymised form — detached
          from your identity — to preserve the dictionary for other users.
        </p>

        <h2 className="privacy-heading">Questions</h2>
        <p className="privacy-body">
          See our <a href="/kasi-lingo/privacy">Privacy Policy</a> for more detail on what we
          collect and how it's used, or contact us at{' '}
          <a href="mailto:cyriandev@gmail.com">cyriandev@gmail.com</a>.
        </p>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', marginTop: 56, paddingTop: 28 }}>
        <p>© {new Date().getFullYear()} cyrian.dev.</p>
      </footer>
    </div>
  )
}
