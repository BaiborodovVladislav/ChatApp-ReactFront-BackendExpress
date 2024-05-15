import GenderCheckbox from "./GenderCheckbox"


function signup() {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  border-gray-100">
				<h1 className="  text-3xl font-semibold text-center text-gray-300 w">
					Sign Up <span className="text-blue-500"> ChatApp</span>
				</h1>

				<form>
					<div className="mt-4">
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Full Name</span>
						</label>
						<input type="text" placeholder="Jhon Doe" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>
					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Username</span>
						</label>
						<input type="text" placeholder="Jhondoe" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>
					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Password</span>
						</label>
						<input type="text" placeholder="Enter password" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>
					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Confirm Password</span>
						</label>
						<input type="text" placeholder="Confirm password" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>

					<GenderCheckbox />

					<a href="#" className="text-sm text-gray-300 hover:text-blue-600 hover:underline mt-2 inline-block">
						Already have an account?
					</a>
					<div>
						<button className="btn btn-primary w-full mt-4">Sign Up</button>
					</div>

				</form>
			</div>
		</div>
	)
}

export default signup
