import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Open Source Security Scanner
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Fast, Modular
            <br />
            <span className={styles.gradientText}>Security Scanner</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            Detect open ports, collect service banners, and perform CVE matching
            with Pentora's extensible plugin system.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryButton)}
              to="https://github.com/pentora-ai/pentora">
              Get Started →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryButton)}
              href="https://docs.pentora.ai">
              Documentation
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>10x</div>
              <div className={styles.statLabel}>Faster scanning</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Open source</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <div className={styles.statValue}>0</div>
              <div className={styles.statLabel}>Dependencies</div>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalButton}></span>
              <span className={styles.terminalButton}></span>
              <span className={styles.terminalButton}></span>
            </div>
            <div className={styles.terminalBody}>
              <pre>
                <code>
{`$ pentora scan 192.168.1.1 --vuln

Scanning 192.168.1.1...
`}<span className={styles.terminalSuccess}>✓</span>{` Port 22 open - SSH-2.0-OpenSSH_8.2p1
`}<span className={styles.terminalSuccess}>✓</span>{` Port 80 open - nginx/1.18.0
`}<span className={styles.terminalWarning}>⚠</span>{` CVE-2021-3156 detected on port 22
`}
{`Scan complete: 3 ports, 1 vulnerability found`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized concurrent scanning engine for rapid network discovery and analysis.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🔍',
      title: 'Service Detection',
      description: 'Intelligent banner grabbing with protocol-aware parsers for SSH, HTTP, FTP, and more.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🛡️',
      title: 'CVE Matching',
      description: 'Optional vulnerability detection with plugin-based CVE matching system.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🧩',
      title: 'Extensible Plugins',
      description: 'Build custom vulnerability checks with simple Go plugin architecture.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '💻',
      title: 'Cross-Platform',
      description: 'Native binaries for macOS, Linux, and Windows with zero dependencies.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: '🎯',
      title: 'Developer Friendly',
      description: 'Clean CLI interface with JSON output support for automation and integration.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Features</div>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything you need for
            <br />
            <span className={styles.gradientText}>modern security scanning</span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            Built for speed, designed for extensibility
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>How it works</div>
          <Heading as="h2" className={styles.sectionTitle}>
            Three simple steps to
            <br />
            <span className={styles.gradientText}>comprehensive scanning</span>
          </Heading>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.stepsLine}></div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <span className={styles.stepNumber}>01</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Port Discovery</h3>
              <p className={styles.stepDescription}>
                Fast TCP/UDP port scanning with customizable port ranges and timeout settings.
                Concurrent connection handling for maximum performance.
              </p>
              <div className={styles.stepCode}>
                <code>pentora scan 192.168.1.1 --ports 1-65535</code>
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <span className={styles.stepNumber}>02</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Service Detection</h3>
              <p className={styles.stepDescription}>
                Intelligent banner grabbing and protocol-aware parsing for accurate service
                identification across multiple protocols.
              </p>
              <div className={styles.stepCode}>
                <code>pentora scan 192.168.1.1 --service-detection</code>
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <span className={styles.stepNumber}>03</span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Vulnerability Analysis</h3>
              <p className={styles.stepDescription}>
                Plugin-based CVE matching evaluates detected services against known
                vulnerabilities with detailed reporting.
              </p>
              <div className={styles.stepCode}>
                <code>pentora scan 192.168.1.1 --vuln --output json</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PluginShowcase() {
  return (
    <section className={styles.pluginShowcase}>
      <div className="container">
        <div className={styles.pluginContent}>
          <div className={styles.pluginText}>
            <div className={styles.sectionBadge}>Extensible</div>
            <Heading as="h2" className={styles.sectionTitle}>
              Build custom
              <br />
              <span className={styles.gradientText}>vulnerability checks</span>
            </Heading>
            <p className={styles.pluginDescription}>
              Create custom vulnerability checks with simple Go code.
              The plugin system is designed to be intuitive and powerful,
              allowing you to extend Pentora's capabilities without modifying the core.
            </p>
            <ul className={styles.pluginFeatures}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Simple Go plugin architecture
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Hot-reload plugin support
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Custom CVE matching logic
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Built-in testing framework
              </li>
            </ul>
            <Link
              className={clsx('button button--primary', styles.pluginButton)}
              href="https://docs.pentora.ai/plugins">
              Learn about plugins →
            </Link>
          </div>
          <div className={styles.pluginCode}>
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <span className={styles.codeButton}></span>
                <span className={styles.codeButton}></span>
                <span className={styles.codeButton}></span>
                <span className={styles.codeFilename}>ssh_plugin.go</span>
              </div>
              <div className={styles.codeBody}>
                <pre>
                  <code>
{`plugin.Register(&plugin.Plugin{
  ID: "ssh_cve_2016_0777",
  Name: "OpenSSH 7.1p2 Vulnerability",
  RequirePorts: []int{22},
  RequireKeys: []string{"ssh/banner"},

  MatchFunc: func(ctx map[string]string) *plugin.MatchResult {
    banner := ctx["ssh/banner"]

    if strings.Contains(banner, "OpenSSH_7.1p2") {
      return &plugin.MatchResult{
        CVE: []string{"CVE-2016-0777"},
        Summary: "Roaming vulnerability",
        Severity: "HIGH",
        Port: 22,
      }
    }

    return nil
  },
})`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className={styles.trustedBy}>
      <div className="container">
        <p className={styles.trustedByText}>Trusted by security teams worldwide</p>
        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>
            <span className={styles.starIcon}>★</span>
            <span>Open Source</span>
          </div>
          <div className={styles.trustBadge}>
            <span className={styles.checkIcon}>✓</span>
            <span>Apache 2.0</span>
          </div>
          <div className={styles.trustBadge}>
            <span className={styles.shieldIcon}>🛡</span>
            <span>Security First</span>
          </div>
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
            Join the community and start scanning today. It's open source and free.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimaryButton)}
              to="https://github.com/pentora-ai/pentora">
              View on GitHub →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondaryButton)}
              href="https://docs.pentora.ai">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Fast, Modular Security Scanner"
      description="Pentora is a fast, modular, and extensible security scanner designed for modern networks. Detect open ports, collect service banners, and perform CVE matching.">
      <HomepageHeader />
      <main>
        <Features />
        <HowItWorks />
        <PluginShowcase />
        <TrustedBy />
        <CallToAction />
      </main>
    </Layout>
  );
}
