// Импортируем библиотеку express, которая помогает нам создавать веб-серверы
import express from "express";

// Импортируем функцию protectRoute, которая защищает наш маршрут (т.е. требует авторизацию)
import protectRoute from "../middelwere/protectRoute.js";

// Импортируем функцию getUsersForSidebar, которая получает список пользователей для боковой панели
import { getUsersForSidebar } from "../controllers/user.controller.js";

// Создаем новый объект маршрутизатора (router) с помощью express
const router = express.Router();

// Когда кто-то обращается к корневому адресу ("/") на нашем сервере,
// сначала выполняется функция protectRoute (она проверяет авторизацию),
// а затем функция getUsersForSidebar (она получает список пользователей)
router.get("/", protectRoute, getUsersForSidebar);

// Экспортируем наш маршрутизатор, чтобы его можно было использовать в других файлах
export default router;
