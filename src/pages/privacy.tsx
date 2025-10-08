import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './legal.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy"
      description="Pentora Privacy Policy - How we collect, use, and protect your data.">
      <div className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalHeader}>
            <Heading as="h1" className={styles.legalTitle}>
              Privacy Policy
            </Heading>
            <p className={styles.legalSubtitle}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className={styles.legalContent}>
            <section className={styles.legalSection}>
              <h2>Introduction</h2>
              <p>
                At Pentora, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our security scanning tool
                and related services.
              </p>
              <p>
                Pentora is committed to being transparent about data collection. Our open source
                version does not collect any telemetry or usage data.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Information We Collect</h2>

              <h3>Open Source Version</h3>
              <p>
                The open source version of Pentora runs entirely on your infrastructure and does not
                collect or transmit any data to Pentora servers. We do not have access to:
              </p>
              <ul>
                <li>Your scan results</li>
                <li>Target hosts or IP addresses</li>
                <li>Discovered vulnerabilities</li>
                <li>Usage patterns or telemetry</li>
                <li>Any personally identifiable information</li>
              </ul>

              <h3>Enterprise Version</h3>
              <p>
                For Enterprise customers using our managed service, we may collect:
              </p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, company name, and billing details</li>
                <li><strong>Usage Data:</strong> Feature usage, scan frequency, and performance metrics (with your consent)</li>
                <li><strong>Support Data:</strong> Support tickets, chat logs, and feedback</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
              </ul>

              <h3>Website Analytics</h3>
              <p>
                Our website (pentora.ai) uses minimal analytics to understand visitor behavior:
              </p>
              <ul>
                <li>Page views and navigation patterns</li>
                <li>Geographic location (country/region level only)</li>
                <li>Referral sources</li>
                <li>Device and browser information</li>
              </ul>
              <p>
                We use privacy-focused analytics tools and do not use third-party tracking cookies.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>How We Use Your Information</h2>
              <p>We use collected information only for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Customer Support:</strong> To respond to inquiries and provide technical support</li>
                <li><strong>Billing:</strong> To process payments and manage subscriptions (Enterprise only)</li>
                <li><strong>Communication:</strong> To send service updates, security alerts, and newsletters (opt-in only)</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to provide our services
                and fulfill the purposes outlined in this policy:
              </p>
              <ul>
                <li><strong>Account Data:</strong> Retained while your account is active, plus 90 days after deletion</li>
                <li><strong>Scan Results:</strong> Enterprise customers control retention period (default: 90 days)</li>
                <li><strong>Support Tickets:</strong> Retained for 2 years for quality assurance</li>
                <li><strong>Billing Records:</strong> Retained for 7 years as required by law</li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data:
              </p>
              <ul>
                <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication (including MFA)</li>
                <li>Secure coding practices and dependency scanning</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure.
                We cannot guarantee absolute security.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share data only in these limited circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our services (hosting, payment processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or court order</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
              <p>
                All service providers are contractually obligated to protect your data and use it
                only for specified purposes.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data (right to be forgotten)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:privacy@pentora.ai">privacy@pentora.ai</a>.
                We will respond within 30 days.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries other than your own.
                We ensure adequate safeguards are in place, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Data processing agreements with all third parties</li>
                <li>Compliance with applicable data protection laws (GDPR, CCPA, etc.)</li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>Children's Privacy</h2>
              <p>
                Pentora is not intended for use by individuals under the age of 18.
                We do not knowingly collect personal information from children.
                If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Cookies and Tracking</h2>
              <p>
                Our website uses minimal cookies for essential functionality only:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website operation (authentication, preferences)</li>
                <li><strong>Analytics Cookies:</strong> Privacy-focused analytics (opt-out available)</li>
              </ul>
              <p>
                We do not use advertising cookies or third-party tracking. You can control cookies
                through your browser settings.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material
                changes by:
              </p>
              <ul>
                <li>Posting the updated policy on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications to Enterprise customers</li>
              </ul>
              <p>
                Your continued use of Pentora after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className={styles.contactList}>
                <li><strong>Email:</strong> <a href="mailto:privacy@pentora.ai">privacy@pentora.ai</a></li>
                <li><strong>Security Issues:</strong> <a href="mailto:security@pentora.ai">security@pentora.ai</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/pentora-ai/pentora">github.com/pentora-ai/pentora</a></li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>Compliance</h2>
              <p>Pentora is committed to compliance with:</p>
              <ul>
                <li><strong>GDPR:</strong> General Data Protection Regulation (EU)</li>
                <li><strong>CCPA:</strong> California Consumer Privacy Act</li>
                <li><strong>SOC 2:</strong> Type II certification (Enterprise)</li>
                <li><strong>ISO 27001:</strong> Information security management (Enterprise)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
