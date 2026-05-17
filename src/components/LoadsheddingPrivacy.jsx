export default function LoadsheddingPrivacy() {
  return (
    <div className="container">
      <header>
        <a className="header-name" href="/">Sibusiso <em>Ndlovu</em></a>
        <a className="back-link" href="/">← Back</a>
      </header>

      <main className="privacy">
        <p className="about-eyebrow">Legal</p>
        <h1 className="about-headline" style={{ marginBottom: 12 }}>Privacy Policy</h1>
        <p className="privacy-meta">Loadshedding App &nbsp;·&nbsp; Last updated: May 2026</p>

        <p className="privacy-body">
          This privacy policy applies to the <strong>Loadshedding</strong> mobile application
          (package name: <code>com.cyriandev.loadshedding</code>) published by Sibusiso Ndlovu
          ("we", "us", or "our").
        </p>

        <h2 className="privacy-heading">Information We Collect</h2>
        <p className="privacy-body">
          We do not collect, store, or transmit any personally identifiable information directly.
          The app functions without requiring an account or any personal data from you.
        </p>
        <p className="privacy-body">
          The app displays publicly available loadshedding schedule data to help users in South
          Africa track electricity outages in their area. No data you view or interact with in the
          app is sent to our servers.
        </p>

        <h2 className="privacy-heading">Advertising (Google AdMob)</h2>
        <p className="privacy-body">
          The app uses <strong>Google AdMob</strong> to display advertisements. AdMob may collect
          and use the following data to serve personalised or non-personalised ads:
        </p>
        <ul className="privacy-list">
          <li>Device identifiers (Advertising ID / IDFA)</li>
          <li>IP address and approximate location</li>
          <li>Device type, OS version, and language</li>
          <li>Ad interaction data (views, clicks)</li>
        </ul>
        <p className="privacy-body">
          This data is collected and processed by Google LLC in accordance with their privacy
          policy. You can review Google's data practices at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>.
        </p>
        <p className="privacy-body">
          You can opt out of personalised advertising at any time through your device settings:
          on Android via <em>Settings → Google → Ads</em>, and on iOS via{' '}
          <em>Settings → Privacy &amp; Security → Tracking</em>.
        </p>

        <h2 className="privacy-heading">Data Sharing</h2>
        <p className="privacy-body">
          We do not sell, trade, or otherwise transfer your personal information to any third
          parties beyond the advertising services described above.
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
        <p>© {new Date().getFullYear()} Sibusiso Ndlovu.</p>
      </footer>
    </div>
  )
}
