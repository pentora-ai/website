import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './enterprise.module.css'

function EnterpriseHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className='container'>
        <div className={styles.headerContent}>
          <img src='/img/logo.svg' alt='Pentora Logo' className={styles.logo} />
          <div className={styles.badge}>
            <span>Enterprise</span>
          </div>
          <Heading as='h1' className={styles.title}>
            Security scanning for
            <br />
            <span className={styles.gradientText}>enterprise teams</span>
          </Heading>
          <p className={styles.subtitle}>
            Scale your security operations with enterprise features, dedicated
            support, and SLA guarantees. Built for teams that need more than
            open source.
          </p>
          <div className={styles.headerButtons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.primaryButton
              )}
              href='mailto:sales@pentora.ai'
            >
              Contact Sales →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function EnterpriseFeatures() {
  const features = [
    {
      icon: '',
      title: 'Advanced Security',
      description:
        'Enterprise-grade security features for compliance and governance.',
      items: [
        'SSO / SAML integration',
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Audit logging & compliance reports',
        'Data encryption at rest and in transit',
        'Custom security policies',
      ],
    },
    {
      icon: '',
      title: 'Scale & Performance',
      description: 'Handle massive scanning workloads with confidence.',
      items: [
        'Unlimited concurrent scans',
        'Distributed scanning architecture',
        'Auto-scaling infrastructure',
        'Priority processing queue',
        'Dedicated resources',
        'Performance SLA guarantees',
      ],
    },
    {
      icon: '',
      title: 'Integration & API',
      description:
        'Seamlessly integrate with your existing tools and workflows.',
      items: [
        'RESTful API access',
        'Webhook notifications',
        'CI/CD integrations (GitHub Actions, Jenkins, etc.)',
        'SIEM integrations (Splunk, ELK, etc.)',
        'Ticketing system integrations (Jira, ServiceNow)',
        'Custom integrations',
      ],
    },
    {
      icon: '',
      title: 'Advanced Reporting',
      description: 'Get insights with comprehensive reporting and analytics.',
      items: [
        'Executive dashboards',
        'Customizable reports',
        'Trend analysis & metrics',
        'Compliance reports (SOC 2, ISO 27001, PCI DSS)',
        'Export to PDF, Excel, CSV',
        'Scheduled report delivery',
      ],
    },
    {
      icon: '',
      title: 'Custom Development',
      description: 'Tailored solutions for your specific needs.',
      items: [
        'Custom plugin development',
        'Feature prioritization',
        'Dedicated engineering support',
        'Custom vulnerability checks',
        'Integration development',
        'Training & onboarding',
      ],
    },
    {
      icon: '',
      title: 'Premium Support',
      description: 'Get help when you need it with dedicated support.',
      items: [
        'Dedicated account manager',
        'Priority support (24/7 available)',
        '1-hour SLA for critical issues',
        'Direct Slack/Teams channel',
        'Regular check-ins & reviews',
        'On-site training available',
      ],
    },
  ]

  return (
    <section className={styles.enterpriseFeatures}>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <Heading as='h2' className={styles.sectionTitle}>
            Enterprise Features
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need to secure your infrastructure at scale
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <ul className={styles.featureList}>
                {feature.items.map((item, i) => (
                  <li key={i}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: 'Financial Services',
      industry: 'Banking & Finance',
      challenge:
        'Meeting strict compliance requirements while scanning critical infrastructure',
      solution:
        'Pentora Enterprise provides audit logging, compliance reports, and SOC 2 certification to meet regulatory requirements.',
      results: [
        'Reduced audit preparation time by 60%',
        'Automated compliance reporting',
        'Zero security incidents post-deployment',
      ],
    },
    {
      title: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge:
        'Securing patient data and meeting HIPAA compliance across 50+ facilities',
      solution:
        'Deployed Pentora Enterprise with RBAC, data encryption, and detailed audit trails for HIPAA compliance.',
      results: [
        'Achieved HIPAA compliance in 3 months',
        '100% coverage of all facilities',
        'Reduced vulnerability exposure by 80%',
      ],
    },
    {
      title: 'Cloud Infrastructure',
      industry: 'SaaS Platform',
      challenge: 'Scanning thousands of ephemeral cloud instances in real-time',
      solution:
        "Pentora Enterprise's distributed scanning and API integration enables automated, continuous security monitoring.",
      results: [
        'Scanning 10K+ instances daily',
        'Sub-5 minute detection time',
        'Integrated with CI/CD pipeline',
      ],
    },
    {
      title: 'Managed Security',
      industry: 'MSSP',
      challenge:
        'Providing security scanning services to 200+ enterprise clients',
      solution:
        'Multi-tenancy support and custom branding allows white-label deployment for each client.',
      results: [
        '5x increase in client capacity',
        '95% customer satisfaction',
        'Reduced operational costs by 40%',
      ],
    },
  ]

  return (
    <section className={styles.useCases}>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <Heading as='h2' className={styles.sectionTitle}>
            Enterprise Use Cases
          </Heading>
          <p className={styles.sectionSubtitle}>
            See how enterprises use Pentora to secure their infrastructure
          </p>
        </div>
        <div className={styles.casesGrid}>
          {cases.map((useCase, idx) => (
            <div key={idx} className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.caseIndustry}>{useCase.industry}</div>
                <h3 className={styles.caseTitle}>{useCase.title}</h3>
              </div>
              <div className={styles.caseSection}>
                <h4>Challenge</h4>
                <p>{useCase.challenge}</p>
              </div>
              <div className={styles.caseSection}>
                <h4>Solution</h4>
                <p>{useCase.solution}</p>
              </div>
              <div className={styles.caseSection}>
                <h4>Results</h4>
                <ul>
                  {useCase.results.map((result, i) => (
                    <li key={i}>
                      <span className={styles.resultIcon}>→</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Deployment() {
  const options = [
    {
      icon: '☁️',
      title: 'Cloud Hosted',
      description: 'Fully managed by Pentora. Zero infrastructure management.',
      features: [
        'Managed infrastructure',
        'Automatic updates',
        'High availability',
        '99.9% uptime SLA',
        'Global deployment',
      ],
    },
    {
      icon: '🏢',
      title: 'Self-Hosted',
      description: 'Deploy on your infrastructure for complete control.',
      features: [
        'Full data control',
        'Air-gapped deployment',
        'Custom infrastructure',
        'On-premises or private cloud',
        'Support included',
      ],
    },
    {
      icon: '🔄',
      title: 'Hybrid',
      description: 'Best of both worlds - flexibility where you need it.',
      features: [
        'Mix cloud and on-prem',
        'Data residency compliance',
        'Flexible deployment',
        'Unified management',
        'Custom architecture',
      ],
    },
  ]

  return (
    <section className={styles.deployment}>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <Heading as='h2' className={styles.sectionTitle}>
            Flexible Deployment Options
          </Heading>
          <p className={styles.sectionSubtitle}>
            Deploy Pentora Enterprise however you need
          </p>
        </div>
        <div className={styles.deploymentGrid}>
          {options.map((option, idx) => (
            <div key={idx} className={styles.deploymentCard}>
              <div className={styles.deploymentIcon}>{option.icon}</div>
              <h3 className={styles.deploymentTitle}>{option.title}</h3>
              <p className={styles.deploymentDescription}>
                {option.description}
              </p>
              <ul className={styles.deploymentFeatures}>
                {option.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Support() {
  return (
    <section className={styles.support}>
      <div className='container'>
        <div className={styles.supportContent}>
          <div className={styles.supportText}>
            <div className={styles.sectionBadge}>Support</div>
            <Heading as='h2' className={styles.sectionTitle}>
              World-class support
              <br />
              when you need it
            </Heading>
            <p className={styles.supportDescription}>
              Our enterprise support team is available 24/7 to help you succeed.
              From initial deployment to ongoing optimization, we're here for
              you.
            </p>
            <div className={styles.supportStats}>
              <div className={styles.supportStat}>
                <div className={styles.supportStatNumber}>{'<'}1h</div>
                <div className={styles.supportStatLabel}>
                  Response time for critical issues
                </div>
              </div>
              <div className={styles.supportStat}>
                <div className={styles.supportStatNumber}>24/7</div>
                <div className={styles.supportStatLabel}>Availability</div>
              </div>
              <div className={styles.supportStat}>
                <div className={styles.supportStatNumber}>99%</div>
                <div className={styles.supportStatLabel}>
                  Customer satisfaction
                </div>
              </div>
            </div>
          </div>
          <div className={styles.supportChannels}>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>💬</div>
              <h4>Direct Support</h4>
              <p>Dedicated Slack/Teams channel with your team</p>
            </div>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>📞</div>
              <h4>Phone Support</h4>
              <p>24/7 phone support for critical issues</p>
            </div>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>👨‍💼</div>
              <h4>Account Manager</h4>
              <p>Dedicated account manager for your success</p>
            </div>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>🎓</div>
              <h4>Training</h4>
              <p>On-site and remote training for your team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <div className='container'>
        <div className={styles.formContent}>
          <div className={styles.formText}>
            <Heading as='h2' className={styles.formTitle}>
              Ready to get started?
            </Heading>
            <p className={styles.formSubtitle}>
              Talk to our sales team to learn how Pentora Enterprise can help
              secure your infrastructure.
            </p>
            <ul className={styles.formBenefits}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Free 30-day trial
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Custom demo with your data
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Flexible pricing
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                No credit card required
              </li>
            </ul>
          </div>
          <div className={styles.formBox}>
            <h3>Contact Sales</h3>
            <p>Send us a message and we'll get back to you within 24 hours.</p>
            <Link
              href='mailto:sales@pentora.ai?subject=Enterprise Inquiry'
              className={clsx(
                'button button--primary button--lg',
                styles.primaryButton
              )}
            >
              Email Sales Team →
            </Link>
            <div className={styles.contactDivider}>or</div>
            <div className={styles.contactAlternative}>
              <p>Schedule a call with our team</p>
              <Link
                href='https://calendly.com/pentora-sales'
                className={clsx(
                  'button button--primary button--md',
                  styles.primaryButton
                )}
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Enterprise(): ReactNode {
  return (
    <Layout
      title='Enterprise'
      description='Pentora Enterprise - Security scanning for enterprise teams with advanced features, dedicated support, and SLA guarantees.'
    >
      <EnterpriseHeader />
      <main>
        <EnterpriseFeatures />
        <UseCases />
        <Deployment />
        <Support />
        <ContactForm />
      </main>
    </Layout>
  )
}
