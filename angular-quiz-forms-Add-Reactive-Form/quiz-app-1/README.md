# Quiz App

## Description
This project is a quiz application that allows users to select categories and answer questions related to those categories. Users can filter categories and navigate to the quiz page to answer questions.

## Features
- Display categories as cards
- Clickable categories that redirect to the quiz page
- Search functionality to filter categories
- Reset button to clear the search filter
- Display selected category on the quiz page
- Fetch categories from the database

## Project Structure
```
quiz-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── category-list
│   │   │   │   ├── category-list.component.ts
│   │   │   │   ├── category-list.component.html
│   │   │   │   ├── category-list.component.scss
│   │   │   │   └── category-card
│   │   │   │       ├── category-card.component.ts
│   │   │   │       ├── category-card.component.html
│   │   │   │       └── category-card.component.scss
│   │   │   └── quiz
│   │   │       ├── quiz.component.ts
│   │   │       ├── quiz.component.html
│   │   │       └── quiz.component.scss
│   │   ├── models
│   │   │   ├── category.model.ts
│   │   │   └── question.model.ts
│   │   ├── services
│   │   │   ├── category.service.ts
│   │   │   └── quiz.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── environments
│   ├── assets
│   ├── index.html
│   └── styles.scss
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage
- Start the application using `ng serve`.
- Open your browser and navigate to `http://localhost:4200`.

## License
This project is licensed under the MIT License.