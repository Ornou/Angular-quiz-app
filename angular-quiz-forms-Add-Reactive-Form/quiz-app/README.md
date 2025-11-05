# Quiz App

## Description
The Quiz App is an interactive application that allows users to take quizzes based on different categories. Users can browse through various categories, select one, and answer questions related to that category.

## Features
- **Category Selection**: Users can view all available categories displayed as cards.
- **Quiz Functionality**: After selecting a category, users are redirected to a quiz page where they can answer questions.
- **Search Functionality**: Users can filter categories using a search input.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure
```
quiz-app
├── src
│   ├── app
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── components
│   │   │   ├── categories
│   │   │   │   ├── categories.component.ts
│   │   │   │   ├── categories.component.html
│   │   │   │   └── categories.component.css
│   │   │   ├── category-card
│   │   │   │   ├── category-card.component.ts
│   │   │   │   ├── category-card.component.html
│   │   │   │   └── category-card.component.css
│   │   │   ├── quiz
│   │   │   │   ├── quiz.component.ts
│   │   │   │   ├── quiz.component.html
│   │   │   │   └── quiz.component.css
│   │   │   └── search
│   │   │       ├── search.component.ts
│   │   │       ├── search.component.html
│   │   │       └── search.component.css
│   │   ├── services
│   │   │   ├── category.service.ts
│   │   │   └── question.service.ts
│   │   └── models
│   │       ├── category.model.ts
│   │       └── question.model.ts
│   ├── assets
│   └── environments
│       ├── environment.ts
│       └── environment.prod.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd quiz-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200`.

## Technologies Used
- Angular
- TypeScript
- HTML/CSS
- RxJS for reactive programming

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.