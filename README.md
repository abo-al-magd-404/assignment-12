# Social Media Project (Part One) | ASSIGNMENT 12

**Prepared by:** abo al magd  
**Group:** Node_C45_Mon&Thurs_8:30pm_(Online)  
**Assignment:** 12

---

A backend authentication and user management service for a social media platform, built with TypeScript, Express.js, and MongoDB. This project provides robust foundational APIs for user registration, authentication, and management following best practices in security and API design.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [License](#license)

---

## Features

- **User Signup**: Create new users with unique email validation and encrypted credentials.
- **User Login**: Authenticate users using validated credentials.
- **Secure Password Handling**: Passwords stored with hashing.
- **Email Uniqueness Enforcement**: No duplicate registrations allowed.
- **Phone Number & Sensitive Data Encryption**
- **Extensible User Model**: Support for profile images, gender, role, provider, and more.
- **Timestamps & Soft Data Management**

---

## Tech Stack

- **Platform/Lang**: Node.js (TypeScript, ES2023 target)
- **Framework**: Express.js (v5.x)
- **Database**: MongoDB (via Mongoose v9.x)
- **ORM/ODM**: Mongoose
- **Validation**: Zod, custom validation middlewares
- **Security**: bcrypt for password hashing, custom encryption utilities
- **Environment Mgmt**: dotenv, cross-env
- **Dev Tools**: concurrently, tsc --watch

---

## Architecture

```
src/
├── DB/
│   ├── connection.db.ts   # MongoDB connection logic
│   ├── model/
│   │   └── user.model.ts  # User schema definition
│   └── repository/
│       ├── base.repository.ts
│       └── user.repository.ts  # Data access layer
├── common/                # Shared interfaces, enums, responses
├── config/                # Configuration files
├── middleware/            # Express middlewares and validation
├── modules/
│   └── auth/
│       ├── auth.controller.ts  # Auth API routing & validation
│       ├── auth.service.ts     # Auth/signup logic
│       ├── auth.dto.ts         # DTO validation schemas
│       ├── auth.entity.ts      # Entity interfaces
│       └── auth.validation.ts  # Zod validation for inputs
├── app.bootstrap.ts       # App initialization
└── main.ts                # Main entrypoint
```

- **Strict TypeScript Configuration:** Enforced by `tsconfig.json` with strictness flags and ES target.
- **Separation of Concerns:** Controller, service, validation, and DB logic split for clarity and scale.

---

## API Endpoints

### Authentication Routes

- `POST /login`
  - Validates user credentials.
  - Returns authentication response if successful.

- `POST /signup`
  - Registers a new user.
  - Fails if the email already exists.

Validation is handled via custom middleware using Zod schemas.

---

## Database Schema

User model fields include:

- `firstName`, `lastName` (required)
- `email` (required, unique)
- `password` (required for internal provider, securely hashed)
- `phone`, `profilePicture`, `profileCoverPictures`
- `gender`, `role`, `provider`
- `timestamps` (`createdAt`, `updatedAt`)
- `DOB`, `confirmEmail`, others

MongoDB collection: **SOCIAL_APP_USERS**

---

## Getting Started

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Setup environment variables:**
   - Copy `.env.development` or `.env.production` as needed, and modify with your DB credentials.
4. **Run in development:**
   ```bash
   npm run start:dev
   ```
5. **Production build:**
   ```bash
   npm run start:prod
   ```

---

## Scripts

- `start:dev`: Run dev server with auto-reload (TypeScript + Node)
- `start:prod`: Run in production mode

---

## License

ISC, (c) [abo al magd](https://github.com/abo-al-magd-404)
