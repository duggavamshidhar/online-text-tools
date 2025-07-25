# Online Text Tools

A web application built with React.js and Next.js, featuring real-time text editing, a responsive user interface,
efficient state management, Dockerized deployment, and SEO optimization.

## How to Run the Project Locally

Follow these steps to run the project on your local machine:

### Prerequisites

- Node.js (version 22 or higher)
- Docker (optional, for containerized deployment)

### Steps to Run

- Clone the repository:

```
git clone https://github.com/duggavamshidhar/online-text-tools.git

cd online-text-tools
```

- Install dependencies:

```
npm install
```

- Start the development server:

```
npm run dev
```

- Open your browser and navigate to `http://localhost:3000` to view the application.

### Running with Docker

If you prefer to run the application using Docker, follow these steps:

- Clone the repository:

```
git clone https://github.com/duggavamshidhar/online-text-tools.git

cd online-text-tools
```

- Build the Docker image:

```
docker build -t online-text-tools .
```

- Run the Docker container:

```
docker run -p 3000:3000 online-text-tools
```

- Open your browser and navigate to `http://localhost:3000` to view the application.

### Features

- **Real-time Text Editing**: Edit text in real-time with instant updates.
- **Responsive Design**: The application is fully responsive and works on various devices.
- **State Management**: Efficient state management using Zustand.
- **SEO Optimization**: The application is optimized for search engines.
- **Dockerized Deployment**: Easily deploy the application using Docker.
