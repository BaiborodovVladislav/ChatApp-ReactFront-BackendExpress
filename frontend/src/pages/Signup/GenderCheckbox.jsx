import PropTypes from 'prop-types';


function GenderCheckbox({ handleCheckboxSubmit, selected }) {

	const handleChange = (gender) => {
		handleCheckboxSubmit(gender);
	};

	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selected === 'Male' ? 'selected' : ''}`}>
					<span className='label-text'>Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
						checked={selected === 'Male'}
						onChange={() => handleChange('Male')}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selected === 'Female' ? 'selected' : ''}`}>
					<span className='label-text'>Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
						checked={selected === 'Female'}
						onChange={() => handleChange('Female')}
					/>
				</label>
			</div>
		</div>
	);
}

GenderCheckbox.propTypes = {
	handleCheckboxSubmit: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired,
};

export default GenderCheckbox;

