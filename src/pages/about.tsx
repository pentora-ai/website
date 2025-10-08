import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './about.module.css';

function AboutHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <span>About</span>
          </div>
          <Heading as="h1" className={styles.title}>
            Building the future of
            <br />
            <span className={styles.gradientText}>security scanning</span>
          </Heading>
          <p className={styles.subtitle}>
            Pentora is an open-source security scanner designed for modern infrastructure.
            Fast, modular, and extensible - built by security professionals, for security professionals.
          </p>
        </div>
      </div>
    </header>
  );
}

function Story() {
  return (
    <section className={styles.story}>
      <div className="container">
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <div className={styles.sectionBadge}>Our Story</div>
            <Heading as="h2" className={styles.sectionTitle}>
              Why we built Pentora
            </Heading>
            <div className={styles.storyParagraphs}>
              <p>
                Pentora was born from a simple frustration: existing security scanners were either
                too slow, too complex, or too limited. We needed a tool that could keep up with
                modern cloud-native infrastructure while remaining simple and extensible.
              </p>
              <p>
                Traditional tools like Nmap are powerful but dated. Newer tools often come with
                heavyweight dependencies, complex configurations, or vendor lock-in. We wanted
                something different - a single binary that's fast, reliable, and easy to extend.
              </p>
              <p>
                Built with Go for performance and simplicity, Pentora combines the best of both
                worlds: the speed and efficiency of modern systems programming with the flexibility
                of a plugin-based architecture. No dependencies, no complexity - just fast,
                reliable security scanning.
              </p>
              <p>
                Today, Pentora is used by security teams and developers worldwide to secure their
                infrastructure. From startups to enterprises, our mission remains the same: make
                security scanning accessible, fast, and powerful.
              </p>
            </div>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Open Source</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10x</div>
              <div className={styles.statLabel}>Faster Scanning</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>0</div>
              <div className={styles.statLabel}>Dependencies</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Extensibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const values = [
    {
      icon: '🚀',
      title: 'Performance First',
      description: 'Every line of code is optimized for speed and efficiency. We believe security tools should be fast.',
    },
    {
      icon: '🔓',
      title: 'Open & Transparent',
      description: 'Open source to the core. No hidden features, no telemetry, no vendor lock-in.',
    },
    {
      icon: '🧩',
      title: 'Extensible by Design',
      description: 'Built with extensibility in mind. Create custom plugins to fit your specific needs.',
    },
    {
      icon: '🎯',
      title: 'Developer Friendly',
      description: 'Clean APIs, great documentation, and a welcoming community. Built for developers.',
    },
    {
      icon: '🌍',
      title: 'Community Driven',
      description: 'Shaped by the community. Every feature, every decision is guided by user feedback.',
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Built by security professionals. Every feature is designed with security best practices.',
    },
  ];

  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Mission & Values</div>
          <Heading as="h2" className={styles.sectionTitle}>
            What we believe in
          </Heading>
          <p className={styles.sectionSubtitle}>
            Our core values guide every decision we make
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const techStack = [
    {
      category: 'Core',
      items: ['Go', 'Concurrent Architecture', 'Zero Dependencies', 'Single Binary'],
    },
    {
      category: 'Scanning',
      items: ['TCP/UDP Port Scanning', 'Banner Grabbing', 'Protocol Detection', 'Service Fingerprinting'],
    },
    {
      category: 'Security',
      items: ['CVE Database', 'Plugin System', 'Vulnerability Matching', 'Custom Checks'],
    },
    {
      category: 'Output',
      items: ['JSON', 'HTML', 'CSV', 'SARIF'],
    },
  ];

  return (
    <section className={styles.technology}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Technology</div>
          <Heading as="h2" className={styles.sectionTitle}>
            Built with modern tools
          </Heading>
          <p className={styles.sectionSubtitle}>
            Leveraging the best technologies for performance and reliability
          </p>
        </div>
        <div className={styles.techGrid}>
          {techStack.map((tech, idx) => (
            <div key={idx} className={styles.techCard}>
              <h3 className={styles.techCategory}>{tech.category}</h3>
              <ul className={styles.techList}>
                {tech.items.map((item, i) => (
                  <li key={i}>
                    <span className={styles.techBullet}>→</span>
                    {item}
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

function OpenSource() {
  return (
    <section className={styles.openSource}>
      <div className="container">
        <div className={styles.openSourceContent}>
          <div className={styles.openSourceText}>
            <div className={styles.sectionBadge}>Open Source</div>
            <Heading as="h2" className={styles.sectionTitle}>
              Free and open,
              <br />
              forever
            </Heading>
            <p className={styles.openSourceDescription}>
              Pentora is licensed under the Apache 2.0 license, one of the most permissive
              open source licenses. You're free to use, modify, and distribute Pentora
              for any purpose, including commercial use.
            </p>
            <ul className={styles.openSourceFeatures}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Use for any purpose, including commercial
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Modify and create derivative works
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Distribute original or modified versions
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Patent grant protection
              </li>
            </ul>
            <div className={styles.openSourceButtons}>
              <Link
                href="https://github.com/pentora-ai/pentora"
                className="button button--primary">
                View on GitHub →
              </Link>
              <Link
                href="https://github.com/pentora-ai/pentora/blob/main/LICENSE.md"
                className="button button--secondary">
                Read License
              </Link>
            </div>
          </div>
          <div className={styles.openSourceVisual}>
            <div className={styles.licenseBox}>
              <div className={styles.licenseHeader}>
                <span className={styles.licenseIcon}>📄</span>
                <span className={styles.licenseName}>Apache License 2.0</span>
              </div>
              <div className={styles.licenseBody}>
                <p>A permissive license whose main conditions require preservation of copyright and license notices.</p>
                <div className={styles.licensePermissions}>
                  <div className={styles.permissionBadge}>✓ Commercial Use</div>
                  <div className={styles.permissionBadge}>✓ Modification</div>
                  <div className={styles.permissionBadge}>✓ Distribution</div>
                  <div className={styles.permissionBadge}>✓ Patent Use</div>
                </div>
              </div>
            </div>
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
            Join us on this journey
          </Heading>
          <p className={styles.ctaSubtitle}>
            Whether you're a security professional, developer, or just curious about
            security scanning - we'd love to have you in the Pentora community.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimaryButton)}
              href="/download">
              Get Started →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondaryButton)}
              href="/community">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About(): ReactNode {
  return (
    <Layout
      title="About"
      description="Learn about Pentora, our mission, and why we're building the future of open source security scanning.">
      <AboutHeader />
      <main>
        <Story />
        <Mission />
        <Technology />
        <OpenSource />
        <CallToAction />
      </main>
    </Layout>
  );
}
