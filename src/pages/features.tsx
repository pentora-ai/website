import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './features.module.css';

function FeaturesHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <span>Features</span>
          </div>
          <Heading as="h1" className={styles.title}>
            Everything you need for
            <br />
            <span className={styles.gradientText}>modern security scanning</span>
          </Heading>
          <p className={styles.subtitle}>
            Pentora combines speed, accuracy, and extensibility to deliver
            a next-generation security scanning experience.
          </p>
        </div>
      </div>
    </header>
  );
}

function CoreFeatures() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast Scanning',
      description: 'Optimized concurrent scanning engine that leverages Go\'s goroutines for maximum performance.',
      details: [
        'Scan thousands of ports in seconds',
        'Intelligent connection pooling',
        'Adaptive timeout mechanisms',
        'Minimal resource consumption',
      ],
    },
    {
      icon: '🔍',
      title: 'Advanced Service Detection',
      description: 'Intelligent banner grabbing with protocol-aware parsers for accurate service identification.',
      details: [
        'SSH, HTTP, FTP, SMTP protocol detection',
        'Version fingerprinting',
        'Custom protocol support',
        'TLS/SSL certificate analysis',
      ],
    },
    {
      icon: '🛡️',
      title: 'CVE Vulnerability Matching',
      description: 'Built-in vulnerability detection system that matches discovered services against known CVEs.',
      details: [
        'Real-time CVE database updates',
        'Severity scoring (CVSS)',
        'False positive filtering',
        'Detailed remediation guidance',
      ],
    },
    {
      icon: '🧩',
      title: 'Extensible Plugin System',
      description: 'Write custom vulnerability checks and extend Pentora\'s capabilities with Go plugins.',
      details: [
        'Simple Go plugin API',
        'Hot-reload support',
        'Built-in testing framework',
        'Community plugin marketplace',
      ],
    },
    {
      icon: '📊',
      title: 'Multiple Output Formats',
      description: 'Export scan results in various formats for integration with your existing workflows.',
      details: [
        'JSON for automation',
        'HTML reports for sharing',
        'CSV for spreadsheets',
        'SARIF for CI/CD integration',
      ],
    },
    {
      icon: '🔐',
      title: 'Security First Design',
      description: 'Built with security best practices from the ground up.',
      details: [
        'No data collection or telemetry',
        'Secure credential handling',
        'Audit logging',
        'Role-based access control (Enterprise)',
      ],
    },
  ];

  return (
    <section className={styles.coreFeatures}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Core Features
          </Heading>
          <p className={styles.sectionSubtitle}>
            Powerful capabilities designed for modern security teams
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <ul className={styles.featureDetails}>
                {feature.details.map((detail, i) => (
                  <li key={i}>
                    <span className={styles.checkmark}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const comparisons = [
    {
      feature: 'Scan Speed',
      pentora: 'Optimized Go concurrency',
      nmap: 'Good, but slower',
      openvas: 'Slower, more thorough',
    },
    {
      feature: 'Plugin System',
      pentora: 'Native Go plugins',
      nmap: 'NSE (Lua scripts)',
      openvas: 'NASL scripts',
    },
    {
      feature: 'CVE Matching',
      pentora: 'Built-in with updates',
      nmap: 'Via scripts',
      openvas: 'Extensive database',
    },
    {
      feature: 'Ease of Use',
      pentora: 'Simple CLI, JSON output',
      nmap: 'Complex flags',
      openvas: 'GUI required',
    },
    {
      feature: 'Memory Usage',
      pentora: 'Minimal (~50MB)',
      nmap: 'Low (~30MB)',
      openvas: 'High (~500MB+)',
    },
    {
      feature: 'Installation',
      pentora: 'Single binary',
      nmap: 'Package manager',
      openvas: 'Complex setup',
    },
  ];

  return (
    <section className={styles.comparison}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            How Pentora Compares
          </Heading>
          <p className={styles.sectionSubtitle}>
            See how Pentora stacks up against other popular scanners
          </p>
        </div>
        <div className={styles.comparisonTable}>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.pentoraColumn}>
                  <span className={styles.pentoraLabel}>Pentora</span>
                </th>
                <th>Nmap</th>
                <th>OpenVAS</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td className={styles.pentoraCell}>{row.pentora}</td>
                  <td>{row.nmap}</td>
                  <td>{row.openvas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const useCases = [
    {
      title: 'Security Auditing',
      description: 'Perform comprehensive security assessments of your infrastructure.',
      icon: '🔒',
      examples: [
        'Penetration testing',
        'Vulnerability assessments',
        'Attack surface mapping',
        'Compliance scanning',
      ],
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Integrate security scanning into your development pipeline.',
      icon: '🔄',
      examples: [
        'Pre-deployment scanning',
        'Infrastructure validation',
        'Security gates in CI/CD',
        'Automated reporting',
      ],
    },
    {
      title: 'Network Monitoring',
      description: 'Continuously monitor your network for changes and vulnerabilities.',
      icon: '📡',
      examples: [
        'Service inventory',
        'Change detection',
        'Port monitoring',
        'Unauthorized service detection',
      ],
    },
    {
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements with comprehensive scanning.',
      icon: '📋',
      examples: [
        'PCI DSS compliance',
        'SOC 2 requirements',
        'ISO 27001 audits',
        'HIPAA security rules',
      ],
    },
  ];

  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Use Cases
          </Heading>
          <p className={styles.sectionSubtitle}>
            Pentora adapts to your security workflow
          </p>
        </div>
        <div className={styles.useCaseGrid}>
          {useCases.map((useCase, idx) => (
            <div key={idx} className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>{useCase.icon}</div>
              <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
              <p className={styles.useCaseDescription}>{useCase.description}</p>
              <ul className={styles.useCaseExamples}>
                {useCase.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecs() {
  const specs = [
    {
      category: 'Performance',
      items: [
        { label: 'Scan Speed', value: 'Up to 10,000 ports/second' },
        { label: 'Concurrent Connections', value: 'Configurable (default: 1000)' },
        { label: 'Memory Usage', value: '~50MB baseline' },
        { label: 'CPU Usage', value: 'Scales with cores' },
      ],
    },
    {
      category: 'Protocols',
      items: [
        { label: 'TCP', value: 'Full support' },
        { label: 'UDP', value: 'Full support' },
        { label: 'ICMP', value: 'Ping & traceroute' },
        { label: 'Application Layer', value: 'HTTP, SSH, FTP, SMTP, DNS' },
      ],
    },
    {
      category: 'Platform Support',
      items: [
        { label: 'Linux', value: 'x86_64, ARM64' },
        { label: 'macOS', value: 'Intel, Apple Silicon' },
        { label: 'Windows', value: 'x86_64' },
        { label: 'Docker', value: 'Multi-arch images' },
      ],
    },
    {
      category: 'Integration',
      items: [
        { label: 'Output Formats', value: 'JSON, HTML, CSV, SARIF' },
        { label: 'API', value: 'RESTful API (Enterprise)' },
        { label: 'Webhooks', value: 'Real-time notifications' },
        { label: 'SDKs', value: 'Go, Python, JavaScript' },
      ],
    },
  ];

  return (
    <section className={styles.technicalSpecs}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Technical Specifications
          </Heading>
        </div>
        <div className={styles.specsGrid}>
          {specs.map((spec, idx) => (
            <div key={idx} className={styles.specCard}>
              <h3 className={styles.specCategory}>{spec.category}</h3>
              <dl className={styles.specList}>
                {spec.items.map((item, i) => (
                  <div key={i} className={styles.specItem}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
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
            Ready to try Pentora?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Get started with Pentora today. It's open source and free.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimaryButton)}
              to="https://github.com/pentora-ai/pentora">
              Get Started →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondaryButton)}
              href="https://docs.pentora.ai">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Features(): ReactNode {
  return (
    <Layout
      title="Features"
      description="Discover all the powerful features that make Pentora the best security scanner for modern infrastructure.">
      <FeaturesHeader />
      <main>
        <CoreFeatures />
        <ComparisonSection />
        <UseCases />
        <TechnicalSpecs />
        <CallToAction />
      </main>
    </Layout>
  );
}
