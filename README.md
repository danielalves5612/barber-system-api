## 💈 Barber System API

A complete RESTful API developed to manage a barbershop environment, featuring authentication, role-based authorization, appointment scheduling, service management and image uploads.

## Status

✅ Backend Completed

🚧 React Frontend In Progress

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens)
![Multer](https://img.shields.io/badge/Multer-FFB000?style=for-the-badge)

---

## Tech Stack

- Node.js
- Express.js
- Sequelize
- MariaDB
- JWT
- Multer

---

## 📖 About

**Barber System API** is a REST API built with **Node.js**, **Express** and **Sequelize** following the **MVC architecture**.

The project simulates a real barbershop management system, allowing administrators, barbers and customers to manage appointments, services and images through role-based authorization.

The API was designed with business rules commonly found in real-world systems, focusing on security, maintainability and scalability.

---

## ✨ Features

- 🔐 JWT Authentication
- 👥 Role-Based Authorization
- 👤 User Management
- 💈 Service Management
- 📅 Appointment Scheduling
- 🖼️ Image Upload with Multer
- 🔗 Service & Photo Relationship
- 🛡️ Global Error Handling
- 📂 MVC Architecture
- 🗄️ MariaDB Database
- ⚙️ Sequelize ORM
- ✅ Business Rules Validation

---

## 🏛️ Architecture

This project follows the MVC (Model-View-Controller) architecture.

- Controllers → Business logic
- Models → Database entities
- Routes → API endpoints
- Middlewares → Authentication, authorization and error handling
- Database → Sequelize migrations

---

## 👥 User Roles

| Role | Permissions |
|------|-------------|
| 👑 Admin | Full system access |
| 💈 Barber | View appointments and manage service images |
| 🙋 Customer | Schedule and manage their own appointments |

---

## 📌 Business Rules

## 📅 Appointments

- Customers can only create appointments for themselves.
- Only users with the **customer** role can create appointments.
- Only users with the **barber** role can be selected as barbers.
- Past dates are not allowed.
- Working hours are from **09:00 AM** to **07:00 PM**.
- Appointments are available every **30 minutes**.
- Two appointments cannot exist for the same barber at the same date and time.
- Completed appointments cannot be updated.
- Customers can only view and update their own appointments.
- Customers cannot permanently delete appointments.
- They can cancel their own appointments.

---

# 📡 API Endpoints

## 🔑 Authentication

| Method | Endpoint | Description        |
|---------|----------| ------------------|
| POST | `/tokens` | User authentication |

---

## 👤 Users

| Method | Endpoint | Access | Description      |
|---------|----------|--------|-----------------|
| POST | `/users` | Admin | Create a new user   |
| GET | `/users` | Admin | List all users       |
| GET | `/users/:id` | Admin | Get a user by ID |
| PUT | `/users/:id` | Admin | Update a user    |
| DELETE | `/users/:id` | Admin | Delete a user |

---

## 💈 Services

| Method | Endpoint | Access | Description             |
|---------|----------|--------|------------------------|
| POST | `/services` | Admin | Create a new service    |
| GET | `/services` | Public | List all services       |
| GET | `/services/:id` | Public | Get a service by ID |
| PUT | `/services/:id` | Admin | Update a service     |
| DELETE | `/services/:id` | Admin | Delete a service  |

---

## 🖼️ Photos

| Method | Endpoint | Access | Description                         |
|---------|----------|--------|------------------------------------|
| POST | `/photos` | Admin / Barber | Upload a new service image   |
| GET | `/photos` | Public | List all service images               |
| GET | `/photos/:id` | Public | Get a service image by ID         |
| PUT | `/photos/:id` | Admin / Barber | Update a service image    |
| DELETE | `/photos/:id` | Admin / Barber | Delete a service image |

---

## 📅 Appointments

| Method | Endpoint | Access | Description                             |
|---------|----------|--------|----------------------------------------|
| POST | `/appointments` | Customer / Admin | Create a new appointment |
| GET | `/appointments` | Admin / Barber | List all appointments       |
| GET | `/appointments/:id` | Authenticated | Get an appointment by ID |
| PUT | `/appointments/:id` | Authenticated | Update an appointment    |
| DELETE | `/appointments/:id` | Admin | Delete an appointment         |

---

## 🏗️ Project Structure

```
src
├── config
├── controllers
├── database
│   └── migrations
├── middlewares
├── models
├── routes
├── uploads
└── app.js
```

---

## Requirements

- Node.js 20 or higher
- MariaDB

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/danielalves5612/barber-system-api
```

Enter the project folder:

```bash
cd barber-system-api
```

Install dependencies:

```bash
npm install
```

Configure your environment variables:

```bash
cp .env.example .env
```

Run the migrations:

```bash
npx sequelize-cli db:migrate
```

Start the server:

```bash
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
APP_PORT=3001

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=barber_system
DB_USER=root
DB_PASSWORD=password

TOKEN_SECRET=your_secret_key
TOKEN_EXPIRATION=7d
```

---

## 🔐 Authentication

Protected routes require a JWT token.

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🛠️ Built With

- Node.js
- Express.js
- Sequelize
- MariaDB
- JSON Web Token
- Multer
- BCrypt
- Dotenv

---

## 📈 Future Improvements

- ⚛️ React Frontend
- 📊 Administrative Dashboard
- 🔑 Google OAuth Login
- 📧 Email Notifications
- 🔒 Password Recovery
- 🐳 Docker Support
- 🧪 Automated Tests
- 📱 Mobile Application

---

## 🎯 Project Goals

This project was developed to practice and demonstrate:

- REST API development
- Authentication and authorization
- Database modeling
- Business rules implementation
- File upload management
- MVC architecture
- Backend best practices

---

## 👨‍💻 Author

**Daniel Alves de Souza**

Developed as a portfolio project to demonstrate backend development skills using Node.js, Express, Sequelize and MariaDB.

---

## ⭐ If you enjoyed this project, consider giving it a star!