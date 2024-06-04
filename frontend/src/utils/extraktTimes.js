export function extraktTimes(time) {
	const date = new Date(time);
	const hours = date.getHours() % 12 || 12;
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

	return `${hours}:${minutes}`;
}

function padZero(number) {
	return number.toString().padStart(2, '0');
}