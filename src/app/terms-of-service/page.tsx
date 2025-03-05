import { PolicyLayout } from '@/components/layout/policy-layout'

export default function TermsOfService() {
  return (
    <PolicyLayout>
      <h1>Terms of Service</h1>
      <p>By using Salesbox, you agree to these terms. Please read them carefully.</p>

      <h2>Service Usage</h2>
      <ul>
        <li>You must be 18+ to use our services</li>
        <li>Maintain accurate account information</li>
        <li>Responsible for all activity under your account</li>
      </ul>

      <h2>User Obligations</h2>
      <ul>
        <li>Use services legally and ethically</li>
        <li>Protect account credentials</li>
        <li>Report unauthorized access</li>
        <li>Comply with data protection laws</li>
      </ul>

      <h2>Service Modifications</h2>
      <p>We reserve the right to modify or discontinue services with notice. We&apos;re not liable for service interruptions.</p>
    </PolicyLayout>
  )
} 