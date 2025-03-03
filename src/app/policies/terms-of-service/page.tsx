import PolicyLayout from '../layout'

export default function TermsOfService() {
  return (
    <PolicyLayout>
      <h1>Terms of Service</h1>
      <p>By accessing Salesbox ("Platform"), you agree to these Terms of Service governing your use of our business management solutions.</p>

      <h2>Account Responsibilities</h2>
      <ul>
        <li>Maintain accurate account information</li>
        <li>Keep login credentials secure</li>
        <li>Notify us immediately of unauthorized use</li>
      </ul>

      <h2>Service Usage</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer or modify the Platform</li>
        <li>Use the service for illegal activities</li>
        <li>Disrupt platform integrity</li>
      </ul>

      <h2>Termination</h2>
      <p>We reserve the right to suspend or terminate accounts violating these terms. Paid subscriptions will receive prorated refunds where applicable.</p>
    </PolicyLayout>
  )
} 