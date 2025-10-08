import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './community.module.css';

function CommunityHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
      </div>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <span>Community</span>
          </div>
          <Heading as="h1" className={styles.title}>
            Join the
            <br />
            <span className={styles.gradientText}>Pentora Community</span>
          </Heading>
          <p className={styles.subtitle}>
            Connect with developers, security professionals, and contributors
            from around the world. Get help, share ideas, and shape the future of Pentora.
          </p>
        </div>
      </div>
    </header>
  );
}

function CommunityChannels() {
  const channels = [
    {
      icon: '💬',
      name: 'GitHub Discussions',
      description: 'Ask questions, share ideas, and discuss features with the community.',
      link: 'https://github.com/pentora-ai/pentora/discussions',
      buttonText: 'Join Discussion',
      stats: 'Active community',
    },
    {
      icon: '🐛',
      name: 'Issue Tracker',
      description: 'Report bugs, request features, and track ongoing development.',
      link: 'https://github.com/pentora-ai/pentora/issues',
      buttonText: 'View Issues',
      stats: 'Open issues',
    },
    {
      icon: '💻',
      name: 'GitHub',
      description: 'Star the project, fork it, and contribute code to make Pentora better.',
      link: 'https://github.com/pentora-ai/pentora',
      buttonText: 'View Repository',
      stats: 'Stars on GitHub',
    },
    {
      icon: '📢',
      name: 'Blog',
      description: 'Read release notes, tutorials, and updates about Pentora.',
      link: '/blog',
      buttonText: 'Read Blog',
      stats: 'Latest updates',
    },
  ];

  return (
    <section className={styles.channels}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Community Channels
          </Heading>
          <p className={styles.sectionSubtitle}>
            Connect with us on your favorite platform
          </p>
        </div>
        <div className={styles.channelsGrid}>
          {channels.map((channel, idx) => (
            <div key={idx} className={styles.channelCard}>
              <div className={styles.channelIcon}>{channel.icon}</div>
              <h3 className={styles.channelName}>{channel.name}</h3>
              <p className={styles.channelDescription}>{channel.description}</p>
              <div className={styles.channelStats}>{channel.stats}</div>
              <Link
                href={channel.link}
                className={clsx('button button--primary', styles.channelButton)}>
                {channel.buttonText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contributing() {
  const ways = [
    {
      icon: '🐛',
      title: 'Report Bugs',
      description: 'Found a bug? Help us improve by reporting it on GitHub Issues.',
      action: 'Report a Bug',
      link: 'https://github.com/pentora-ai/pentora/issues/new?template=bug_report.md',
    },
    {
      icon: '💡',
      title: 'Suggest Features',
      description: 'Have an idea? Share it with us and help shape the future of Pentora.',
      action: 'Suggest Feature',
      link: 'https://github.com/pentora-ai/pentora/issues/new?template=feature_request.md',
    },
    {
      icon: '📝',
      title: 'Write Documentation',
      description: 'Improve docs, write tutorials, or translate content to help others.',
      action: 'Contribute Docs',
      link: 'https://github.com/pentora-ai/pentora/tree/main/docs',
    },
    {
      icon: '💻',
      title: 'Contribute Code',
      description: 'Submit pull requests to fix bugs, add features, or improve performance.',
      action: 'View Guidelines',
      link: 'https://github.com/pentora-ai/pentora/blob/main/CONTRIBUTING.md',
    },
    {
      icon: '🧩',
      title: 'Create Plugins',
      description: 'Build custom vulnerability checks and share them with the community.',
      action: 'Plugin Guide',
      link: 'https://docs.pentora.ai/plugins',
    },
    {
      icon: '💬',
      title: 'Help Others',
      description: 'Answer questions and help other users in GitHub Discussions.',
      action: 'Join Discussion',
      link: 'https://github.com/pentora-ai/pentora/discussions',
    },
  ];

  return (
    <section className={styles.contributing}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            How to Contribute
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everyone can contribute to Pentora, no matter your skill level
          </p>
        </div>
        <div className={styles.waysGrid}>
          {ways.map((way, idx) => (
            <div key={idx} className={styles.wayCard}>
              <div className={styles.wayIcon}>{way.icon}</div>
              <h3 className={styles.wayTitle}>{way.title}</h3>
              <p className={styles.wayDescription}>{way.description}</p>
              <Link href={way.link} className={styles.wayLink}>
                {way.action} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contributors() {
  return (
    <section className={styles.contributors}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Contributors
          </Heading>
          <p className={styles.sectionSubtitle}>
            Thank you to all the amazing people who have contributed to Pentora
          </p>
        </div>
        <div className={styles.contributorsContent}>
          <a
            href="https://github.com/pentora-ai/pentora/graphs/contributors"
            className={styles.contributorsImage}>
            <img
              src="https://contrib.rocks/image?repo=pentora-ai/pentora"
              alt="Pentora Contributors"
              loading="lazy"
            />
          </a>
          <p className={styles.contributorsText}>
            Want to see your name here?{' '}
            <Link href="https://github.com/pentora-ai/pentora/blob/main/CONTRIBUTING.md">
              Start contributing today!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function CodeOfConduct() {
  return (
    <section className={styles.codeOfConduct}>
      <div className="container">
        <div className={styles.conductContent}>
          <div className={styles.conductText}>
            <Heading as="h2" className={styles.conductTitle}>
              Code of Conduct
            </Heading>
            <p className={styles.conductDescription}>
              We are committed to providing a welcoming and inclusive environment for everyone.
              All community members are expected to abide by our Code of Conduct.
            </p>
            <ul className={styles.conductList}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Be respectful and inclusive
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Welcome newcomers and help them learn
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Focus on constructive feedback
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Respect different viewpoints and experiences
              </li>
            </ul>
            <Link
              href="https://github.com/pentora-ai/pentora/blob/main/CODE_OF_CONDUCT.md"
              className="button button--secondary">
              Read Full Code of Conduct →
            </Link>
          </div>
          <div className={styles.conductIllustration}>
            <div className={styles.conductCard}>
              <div className={styles.conductIcon}>🤝</div>
              <h3>Respectful</h3>
            </div>
            <div className={styles.conductCard}>
              <div className={styles.conductIcon}>🌍</div>
              <h3>Inclusive</h3>
            </div>
            <div className={styles.conductCard}>
              <div className={styles.conductIcon}>💡</div>
              <h3>Collaborative</h3>
            </div>
            <div className={styles.conductCard}>
              <div className={styles.conductIcon}>🎯</div>
              <h3>Constructive</h3>
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
            Ready to join?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Start contributing to Pentora today and help us build
            the best security scanner for modern infrastructure.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimaryButton)}
              href="https://github.com/pentora-ai/pentora">
              View on GitHub →
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondaryButton)}
              href="https://github.com/pentora-ai/pentora/discussions">
              Join Discussion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Community(): ReactNode {
  return (
    <Layout
      title="Community"
      description="Join the Pentora community. Connect with developers, contribute code, and help shape the future of open source security scanning.">
      <CommunityHeader />
      <main>
        <CommunityChannels />
        <Contributing />
        <Contributors />
        <CodeOfConduct />
        <CallToAction />
      </main>
    </Layout>
  );
}
