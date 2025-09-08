# 🔗 URL Shortener with Authentication & Authorization

A secure and feature-rich URL Shortener built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can create short URLs, track visit history, and manage their links. Admins can view all URLs and users, with role-based access control.

---

## 📸 Demo

![image](https://github.com/user-attachments/assets/1f482260-aaec-45cc-9486-1400dc6ad43e)

---

## 🚀 Features

### Core URL Shortener Features

- Shorten any long URL into a unique short link
- Redirect short links to the original URLs
- Track the number of visits for each link
- Stores all URL data in MongoDB
- Generates unique short IDs using `shortid`
- Server-side rendering with EJS templates

### Authentication & Authorization

- User registration and login system
- Role-based access control:

  - **Normal users**: manage only their own URLs
  - **Admin users**: manage all URLs & users

- JWT-based authentication for secure API access
- Middleware for route protection and role-based restrictions

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Authentication**: JWT
- **Utilities**: shortid, cookie-parser

---

## 📝 Installation

1. Clone the repository:

git clone https://github.com/yourusername/url-shortener.git
cd url-shortener

2. Install dependencies:

npm install

3. Start the server:

npm start

5. Open your browser:

http://localhost:8001

---
