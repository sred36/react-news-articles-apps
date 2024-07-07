# Introduction

This project is a simple React application that fetches articles and displays data from an external API. It showcases basic React concepts such as components, srouting, and API integration.

# Features
    Fetches data from an external API (placeholder data used in this sample).
    Displays a list of items retrieved from the API.
    Allows navigation between different pages using React Router.
    Search functionality
    pagination

# Getting Started
  Follow these instructions to get the project up and running on your local machine.

# Prerequisites
    Make sure you have the following installed:

    Node.js (version >= 12.0.0)
    npm (version >= 6.0.0)
    
# Installation
    Clone the repository(https://git@github.com:sred36/react-news-articles-apps.git) and install dependencies:

    cd react-news-articles-apps

# Install dependencies using npm

npm install

# Or install dependencies using Yarn

yarn install

# Running the App
Start the development server:

# Using npm

npm start

# Using Yarn

yarn start

# Test

npm test

# test coverage

npm test -- --coverage

# test coverage Report path:

ny-times/coverage/lcov-report/index.html

# build the applicatio

npm run build

# Folder Structure

The project structure is organized as follows:

ny-times/
├── public/
│ ├── index.html
│ └── ...
|
├── **test**/
│ ├── ArticleContainer.test.js
│ └── ArticleDetails.test.js
│ └── ...
|
├── src/
│ ├── components/
│ │ ├── ArticleContainer.js
│ │ ├── ArticleDetails.js
│ │ └── ...
│
│ ├── pages/
│ │ ├── Error.js
│ ├── hooks/
│ │ └── useFetch.js
│ ├── context/
│ │ └── ArticleContext.js
| │
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
└── README.md

# Dependencies

    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.24.1",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.11",
    "uuid": "^10.0.0",
    "web-vitals": "^2.1.4"
