# TST exercise

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/pascalallen/tst-exercise/npm.yml)
![GitHub](https://img.shields.io/github/license/pascalallen/tst-exercise)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pascalallen/tst-exercise)

![Logo](src/assets/images/logo.svg)

## Core Project Tree

```
├── .github/       # GitHub Actions (CI/CD pipeline)
├── node_modules/  # Application dependencies
├── public/        # Public web assets
└── src/           # Application
```

## Prerequisites

- [NPM](https://nodejs.org/en/download/package-manager)

## Development Environment Setup

### Clone Repository

```bash
cd <projects-parent-directory> && git clone https://github.com/pascalallen/tst-exercise.git
```

You will find the site running at [http://localhost:8080/](http://localhost:8080/)

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

## License

[MIT](LICENSE)
