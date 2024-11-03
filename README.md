# NestJS Monorepo Workspace

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Nestjs](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![EC2](https://img.shields.io/badge/EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![ECR](https://img.shields.io/badge/ECR-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Certbot](https://img.shields.io/badge/Certbot-03A9F4?style=for-the-badge&logo=letsencrypt&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-269539?style=for-the-badge&logo=nginx&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-000000?style=for-the-badge&logo=microservices&logoColor=white)

## 🚀 Overview

This is a monorepo workspace for NestJS projects. It uses the native NestJS monorepo support to manage the workspace. The workspace contains multiple applications and libraries to support a modular and scalable architecture.

The monorepo includes two main applications:

- **🔐 Auth**: Handles authentication and authorization.
- **👤 User Profile**: Manages user profiles and related operations.

Shared libraries are used across the applications to promote code reuse and maintainability. These libraries include:

- **🔌 App Use Plugins**: Common plugins and middleware.
- **🛡️ Auth Lib**: Authentication-related services, guards, and strategies.
- **🗄️ Database**: Database-related services and schemas.
- **🧰 Redis**: Redis-related services.

The applications expose various HTTP endpoints for different functionalities, such as login, user management, and profile updates. Redis is used as a transport layer for microservices communication, ensuring efficient and reliable message passing between different parts of the system.

## 📑 Table of Contents

- [🚀 Overview](#-overview)
- [📂 Project Structure](#-project-structure)
- [🏢 Applications](#-applications)
  - [🔐 Auth](#-auth)
  - [👤 User Profile](#-user-profile)
- [📚 Libraries](#-libraries)
  - [🔌 App Use Plugins](#-app-use-plugins)
  - [🏰 Auth Lib](#-auth-lib)
  - [📁 Database](#-database)
  - [🧰 Redis](#-redis)
- [🔨 Getting Started](#-getting-started)
  - [🔩 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
- [🏃 Running the Applications](#-running-the-applications)
  - [💻 Development](#-development)
  - [📱 Apps separately](#-apps-separately)
  - [🐳 Docker](#-docker)
- [🧪 Testing](#-testing)
- [🧹 Linting and Formatting](#-linting-and-formatting)
- [🌍 Environment Variables](#-environment-variables)
- [🚢 Deployment](#-deployment)
  - [🚀 Deploying to AWS EC2 through ECR](#-deploying-to-aws-ec2-through-ecr)
- [📑 License](#-license)

## 📂 Project Structure

<details>
  <summary>📁 <code>apps/</code></summary>
  <ul>
    <li>
      <details>
        <summary>🔐 <code>auth/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>auth.controller.ts</code></li>
                <li>📄 <code>auth.module.ts</code></li>
                <li>📄 <code>auth.service.ts</code></li>
                <li>
                  <details>
                    <summary>📁 <code>dto/</code></summary>
                    <ul>
                      <li>📄 <code>index.ts</code></li>
                      <li>📄 <code>login.dto.ts</code></li>
                      <li>📄 <code>refresh.dto.ts</code></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>📄 <code>dockerfile</code></li>
          <li>📄 <code>tsconfig.app.json</code></li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>👤 <code>user-profile/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>app.controller.ts</code></li>
                <li>📄 <code>app.module.ts</code></li>
                <li>📄 <code>app.service.ts</code></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>📁 <code>test/</code></summary>
              <ul>
                <li>📄 <code>app.controller.spec.ts</code></li>
                <li>📄 <code>app.e2e-spec.ts</code></li>
              </ul>
            </details>
          </li>
          <li>📄 <code>dockerfile</code></li>
          <li>📄 <code>tsconfig.app.json</code></li>
        </ul>
      </details>
    </li>
  </ul>
</details>

<details>
  <summary>📁 <code>libs/</code></summary>
  <ul>
    <li>
      <details>
        <summary>🔌 <code>app-use-plugins/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>all-exception.filter.ts</code></li>
                <li>📄 <code>app-use-plugins.module.ts</code></li>
                <li>📄 <code>app-use-plugins.service.ts</code></li>
                <li>📄 <code>index.ts</code></li>
                <li>📄 <code>swagger.middleware.ts</code></li>
              </ul>
            </details>
          </li>
          <li>📄 <code>tsconfig.lib.json</code></li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>🛡️ <code>auth-lib/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>auth-lib.module.ts</code></li>
                <li>📄 <code>auth-lib.service.ts</code></li>
                <li>
                  <details>
                    <summary>📁 <code>guards/</code></summary>
                    <ul>
                      <li>📄 <code>index.ts</code></li>
                      <li>📄 <code>jwt.auth.guard.ts</code></li>
                      <li>📄 <code>jwt.strategy.ts</code></li>
                      <li>📄 <code>roles.decorator.ts</code></li>
                      <li>📄 <code>roles.guard.ts</code></li>
                    </ul>
                  </details>
                </li>
                <li>📄 <code>index.ts</code></li>
              </ul>
            </details>
          </li>
          <li>📄 <code>tsconfig.lib.json</code></li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>🗄️ <code>database/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>database.module.ts</code></li>
                <li>📄 <code>index.ts</code></li>
                <li>
                  <details>
                    <summary>📁 <code>schema/</code></summary>
                    <ul>
                      <li>📄 <code>user.schema.ts</code></li>
                    </ul>
                  </details>
                </li>
                <li>📄 <code>users.service.ts</code></li>
              </ul>
            </details>
          </li>
          <li>📄 <code>tsconfig.lib.json</code></li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>🧰 <code>redis/</code></summary>
        <ul>
          <li>
            <details>
              <summary>📁 <code>src/</code></summary>
              <ul>
                <li>📄 <code>redis.constants.ts</code></li>
                <li>📄 <code>redis.module.ts</code></li>
                <li>📄 <code>redis.service.ts</code></li>
                <li>📄 <code>index.ts</code></li>
              </ul>
            </details>
          </li>
          <li>📄 <code>tsconfig.lib.json</code></li>
        </ul>
      </details>
    </li>
  </ul>
</details>

## 🏢 Applications

### 🔐 Auth

The auth application handles authentication and authorization. It includes endpoints for:

- 🔑 Login
- 🔄 Refresh Tokens
- 👤 User Management
- 🚪 Logout

### 👤 User Profile

The user-profile application manages user profiles and related operations. It includes endpoints for:

- 👤 Get User Profile
- ✏️ Update User Profile

## 📚 Libraries

### 🔌 App Use Plugins

The `app-use-plugins` library provides common plugins and middleware used across applications. It includes:

- 🌐 CORS
- 📄 Swagger Documentation
- 🛡️ Global Middlewares

### 🏰 Auth Lib

The `auth-lib` library contains authentication-related services, guards, and strategies. It includes:

- 🛡️ JWT Strategy
- 🔐 Roles Guard
- 👤 User Decorator

### 📁 Database

The `database` library provides database-related services and schemas. It includes:

- 🗄️ User Schema
- 🛠️ User Repository

### 🧰 Redis

The `redis` library provides Redis-related services. It includes:

- 🔧 Redis Client
- 🔄 Token Management

## 🔨 Getting Started

### 🔩 Prerequisites

- 🟢 Node.js
- 📦 npm
- 🐳 Docker (for running the applications in containers)

### 🔧 Installation

Clone the repository:

```sh
git clone <repository-url>
cd <repository-directory>
```

Install the dependencies:

```sh
npm install
```

## 🏃 Running the Applications

### 💻 Development

To start the applications in development mode:

```sh
npm run start:dev
```

### 📱 Apps separately

To build and start the applications separately:

```sh
npm run build
npm run start:auth
npm run start:user-profile
```

### 🐳 Docker

To run the applications using Docker:

```sh
docker compose -f "docker-compose.yml" up -d --build
```

## 🧪 Testing

To run the tests:

```sh
npm run test
```

To run end-to-end tests:

```sh
npm run test:e2e
```

## 🧹 Linting and Formatting

To lint the code:

```sh
npm run lint
```

To format the code:

```sh
npm run format
```

## 🌍 Environment Variables

The following environment variables are used in the project:

```text
# Auth
AUTH_PORT: Port for the Auth service.
USER_PROFILE_PORT: Port for the User Profile service.

# Database
MONGO_URI: MongoDB connection URI.

# JWT
JWT_SECRET: Secret key for JWT tokens.
JWT_REFRESH_SECRET: Secret key for JWT refresh tokens.
JWT_EXPIRATION: JWT token expiration time.
JWT_REFRESH_EXPIRATION: JWT refresh token expiration time.

# Redis
REDIS_URL: Redis connection URL.

# Swagger
SWAGGER_USERNAME: Username for Swagger authentication.
SWAGGER_PASSWORD: Password for Swagger authentication.
```

## 🚢 Deployment

The project includes Docker support for containerized deployment. The docker-compose.yml file defines the services and their configurations.

```sh
docker compose -f "docker-compose.yml" up -d --build
```

## 🚀 Deploying to AWS EC2 through ECR

To deploy your Dockerized applications to AWS EC2 through Amazon Elastic Container Registry (ECR), follow these steps:

Create an ECR Repository:

- Go to the ECR console and create a new repository for your application.
- Build and Tag the Docker Image:
  - Build the Docker image locally and tag it with the ECR repository URI. Push the image to the ECR repository.

    ```sh
    # Replace {folderName} and {appName} and {id} with your application details from AWS ECR

    # Login to ECR
    aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin {id}.dkr.ecr.us-east-2.amazonaws.com

    # Build each image
    docker build -f "./apps/auth/dockerfile" -t {folderName}/auth .
    docker build -f "./apps/user-profile/dockerfile" -t {folderName}/user-profile .

    # Tag each image
    docker tag {folderName}/auth:latest {id}.dkr.ecr.us-east-2.amazonaws.com/{folderName}/auth:latest
    docker tag {folderName}/user-profile:latest {id}.dkr.ecr.us-east-2.amazonaws.com/{folderName}/user-profile:latest

    # Push each image
    docker push {id}.dkr.ecr.us-east-2.amazonaws.com/{folderName}/auth:latest
    docker push {id}.dkr.ecr.us-east-2.amazonaws.com/{folderName}/user-profile:latest
    ```

- Create an EC2 Instance:

  - Launch an EC2 instance with the desired configuration.
  - Install Docker on the EC2 instance.

- Copy docker-compose.yml to the EC2 Instance:

  - Copy the docker-compose.yml file to the EC2 instance using SSH.

  - Copy .env.docker to the EC2 Instance

- Pull and Run the Docker Image:

  - SSH into the EC2 instance.
  - Update the `docker-compose-production.yml` file with the ECR repository URI.
  - Run the Docker image using the docker-compose file.

    ```sh
    # Run the Docker image
    docker compose -f "docker-compose-production.yml" up -d
    ```

- Configure Nginx with certbot

  - Install Nginx on the EC2 instance.
  - Configure Nginx to serve the applications.
  - Use Certbot to generate SSL certificates for the domain.

## 📑 License

This project is licensed under the MIT License.
