import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './pricing.module.css';

function PricingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <span>Pricing</span>
          </div>
          <Heading as="h1" className={styles.title}>
            Simple, transparent pricing
          </Heading>
          <p className={styles.subtitle}>
            Start for free with our open source version, or unlock enterprise features
            with dedicated support and SLAs.
          </p>
        </div>
      </div>
    </header>
  );
}

function PricingCards() {
  const plans = [
    {
      name: 'Open Source',
      description: 'Perfect for individuals and small teams',
      price: 'Free',
      priceSubtext: 'Forever',
      badge: 'Most Popular',
      badgeColor: 'primary',
      features: [
        'Unlimited scans',
        'Fast port scanning',
        'Service detection & banner grabbing',
        'CVE vulnerability matching',
        'Plugin system',
        'JSON, HTML, CSV output',
        'CLI interface',
        'Community support',
        'Open source (Apache 2.0)',
      ],
      limitations: [],
      cta: 'Get Started',
      ctaLink: 'https://github.com/pentora-ai/pentora',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations that need advanced features and support',
      price: 'Custom',
      priceSubtext: 'Contact sales',
      badge: 'Advanced',
      badgeColor: 'secondary',
      features: [
        'Everything in Open Source',
        'Priority support & SLA',
        'Dedicated account manager',
        'Custom plugin development',
        'Advanced reporting & analytics',
        'Role-based access control (RBAC)',
        'SSO / SAML integration',
        'Audit logging & compliance',
        'Multi-tenancy support',
        'API access',
        'Training & onboarding',
        'Custom integrations',
      ],
      limitations: [],
      cta: 'Talk to Sales',
      ctaLink: 'mailto:sales@pentora.ai',
      highlighted: false,
    },
  ];

  return (
    <section className={styles.pricingCards}>
      <div className="container">
        <div className={styles.cardsGrid}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={clsx(
                styles.pricingCard,
                plan.highlighted && styles.highlighted
              )}>
              {plan.badge && (
                <div className={clsx(
                  styles.badge,
                  styles[`badge${plan.badgeColor.charAt(0).toUpperCase() + plan.badgeColor.slice(1)}`]
                )}>
                  {plan.badge}
                </div>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <div className={styles.pricing}>
                <div className={styles.price}>{plan.price}</div>
                <div className={styles.priceSubtext}>{plan.priceSubtext}</div>
              </div>
              <Link
                className={clsx(
                  'button button--lg',
                  plan.highlighted ? 'button--primary' : 'button--secondary',
                  styles.ctaButton
                )}
                href={plan.ctaLink}>
                {plan.cta}
              </Link>
              <div className={styles.features}>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureComparison() {
  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'Port Scanning', opensource: true, enterprise: true },
        { name: 'Service Detection', opensource: true, enterprise: true },
        { name: 'CVE Matching', opensource: true, enterprise: true },
        { name: 'Plugin System', opensource: true, enterprise: true },
        { name: 'Multiple Output Formats', opensource: true, enterprise: true },
        { name: 'CLI Interface', opensource: true, enterprise: true },
      ],
    },
    {
      category: 'Advanced Features',
      items: [
        { name: 'API Access', opensource: false, enterprise: true },
        { name: 'Web Dashboard', opensource: false, enterprise: true },
        { name: 'Advanced Analytics', opensource: false, enterprise: true },
        { name: 'Custom Reporting', opensource: false, enterprise: true },
        { name: 'Scheduled Scans', opensource: false, enterprise: true },
        { name: 'Webhooks & Notifications', opensource: false, enterprise: true },
      ],
    },
    {
      category: 'Security & Compliance',
      items: [
        { name: 'Role-Based Access Control', opensource: false, enterprise: true },
        { name: 'SSO / SAML Integration', opensource: false, enterprise: true },
        { name: 'Audit Logging', opensource: false, enterprise: true },
        { name: 'Compliance Reports (SOC 2, ISO)', opensource: false, enterprise: true },
        { name: 'Multi-Tenancy', opensource: false, enterprise: true },
        { name: 'Data Residency Options', opensource: false, enterprise: true },
      ],
    },
    {
      category: 'Support',
      items: [
        { name: 'Community Support', opensource: true, enterprise: true },
        { name: 'Email Support', opensource: false, enterprise: true },
        { name: 'Priority Support', opensource: false, enterprise: true },
        { name: 'Dedicated Account Manager', opensource: false, enterprise: true },
        { name: 'SLA Guarantee', opensource: false, enterprise: true },
        { name: 'Training & Onboarding', opensource: false, enterprise: true },
        { name: 'Custom Plugin Development', opensource: false, enterprise: true },
      ],
    },
  ];

  return (
    <section className={styles.featureComparison}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Feature Comparison
          </Heading>
          <p className={styles.sectionSubtitle}>
            See what's included in each plan
          </p>
        </div>
        <div className={styles.comparisonTable}>
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th className={styles.opensourceColumn}>
                  <span>Open Source</span>
                </th>
                <th className={styles.enterpriseColumn}>
                  <span>Enterprise</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, idx) => (
                <React.Fragment key={idx}>
                  <tr className={styles.categoryRow}>
                    <td colSpan={3}>{category.category}</td>
                  </tr>
                  {category.items.map((item, i) => (
                    <tr key={i}>
                      <td className={styles.featureName}>{item.name}</td>
                      <td className={styles.checkCell}>
                        {item.opensource ? (
                          <span className={styles.checkmark}>✓</span>
                        ) : (
                          <span className={styles.cross}>—</span>
                        )}
                      </td>
                      <td className={styles.checkCell}>
                        {item.enterprise ? (
                          <span className={styles.checkmark}>✓</span>
                        ) : (
                          <span className={styles.cross}>—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'Is Pentora really free?',
      answer: 'Yes! Pentora is 100% open source under the Apache 2.0 license. You can use it for free forever, including for commercial purposes.',
    },
    {
      question: 'What\'s included in Enterprise?',
      answer: 'Enterprise includes priority support, SLA guarantees, advanced features like SSO/SAML, RBAC, API access, custom plugin development, and dedicated account management.',
    },
    {
      question: 'Can I self-host the Enterprise version?',
      answer: 'Yes! Enterprise can be deployed on-premises or in your own cloud infrastructure. We provide full support for self-hosted deployments.',
    },
    {
      question: 'How does Enterprise support work?',
      answer: 'Enterprise customers get priority email and chat support, dedicated Slack channels, and a dedicated account manager. We offer SLAs with response times as low as 1 hour for critical issues.',
    },
    {
      question: 'Can I try Enterprise before buying?',
      answer: 'Yes! We offer a 30-day trial of Enterprise features. Contact our sales team to get started.',
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we offer flexible pricing for large organizations. Contact sales to discuss your specific needs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, ACH transfers, and wire transfers. Annual contracts can be invoiced.',
    },
    {
      question: 'Can I contribute to the open source version?',
      answer: 'Absolutely! We welcome contributions from the community. Check out our GitHub repository to get started.',
    },
  ];

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Frequently Asked Questions
          </Heading>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBackground}>
        <div className={styles.ctaGradient}></div>
      </div>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to get started?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Start with our free open source version today, or talk to sales about Enterprise.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimaryButton)}
              href="https://github.com/pentora-ai/pentora">
              Get Started Free →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondaryButton)}
              href="mailto:sales@pentora.ai">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing(): ReactNode {
  return (
    <Layout
      title="Pricing"
      description="Simple, transparent pricing for Pentora. Start free with open source or unlock enterprise features.">
      <PricingHeader />
      <main>
        <PricingCards />
        <FeatureComparison />
        <FAQ />
        <CallToAction />
      </main>
    </Layout>
  );
}
