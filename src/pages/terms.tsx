import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './legal.module.css';

export default function Terms(): ReactNode {
  return (
    <Layout
      title="Terms of Service"
      description="Pentora Terms of Service - Legal terms and conditions for using Pentora.">
      <div className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalHeader}>
            <Heading as="h1" className={styles.legalTitle}>
              Terms of Service
            </Heading>
            <p className={styles.legalSubtitle}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className={styles.legalContent}>
            <section className={styles.legalSection}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Pentora ("the Service"), you agree to be bound by these Terms of Service
                ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
              <p>
                These Terms apply to all users of the Service, including open source users and Enterprise customers.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>2. License and Usage</h2>

              <h3>2.1 Open Source License</h3>
              <p>
                The open source version of Pentora is licensed under the Apache License 2.0.
                You are free to:
              </p>
              <ul>
                <li>Use the software for any purpose, including commercial use</li>
                <li>Modify the source code</li>
                <li>Distribute the software</li>
                <li>Sublicense the software</li>
              </ul>
              <p>
                Subject to the conditions in the Apache License 2.0, including preservation of copyright
                and license notices.
              </p>

              <h3>2.2 Enterprise License</h3>
              <p>
                Enterprise customers receive additional proprietary features under a separate
                commercial license agreement. Enterprise features are not covered by the Apache License.
              </p>

              <h3>2.3 Restrictions</h3>
              <p>You may not:</p>
              <ul>
                <li>Use Pentora for illegal activities or to violate the rights of others</li>
                <li>Attempt to reverse engineer Enterprise-only features</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use Pentora to scan systems you do not own or have permission to scan</li>
                <li>Interfere with or disrupt the Service or servers</li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>3. Acceptable Use</h2>

              <h3>3.1 Legal Compliance</h3>
              <p>
                You must use Pentora in compliance with all applicable laws and regulations.
                You are solely responsible for ensuring you have proper authorization to scan
                any systems or networks.
              </p>

              <h3>3.2 Prohibited Activities</h3>
              <p>You may not use Pentora to:</p>
              <ul>
                <li>Conduct unauthorized penetration testing or security assessments</li>
                <li>Scan systems without explicit permission from the owner</li>
                <li>Exploit discovered vulnerabilities for malicious purposes</li>
                <li>Interfere with critical infrastructure or emergency services</li>
                <li>Violate privacy laws or regulations</li>
                <li>Harass, threaten, or harm others</li>
              </ul>

              <h3>3.3 Responsible Disclosure</h3>
              <p>
                If you discover vulnerabilities in third-party systems using Pentora,
                you must follow responsible disclosure practices and notify the affected parties.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>4. Enterprise Services</h2>

              <h3>4.1 Subscription</h3>
              <p>
                Enterprise services are provided on a subscription basis. Fees are specified
                in your service agreement and are non-refundable except as required by law.
              </p>

              <h3>4.2 Service Level Agreement</h3>
              <p>
                Enterprise customers receive SLA guarantees as specified in their service agreement.
                SLAs do not apply to the open source version.
              </p>

              <h3>4.3 Support</h3>
              <p>
                Support is provided to Enterprise customers according to their service tier.
                Open source users receive community support only.
              </p>

              <h3>4.4 Termination</h3>
              <p>
                Either party may terminate Enterprise services with 30 days written notice.
                Upon termination, you must cease using Enterprise features and delete all data.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>5. Intellectual Property</h2>

              <h3>5.1 Ownership</h3>
              <p>
                Pentora and its open source components are owned by their respective contributors.
                Enterprise features and proprietary components are owned by Pentora.
              </p>

              <h3>5.2 Trademarks</h3>
              <p>
                "Pentora" and associated logos are trademarks. You may not use these trademarks
                without prior written permission, except as permitted under fair use.
              </p>

              <h3>5.3 Your Data</h3>
              <p>
                You retain all rights to your scan results and data. We claim no ownership
                over your data. For Enterprise customers, we have a limited license to process
                your data to provide the Service.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>6. Disclaimers</h2>

              <h3>6.1 No Warranty</h3>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3>6.2 Accuracy</h3>
              <p>
                We do not guarantee that Pentora will detect all vulnerabilities or that
                scan results are completely accurate. Security scanning is complex and
                false positives/negatives may occur.
              </p>

              <h3>6.3 Availability</h3>
              <p>
                We do not guarantee uninterrupted or error-free operation of the Service.
                Maintenance, updates, and unforeseen issues may cause downtime.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PENTORA SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
                OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p>
                IN NO EVENT SHALL PENTORA'S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID FOR THE
                SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p>
                Some jurisdictions do not allow limitation of liability, so these limitations
                may not apply to you.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Pentora and its affiliates from any claims,
                damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul>
                <li>Your use or misuse of the Service</li>
                <li>Violation of these Terms</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Infringement of third-party rights</li>
                <li>Unauthorized scanning of systems</li>
              </ul>
            </section>

            <section className={styles.legalSection}>
              <h2>9. Privacy</h2>
              <p>
                Our use of your personal information is governed by our{' '}
                <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>10. Modifications</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be
                notified via:
              </p>
              <ul>
                <li>Posting updated Terms on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Email notification to Enterprise customers</li>
              </ul>
              <p>
                Continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>11. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the
                jurisdiction where Pentora is registered, without regard to conflict of law principles.
              </p>
              <p>
                Any disputes shall be resolved in the courts of that jurisdiction, except where
                prohibited by law.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>12. Dispute Resolution</h2>

              <h3>12.1 Informal Resolution</h3>
              <p>
                Before filing a claim, you agree to contact us at{' '}
                <a href="mailto:legal@pentora.ai">legal@pentora.ai</a> to attempt to resolve
                the dispute informally.
              </p>

              <h3>12.2 Arbitration</h3>
              <p>
                Enterprise customers: disputes will be resolved through binding arbitration
                as specified in your service agreement, except where prohibited by law.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid,
                that provision will be limited or eliminated to the minimum extent necessary,
                and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>14. Entire Agreement</h2>
              <p>
                These Terms, together with the Privacy Policy and any applicable service agreements,
                constitute the entire agreement between you and Pentora regarding the Service.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h2>15. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
              <ul className={styles.contactList}>
                <li><strong>General Inquiries:</strong> <a href="mailto:legal@pentora.ai">legal@pentora.ai</a></li>
                <li><strong>Enterprise Sales:</strong> <a href="mailto:sales@pentora.ai">sales@pentora.ai</a></li>
                <li><strong>Security:</strong> <a href="mailto:security@pentora.ai">security@pentora.ai</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/pentora-ai/pentora">github.com/pentora-ai/pentora</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
