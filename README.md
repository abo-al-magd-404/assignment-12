# 📱 Social Media Platform - Backend (Part 1)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## 📝 Description
This is the first part of a robust Social Media Platform backend, built with **TypeScript** and **Node.js**. The project focuses on high performance, scalability, and **Clean Code** principles, following a modular architecture for better maintainability.

---

## 🚀 Features
- **User Authentication:** Secure signup and login processes.
- **Environment Management:** Multi-environment support (`.env.development`, `.env.production`).
- **Type Safety:** Built entirely with TypeScript for robust development.
- **Modular Architecture:** Clear separation between routes, controllers, and models.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Validation:** (Joi/Zod if applicable)
- **Security:** Bcrypt for password hashing & JWT for authorization.

---

## 📂 Project Structure
```text
.
├── src/                # Source files
│   ├── modules/        # Project modules (User, Post, etc.)
│   ├── middlewares/    # Custom middlewares
│   ├── config/         # Configuration files
│   ├── DB/             # Database connection & Models
│   └── app.ts          # Express application setup
├── dist/               # Compiled JavaScript files
├── .env.development    # Development environment variables
├── .env.production     # Production environment variables
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
⚙️ Installation & Setup
Clone the repository:

Bash
git clone [https://github.com/abo-al-magd-404/assignment-12.git](https://github.com/abo-al-magd-404/assignment-12.git)
Install dependencies:

Bash
npm install
Set up environment variables:
Create a .env file or use the existing .env.development and add your:

PORT

MONGO_URI

JWT_SECRET

Run the project (Development):

Bash
npm run dev
Build for production:

Bash
npm run build
👨‍💻 Author
Mohamed Mahmoud Abo Al Magd Software Engineer | MERN-Stack Developer

🎓 Academic Info
Institution: Thebes Higher Institute of Management & Information Technology.

Group: Node_C45_Mon&Thurs_8:30pm_(Online)

Assignment: #11 (Part One of Social Media Project)
