
function GenderCheckbox() {


	const controlCheckbox = (clickCheck) => {
		const checkboxs = document.querySelectorAll(".checkbox")
		checkboxs.forEach(checkbox => {
			if (checkbox !== clickCheck) checkbox.checked = false
		})
	}



	return (
		<div className=' flex '>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type="checkbox"
						onClick={(e) => controlCheckbox(e.target)}
						className="checkbox border-slate-900" />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type="checkbox"
						onClick={(e) => controlCheckbox(e.target)}
						className="checkbox border-slate-900" />
				</label>
			</div>
		</div>
	)
}

export default GenderCheckbox
