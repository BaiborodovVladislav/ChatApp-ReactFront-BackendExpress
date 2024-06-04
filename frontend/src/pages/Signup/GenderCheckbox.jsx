import PropTypes from 'prop-types';

// Эта функция рисует две галочки: одну для мальчика и одну для девочки.
function GenderCheckbox({ handleCheckboxSubmit, selected }) {
	// Эта функция вызывается, когда мы нажимаем на галочку.
	const handleChange = (gender) => {
		// Мы передаем выбранный пол (мальчик или девочка) в функцию handleCheckboxSubmit.
		handleCheckboxSubmit(gender);
	};

	return (
		// Это контейнер, который держит обе галочки.
		<div className='flex'>
			{/* Это контейнер для галочки "мальчик". */}
			<div className='form-control'>
				{/* Это ярлык и галочка для "мальчика". */}
				<label className={`label gap-2 cursor-pointer ${selected === 'male' ? 'selected' : ''}`}>
					<span className='label-text'>Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
						checked={selected === 'male'} // Галочка будет отмечена, если выбран "мальчик".
						onChange={() => handleChange('male')} // Вызываем функцию handleChange, когда галочку нажимают.
					/>
				</label>
			</div>
			{/* Это контейнер для галочки "девочка". */}
			<div className='form-control'>
				{/* Это ярлык и галочка для "девочки". */}
				<label className={`label gap-2 cursor-pointer ${selected === 'female' ? 'selected' : ''}`}>
					<span className='label-text'>Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
						checked={selected === 'female'} // Галочка будет отмечена, если выбрана "девочка".
						onChange={() => handleChange('female')} // Вызываем функцию handleChange, когда галочку нажимают.
					/>
				</label>
			</div>
		</div>
	);
}

// Здесь мы указываем, что наша функция GenderCheckbox должна получать два параметра:
// handleCheckboxSubmit - это функция, и selected - это строка.
GenderCheckbox.propTypes = {
	handleCheckboxSubmit: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired,
};

export default GenderCheckbox; // Экспортируем нашу функцию, чтобы её можно было использовать в других файлах.
