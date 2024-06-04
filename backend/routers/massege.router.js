// Импортируем библиотеку express для создания веб-сервера
import express from "express";
// Импортируем функции для получения и отправки сообщений из файла controller.messaage.js
import { getMessages, sendMessage } from "../controllers/controller.messaage.js";
// Импортируем функцию для защиты маршрутов из файла protectRoute.js
import protectRoute from "../middelwere/protectRoute.js";

// Создаем новый роутер (маршрутизатор), который помогает управлять путями на сервере
const router = express.Router();

// Когда кто-то заходит на путь "/:id", сначала выполняется protectRoute, затем getMessages
// protectRoute проверяет, имеет ли пользователь право на доступ к этому пути
// getMessages получает сообщения для конкретного id (идентификатора)
router.get("/:id", protectRoute, getMessages);

// Когда кто-то отправляет сообщение на путь "/send/:id", сначала выполняется protectRoute, затем sendMessage
// protectRoute проверяет, имеет ли пользователь право на отправку сообщения
// sendMessage отправляет сообщение для конкретного id (идентификатора)
router.post("/send/:id", protectRoute, sendMessage);

// Экспортируем роутер, чтобы его можно было использовать в других частях приложения
export default router;
