// Импортируем необходимые функции и плагины из Vite и плагин для React
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Экспортируем настройки для Vite
export default defineConfig({
	// Указываем какие плагины мы будем использовать, в данном случае плагин для React
	plugins: [react()],
	// Настройки для сервера разработки
	server: {
		// Указываем на каком порту будет работать сервер. Здесь порт 5000.
		port: 5000,
		// Настраиваем прокси-сервер для запросов к API
		proxy: {
			"/api": {
				// Указываем куда будут перенаправляться запросы к "/api". Здесь это "http://localhost:3000".
				target: "http://localhost:3000",
			}
		}
	}
})
