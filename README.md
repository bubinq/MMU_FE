# Frontend



## Getting started
The projects' configuration is set up using - npm create vite@latest
Make sure you have the following software installed on your local machine:

```
- Node.js ( recommended 16+ )

```

## Installation
These instructions will help you get a copy of the project up and running on your local machine.

1. Clone the repository to your local machine:

- git clone <repository_url>

2. Navigate to the project directory:

- cd project-directory

3. Install dependencies:

- npm install

## Usage
To start the development server and run the project locally, use the following command:

- npm run dev

To make a dist folder with compiled HTML, CSS and JS you should run:

- npm run build

NOTE: If the HTML file output was opened with file protocol, the scripts won't run.
You will need to access the file with http protocol. The easiest way to achieve this is to run:

- npx vite preview

## Testing
For this application we went with the vite recommended testing tools such as:
 - vitest
 - jsdom
 - testing-library/jest-dom
 - testing-library/react
 - testing-library/user-event

### Prerequisites:
Make sure you have the following installed on your machine before proceeding

Node.js (with npm - recommended 16+) 
- You can download it from https://nodejs.org

### Setup 
Install Dependencies
- npm install

To run tests you can use the following commands:
- npm (run) test
