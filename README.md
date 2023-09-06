# Language Learning Platform 🎓

This project is a simple language learning web application developed using the following technologies and tools:

- [Angular](https://angular.io): A framework for building modern web applications.
- [Nest](https://nestjs.com): A framework for building efficient, reliable and scalable server-side applications.
- [NgRx](https://ngrx.io): A state management library for Angular based on Redux principles.
- [Storybook](https://storybook.js.org): An open-source tool for building and documenting UI components in isolation.
- [Nx](https://nx.dev): A powerful set of tools for Angular monorepo development.
- [Docker](https://www.docker.com/): Software for automating the deployment and management of applications in containerized environments.

## Project structure

- `./apps/llp/src/app` - This directory contains the main Angular application source code.
- `./apps/api/src` - This directory contains the main Nest application source code.
- `./libs/features` - Feature Modules encapsulate the related components and other resources necessary for that feature.
- `./libs/models` - Directory is responsible for storing data models used within the application.
- `./libs/theme` - Directory serves as a repository for storing the shared styles and variables utilized throughout the application.
- `./libs/ui` - Reusable UI components are placed here.
- `./libs/util` - Directory is responsible for storing utility functions, services, classes, and modules that provide common or generic functionality used throughout the application.
- `./libs/shared` - This folder contains pipes, directives and other angular entities common to several modules.
  <br />

## Run the project locally

1. Clone the repository.
2. Make sure you have Docker installed and running on your computer.
3. Run the below command to start all services required for development (Angular Application, API, Postgres, PgAdmin, nginx).

```
docker compose up
```

Voila! ✨ The following resources are now available to you:

- [127.0.0.1](http://127.0.0.1) - Main frontend application
- [127.0.0.1/api-testing](http://127.0.0.1/api-testing) - API (for testing in Postman for example)
- [127.0.0.1/swagger](http://127.0.0.1/swagger) - API Documentation
- [127.0.0.1/pgadmin](http://127.0.0.1/pgadmin) - PgAdmin

<br />

## Storybook

To start Storybook, follow these steps:

```
npm install
```

```
npm run storybook
```

This will compile and start Storybook. Open your browser and navigate to http://localhost:4400 to view the Storybook interface and explore the UI components.
