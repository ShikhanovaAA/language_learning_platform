# Language Learning Platform 🎓

<div style="text-align: center">
<img alt="angular" src="https://img.shields.io/badge/angular-c3002f.svg?style=for-the-badge&logo=angular&logoColor=white"/>
<img alt="Angular Universal" src="https://img.shields.io/badge/Angular Universal-2dab4b.svg?style=for-the-badge&logo=angular-universal&logoColor=white"/>
<img alt="ngrx" src="https://img.shields.io/badge/ngrx-9116b2.svg?style=for-the-badge&logo=ngrx&logoColor=white"/>
<img alt="storybook" src="https://img.shields.io/badge/storybook-ff4785.svg?style=for-the-badge&logo=storybook&logoColor=white"/>
<img alt="nestjs" src="https://img.shields.io/badge/nestjs-ea2845.svg?style=for-the-badge&logo=nestjs&logoColor=white"/>
<img alt="postgresql" src="https://img.shields.io/badge/postgresql-blue.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="nx" src="https://img.shields.io/badge/nx-0f172a.svg?style=for-the-badge&logo=nx&logoColor=white"/>
<img alt="docker" src="https://img.shields.io/badge/docker-1d63ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
</div>
<br />
This project is a platform for learning English, which includes articles, tests, and a dictionary.

https://github.com/ShikhanovaAA/language_learning_platform/assets/141730705/6597d889-1f71-4172-8791-c100f1b84641

#### Article functionality

- Administrator can create articles
- Registered users can add articles to their studied
- Inside articles on highlighting a word, you can add it to the dictionary

#### Test functionality

- Administrator can create tests
- Registered users can take them and see the results

#### Dictionary

- When a word is added to the dictionary, a translation and an example of its application are added to it.

## Main sections

- [Run the project locally](#run-the-project-locally)<br />
- [Run the Storybook](#storybook)<br />
- [Project structure](#project-structure)<br />
- [Technologies and tools](#technologies-and-tools)<br />

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

## Storybook

To start Storybook, follow these steps:

```
npm install
```

```
npm run storybook
```

This will compile and start Storybook. Open your browser and navigate to http://localhost:4400 to view the Storybook interface and explore the UI components.

## Project structure

### Frontend

[apps/frontend/src/app](apps/frontend/src/app) - Entry point of the frontend application.

<details>
<summary>See the structure</summary>
<br>

```
📦app
 ┣ 📂interceptors
 ┣ 📂not-found-page
 ┣ 📜app-routing.module.ts
 ┣ 📜app.component.html
 ┣ 📜app.component.scss
 ┣ 📜app.component.ts
 ┣ 📜app.module.ts
 ┗ 📜app.server.module.ts
```

</details>

---

[libs/features](libs/features) - Main features of the project.

<details>
<summary>See the structure</summary>
<br>

```
📦features
 ┣ 📂articles
 ┃ ┣ 📂data-access
 ┃ ┣ 📂pages
 ┃ ┗ 📂state
 ┣ 📂auth
 ┃ ┣ 📂data-access
 ┃ ┣ 📂pages
 ┃ ┗ 📂state
 ┣ 📂dictionary
 ┃ ┣ 📂data-access
 ┃ ┣ 📂pages
 ┃ ┗ 📂state
 ┗ 📂quizzes
 ┃ ┣ 📂data-access
 ┃ ┣ 📂pages
 ┃ ┗ 📂state
```

</details>

---

[libs/models](libs/models) - Data models used within the application.

[libs/theme](libs/theme) - Shared styles and variables utilized throughout the application.

[libs/ui](libs/ui) - Reusable UI components are placed here.

[libs/util](ibs/util) - Utility functions, services, classes, and modules that provide common or generic functionality used throughout the application.

[libs/shared](ibs/shared) - Pipes, directives and other angular entities common to several modules.

<details>
<summary>See the structure</summary>
<br>

```
📦shared
 ┣ 📂directives
 ┣ 📂environment
 ┣ 📂quards
 ┣ 📂interceptors
 ┣ 📂pipes
 ┣ 📂services
 ┣ 📂utils
 ┗ 📂validators
```

</details>

---

### Backend

[apps/api/src](apps/api/src) - Nest application source code.

<details>
<summary>See the structure</summary>
<br>

```
📦api
 ┣ 📂src
 ┃ ┣ 📂article
 ┃ ┣ 📂auth
 ┃ ┣ 📂category
 ┃ ┣ 📂dictionary
 ┃ ┣ 📂quiz
 ┃ ┣ 📂role
 ┃ ┣ 📂typings
 ┃ ┣ 📂user
 ┃ ┣ 📂utils
```

</details>

## Technologies and tools

This project is a simple language learning web application developed using the following technologies and tools:

- [Angular](https://angular.io): A framework for building modern web applications.
- [Angular Universal](https://www.npmjs.com/package/@nguniversal/express-engine): An Angular module that provides improved performance and SEO optimization.
- [Nest](https://nestjs.com): A framework for building efficient, reliable and scalable server-side applications.
- [NgRx](https://ngrx.io): A state management library for Angular based on Redux principles.
- [Storybook](https://storybook.js.org): An open-source tool for building and documenting UI components in isolation.
- [Nx](https://nx.dev): A powerful set of tools for Angular monorepo development.
- [Docker](https://www.docker.com/): Software for automating the deployment and management of applications in containerized environments.
