# Skill-Sharing & Learning Platform

A modern web application that enables users to share and learn different skills through a collaborative platform.

## Project Overview

This project consists of two main components:
1. Backend REST API (Spring Boot)
2. Frontend Web Application (React)

## Features

- Skill Sharing Posts with photo/video uploads
- Learning Progress Updates
- Learning Plan Sharing
- Interactive Features (likes, comments)
- User Profiles & Social Features
- Real-time Notifications
- OAuth 2.0 Authentication

## Tech Stack

### Backend
- Spring Boot
- Spring Security
- OAuth 2.0
- JPA/Hibernate
- PostgreSQL

### Frontend
- React
- Material-UI
- Redux
- React Router
- Axios

## Project Structure

```
skill-sharing-platform/
├── backend/                 # Spring Boot REST API
│   ├── src/
│   ├── pom.xml
│   └── README.md
└── frontend/               # React Web Application
    ├── src/
    ├── package.json
    └── README.md
```

## Getting Started

### Prerequisites
- Java 17 or later
- Node.js 18 or later
- PostgreSQL
- Maven
- npm or yarn

### Backend Setup
1. Navigate to the backend directory
2. Run `mvn clean install`
3. Configure application.properties with your database settings
4. Run the application using `mvn spring-boot:run`

### Frontend Setup
1. Navigate to the frontend directory
2. Run `npm install` or `yarn install`
3. Configure environment variables
4. Run the development server using `npm start` or `yarn start`

## API Documentation

The API documentation will be available at `http://localhost:8080/swagger-ui.html` when the backend is running.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 