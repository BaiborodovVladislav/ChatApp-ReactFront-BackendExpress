/** @type {import('tailwindcss').Config} */
// Это специальный комментарий, который говорит программе, что этот файл является конфигурацией для TailwindCSS.

export default {
	content: [
		"./index.html", // Здесь мы указываем файл index.html, чтобы TailwindCSS знал, где искать классы стилей.
		"./src/**/*.{js,ts,jsx,tsx}", // Здесь мы указываем все файлы в папке src, которые имеют расширения js, ts, jsx или tsx.
	],
	theme: {
		extend: {}, // Сюда можно добавлять свои настройки для темы, чтобы изменить внешний вид элементов.
	},
	plugins: [
		// Подключаем плагин DaisyUI, чтобы использовать дополнительные красивые компоненты.



		// eslint-disable-next-line no-undef
		require('daisyui'),
	],
}
