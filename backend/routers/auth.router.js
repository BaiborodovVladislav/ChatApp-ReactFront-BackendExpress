// Импортируем express, это библиотека для создания веб-приложений на Node.js
import express from "express";

// Импортируем функции signup, login, logout из файла auth.controller.js
import { signup, login, logout } from "../controllers/auth.controller.js";

// Создаем новый объект роутера
const router = express.Router();

// Когда пользователь отправляет запрос на '/signup', вызываем функцию signup
router.post("/signup", signup);

// Когда пользователь отправляет запрос на '/login', вызываем функцию login
router.post("/login", login);

// Когда пользователь отправляет запрос на '/logout', вызываем функцию logout
router.post("/logout", logout);

// Экспортируем роутер, чтобы его можно было использовать в других частях приложения
export default router;
