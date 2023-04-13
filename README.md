# Exercise Tracker

A full-stack exercise tracking application developed using React, Node.js, Express, and MongoDB. This application enables users to create, retrieve, update, and delete exercise records.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/exercise-tracker.git
```

2. Navigate to the project folder:

```
cd exercise-tracker
```

3. Install dependencies for the backend:

```
npm install
```

4. Create a \`.env\` file in the root folder of the project and add your MongoDB connection string and the desired port number:

```
MONGODB_CONNECT_STRING=your_connection_string
PORT=your_port_number
```

5. Navigate to the \`frontend\` folder:

```
cd frontend
```

6. Install dependencies for the frontend:

```
npm install
```

7. Build the frontend application:

```
npm run build
```

8. Navigate back to the root folder:

```
cd ..
```

9. Start the server:

```
npm start
```

Your Exercise Tracker application is now up and running!

## Usage

Open a web browser and navigate to \`http://localhost:your_port_number\` to access the Exercise Tracker application.

## API Endpoints

1. Create an exercise:

```
POST /exercises
```

Request Body:

```json
{
  "name": "string",
  "reps": "number",
  "weight": "number",
  "unit": "string",
  "date": "date"
}
```

2. Retrieve an exercise by ID:

```
GET /exercises/:_id
```

3. Retrieve exercises filtered by reps or weight:

```
GET /exercises?reps=value
GET /exercises?weight=value
```

4. Update an exercise:

```
PUT /exercises/:_id
```

Request Body:

```json
{
  "name": "string",
  "reps": "number",
  "weight": "number",
  "unit": "string",
  "date": "date"
}
```

5. Delete an exercise:

```
DELETE /exercises/:_id
```
