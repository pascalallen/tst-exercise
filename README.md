# Vanilla (React) web client 🚀

## Motivation

The motivation behind this project is to demonstrate foundational frontend skills without extraneous dependencies. 
This project uses only React, JSX, CSS, and Webpack, focusing on core functionality without relying on any third-party 
libraries.

## Features

- Configurable CI/CD pipeline
- Homegrown CSS theming
- Reusable React components
- User registration with persistence
- Authentication
- Custom router w/ routing utilities
- Custom authenticator service
- Custom React hooks
- Bundling with Webpack

## Core Project Tree

```
├── .github/  # GitHub Actions (CI/CD pipeline)
├── public/   # Public web assets
└── src/      # Application
```

## Prerequisites

- [NPM](https://nodejs.org/en/download/package-manager)

## Development Environment Setup

### Clone Repository

```bash
cd <projects-parent-directory> && git clone https://github.com/pascalallen/vanilla-react.git
```

### Install JavaScript Dependencies

```bash
npm ci
```

### Compile JavaScript with Webpack

```bash
npm run dev
```

### Start dev server with hot module replacement

```bash
npm run start
```

You will find the site running at [http://localhost:8080/](http://localhost:8080/)

## License

[MIT](LICENSE)
