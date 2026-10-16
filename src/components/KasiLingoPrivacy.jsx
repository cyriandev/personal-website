export default function KasiLingoPrivacy() {
  return (
    <div className="container">
      <header>
        <a className="header-name" href="/">Kasi <em>Lingo</em></a>
        <a className="back-link" href="/">← Back</a>
      </header>

      <main className="privacy">
        <p className="about-eyebrow">Legal</p>
        <h1 className="about-headline" style={{ marginBottom: 12 }}>Privacy Policy</h1>
        <p className="privacy-meta">Kasi Lingo &nbsp;·&nbsp; Last updated: October 2026</p>

        <p className="privacy-body">
          This privacy policy applies to the <strong>Kasi Lingo</strong> mobile application
          (package name: <code>com.cyriandev.kasilingo</code>) published by Sibusiso Ndlovu
          ("we", "us", or "our"). Kasi Lingo is a crowd-sourced dictionary of South African
          township slang.
        </p>

        <h2 className="privacy-heading">Information We Collect</h2>
        <p className="privacy-body">
          To create an account, we ask for your email address, which we use to send a one-time
          passcode for sign-in — we never collect or store a password. You also choose a username
          and, optionally, a profile photo.
        </p>
        <p className="privacy-body">
          Content you choose to submit — words, definitions, comments, votes, audio pronunciation
          recordings, and the township tags you attach to a word — is stored on our servers and
          may be visible to other users of the app. If you record a pronunciation, the app
          requests microphone access to do so.
        </p>
        <p className="privacy-body">
          We use a randomly generated install identifier, kept only on your device, to understand
          how the app is used (for example, which screens are opened or searched). This identifier
          is not linked to your name, email, or location, and you can turn it off at any time from
          your profile settings — nothing is recorded while it's off.
        </p>
        <p className="privacy-body">
          If you enable notifications, we store a device push token so we can send you alerts
          (for example, about replies or the word of the day). You can disable notifications at
          any time in your device or app settings.
        </p>

        <h2 className="privacy-heading">Data Sharing</h2>
        <p className="privacy-body">
          We do not sell, trade, or share your personal information with third parties for
          advertising. The app does not display ads. Your data is stored with{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
            Supabase
          </a>
          , our backend provider, which processes it on our behalf under their own privacy policy.
        </p>

        <h2 className="privacy-heading">Your Choices</h2>
        <p className="privacy-body">
          You can edit or delete your submitted content, update your profile, and delete your
          account at any time from within the app. Deleting your account removes your profile and
          personal data from our systems; content you've contributed to the shared dictionary may
          be retained in anonymised form to preserve the dictionary for other users.
        </p>

        <h2 className="privacy-heading">Children's Privacy</h2>
        <p className="privacy-body">
          This app is not directed at children under the age of 13. We do not knowingly collect
          personal information from children. If you believe a child has provided personal
          information through the app, please contact us so we can take appropriate action.
        </p>

        <h2 className="privacy-heading">Changes to This Policy</h2>
        <p className="privacy-body">
          We may update this privacy policy from time to time. Any changes will be reflected on
          this page with an updated date. Continued use of the app after changes are posted
          constitutes acceptance of the revised policy.
        </p>

        <h2 className="privacy-heading">Contact</h2>
        <p className="privacy-body">
          If you have any questions or concerns about this privacy policy, please contact us at:
          <br /><br />
          <a href="mailto:cyriandev@gmail.com">cyriandev@gmail.com</a>
        </p>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', marginTop: 56, paddingTop: 28 }}>
        <p>© {new Date().getFullYear()} cyrian.dev.</p>
      </footer>
    </div>
  )
}
