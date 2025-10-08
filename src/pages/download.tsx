import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './download.module.css';

function DownloadHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <span>Download</span>
          </div>
          <Heading as="h1" className={styles.title}>
            Get started with
            <br />
            <span className={styles.gradientText}>Pentora</span>
          </Heading>
          <p className={styles.subtitle}>
            Install Pentora on your favorite platform and start scanning in minutes.
            Cross-platform support for macOS, Linux, and Windows.
          </p>
        </div>
      </div>
    </header>
  );
}

function QuickInstall() {
  const methods = [
    {
      icon: '🍺',
      name: 'Homebrew',
      platform: 'macOS / Linux',
      command: 'brew install pentora',
      popular: true,
    },
    {
      icon: '🐋',
      name: 'Docker',
      platform: 'All Platforms',
      command: 'docker run -it pentoraai/pentora scan 192.168.1.1',
      popular: true,
    },
    {
      icon: '📦',
      name: 'apt',
      platform: 'Debian / Ubuntu',
      command: `curl -fsSL https://get.pentora.ai/apt/gpg | sudo gpg --dearmor -o /usr/share/keyrings/pentora.gpg
echo "deb [signed-by=/usr/share/keyrings/pentora.gpg] https://get.pentora.ai/apt stable main" | sudo tee /etc/apt/sources.list.d/pentora.list
sudo apt update && sudo apt install pentora`,
      popular: false,
    },
    {
      icon: '📦',
      name: 'yum',
      platform: 'RHEL / CentOS / Fedora',
      command: `sudo tee /etc/yum.repos.d/pentora.repo <<EOF
[pentora]
name=Pentora Repository
baseurl=https://get.pentora.ai/yum/
enabled=1
gpgcheck=1
gpgkey=https://get.pentora.ai/yum/gpg
EOF
sudo yum install pentora`,
      popular: false,
    },
    {
      icon: '🪟',
      name: 'Windows',
      platform: 'Windows',
      command: 'winget install pentora',
      popular: false,
    },
    {
      icon: '⬇️',
      name: 'Binary',
      platform: 'Manual Install',
      command: '# Download from GitHub releases',
      popular: false,
    },
  ];

  return (
    <section className={styles.quickInstall}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Quick Install
          </Heading>
          <p className={styles.sectionSubtitle}>
            Choose your preferred installation method
          </p>
        </div>
        <div className={styles.methodsGrid}>
          {methods.map((method, idx) => (
            <div
              key={idx}
              className={clsx(
                styles.methodCard,
                method.popular && styles.popularMethod
              )}>
              {method.popular && (
                <div className={styles.popularBadge}>Popular</div>
              )}
              <div className={styles.methodIcon}>{method.icon}</div>
              <h3 className={styles.methodName}>{method.name}</h3>
              <p className={styles.methodPlatform}>{method.platform}</p>
              <div className={styles.codeBlock}>
                <pre>
                  <code>{method.command}</code>
                </pre>
                <button
                  className={styles.copyButton}
                  onClick={() => navigator.clipboard.writeText(method.command)}
                  title="Copy to clipboard">
                  📋
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectDownloads() {
  const releases = [
    {
      platform: 'macOS',
      icon: '🍎',
      downloads: [
        { arch: 'Apple Silicon (M1/M2/M3)', file: 'pentora-macos-arm64.tar.gz' },
        { arch: 'Intel', file: 'pentora-macos-amd64.tar.gz' },
      ],
    },
    {
      platform: 'Linux',
      icon: '🐧',
      downloads: [
        { arch: 'x86_64', file: 'pentora-linux-amd64.tar.gz' },
        { arch: 'ARM64', file: 'pentora-linux-arm64.tar.gz' },
        { arch: 'ARMv7', file: 'pentora-linux-armv7.tar.gz' },
      ],
    },
    {
      platform: 'Windows',
      icon: '🪟',
      downloads: [
        { arch: 'x86_64', file: 'pentora-windows-amd64.zip' },
        { arch: 'ARM64', file: 'pentora-windows-arm64.zip' },
      ],
    },
  ];

  return (
    <section className={styles.directDownloads}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Direct Downloads
          </Heading>
          <p className={styles.sectionSubtitle}>
            Download pre-compiled binaries for your platform
          </p>
        </div>
        <div className={styles.releasesGrid}>
          {releases.map((release, idx) => (
            <div key={idx} className={styles.releaseCard}>
              <div className={styles.releaseHeader}>
                <span className={styles.releaseIcon}>{release.icon}</span>
                <h3 className={styles.releasePlatform}>{release.platform}</h3>
              </div>
              <div className={styles.downloadList}>
                {release.downloads.map((download, i) => (
                  <a
                    key={i}
                    href={`https://github.com/pentora-ai/pentora/releases/latest/download/${download.file}`}
                    className={styles.downloadLink}>
                    <span className={styles.downloadArch}>{download.arch}</span>
                    <span className={styles.downloadIcon}>⬇️</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.allReleases}>
          <Link
            href="https://github.com/pentora-ai/pentora/releases"
            className="button button--secondary">
            View All Releases on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Quick Start Guide
          </Heading>
          <p className={styles.sectionSubtitle}>
            Get scanning in 3 simple steps
          </p>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Install Pentora</h3>
              <p className={styles.stepDescription}>
                Choose your preferred installation method from above
              </p>
              <div className={styles.stepCode}>
                <code>brew install pentora</code>
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Verify Installation</h3>
              <p className={styles.stepDescription}>
                Check that Pentora is installed correctly
              </p>
              <div className={styles.stepCode}>
                <code>pentora --version</code>
              </div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Run Your First Scan</h3>
              <p className={styles.stepDescription}>
                Start scanning a target host
              </p>
              <div className={styles.stepCode}>
                <code>pentora scan 192.168.1.1 --vuln</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Examples() {
  const examples = [
    {
      title: 'Basic Port Scan',
      description: 'Scan common ports on a target',
      command: 'pentora scan 192.168.1.1',
    },
    {
      title: 'Custom Port Range',
      description: 'Scan specific port range',
      command: 'pentora scan 192.168.1.1 --ports 1-1000',
    },
    {
      title: 'Service Detection',
      description: 'Detect services and grab banners',
      command: 'pentora scan 192.168.1.1 --service-detection',
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Include CVE matching',
      command: 'pentora scan 192.168.1.1 --vuln',
    },
    {
      title: 'JSON Output',
      description: 'Export results as JSON',
      command: 'pentora scan 192.168.1.1 --output json --file results.json',
    },
    {
      title: 'Multiple Targets',
      description: 'Scan multiple hosts',
      command: 'pentora scan 192.168.1.1,192.168.1.2,192.168.1.3',
    },
    {
      title: 'CIDR Range',
      description: 'Scan entire subnet',
      command: 'pentora scan 192.168.1.0/24',
    },
    {
      title: 'Specific Ports',
      description: 'Scan only specific ports',
      command: 'pentora scan 192.168.1.1 --ports 22,80,443,8080',
    },
  ];

  return (
    <section className={styles.examples}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Usage Examples
          </Heading>
          <p className={styles.sectionSubtitle}>
            Common scanning scenarios to get you started
          </p>
        </div>
        <div className={styles.examplesGrid}>
          {examples.map((example, idx) => (
            <div key={idx} className={styles.exampleCard}>
              <h3 className={styles.exampleTitle}>{example.title}</h3>
              <p className={styles.exampleDescription}>{example.description}</p>
              <div className={styles.exampleCode}>
                <pre>
                  <code>{example.command}</code>
                </pre>
                <button
                  className={styles.copyButton}
                  onClick={() => navigator.clipboard.writeText(example.command)}
                  title="Copy to clipboard">
                  📋
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section className={styles.nextSteps}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Next Steps
          </Heading>
        </div>
        <div className={styles.stepsGrid}>
          <Link href="https://docs.pentora.ai" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>📚</div>
            <h3 className={styles.nextStepTitle}>Read the Docs</h3>
            <p className={styles.nextStepDescription}>
              Learn about all features and advanced usage
            </p>
          </Link>
          <Link href="https://docs.pentora.ai/plugins" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>🧩</div>
            <h3 className={styles.nextStepTitle}>Write Plugins</h3>
            <p className={styles.nextStepDescription}>
              Extend Pentora with custom vulnerability checks
            </p>
          </Link>
          <Link href="https://github.com/pentora-ai/pentora" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>💻</div>
            <h3 className={styles.nextStepTitle}>Contribute</h3>
            <p className={styles.nextStepDescription}>
              Join the community and contribute to Pentora
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Download(): ReactNode {
  return (
    <Layout
      title="Download"
      description="Download and install Pentora, the fast and modular security scanner. Available for macOS, Linux, and Windows.">
      <DownloadHeader />
      <main>
        <QuickInstall />
        <DirectDownloads />
        <QuickStart />
        <Examples />
        <NextSteps />
      </main>
    </Layout>
  );
}
