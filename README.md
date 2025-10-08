# Pentora Website

The official website for Pentora - a fast, modular security scanner built in Rust.

## Overview

This is a [Docusaurus](https://docusaurus.io/) site that serves as the main website for Pentora at [pentora.ai](https://pentora.ai). The site includes product information, features, pricing, enterprise solutions, blog posts, and community resources.

## Quick Start

### Prerequisites

- Node.js 20.0 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

```
pentora-website/
    blog/                  # Blog posts
    src/
        components/        # React components
        css/               # Custom CSS
        pages/             # Static pages
    static/                # Static assets
    docusaurus.config.ts   # Site configuration
    package.json
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve built site locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run clear` - Clear Docusaurus cache
- `npm run typecheck` - Run TypeScript type checking

## Configuration

The main configuration is in `docusaurus.config.ts`. Key settings include:

- **Site metadata**: Title, tagline, URL
- **Navigation**: Navbar and footer links
- **Theme**: Color mode and styling
- **Blog**: RSS feeds and post settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start`
5. Submit a pull request

## Links

- **Website**: [pentora.ai](https://pentora.ai)
- **Documentation**: [docs.pentora.ai](https://docs.pentora.ai)
- **Main Repository**: [github.com/pentora-ai/pentora](https://github.com/pentora-ai/pentora)
- **Community**: [pentora.ai/community](https://pentora.ai/community)

## License

This website is licensed under the Apache 2.0 License. See the main Pentora repository for the security scanner license.
