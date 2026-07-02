# 📝 MongoDB CRUD API

A simple RESTful CRUD API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

## 🚀 Features

- Create a Note
- Get All Notes
- Get Note by ID
- Update a Note
- Delete a Note

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/notesdb
```

## ▶️ Run the Project

```bash
npm run dev
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/notes` | Create Note |
| GET | `/notes` | Get All Notes |
| GET | `/notes/:id` | Get Note by ID |
| PUT | `/notes/:id` | Update Note |
| DELETE | `/notes/:id` | Delete Note |

## 👨‍💻 Author

**Harsh Pandav**

⭐ If you found this project useful, consider giving it a star!
