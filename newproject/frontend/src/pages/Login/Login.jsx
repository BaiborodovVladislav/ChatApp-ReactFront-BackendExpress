

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-96 p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100'>
				<h1 className='  text-3xl font-semibold text-center text-gray-300 w'>
					Login
					<span className="text-blue-500"> ChatApp</span>
				</h1>

				<form>
					<div className="mt-4">
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Username</span>
						</label>
						<input type="text" placeholder="Enter username" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>
					<div>
						<label className="label p-2 ">
							<span className="text-base label-text text-gray-200">Password</span>
						</label>
						<input type="text" placeholder="Enter password" className="bg-green-200 w-full input input-bordered h-10 m-2" />
					</div>
					<a href="#" className="text-sm text-gray-300 hover:text-blue-600 hover:underline mt-2 inline-block">
						{"Don't"} have an account?
					</a>

					<button className="btn btn-primary w-full mt-4">Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login


// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center minw-w-96 mx-auto'>
// 			<div className='w-96 p-6 h-full bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100'>
// 				<h1 className='  text-3xl font-semibold text-center text-gray-300 w'>
// 					Login
// 					<span className="text-blue-500"> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div className="mt-4">
// 						<label className="label p-2 ">
// 							<span className="text-base label-text text-gray-200">Username</span>
// 						</label>
// 						<input type="text" placeholder="Enter username" className="bg-green-200 w-full input input-bordered h-10 m-2" />
// 					</div>
// 					<div>
// 						<label className="label p-2 ">
// 							<span className="text-base label-text text-gray-200">Password</span>
// 						</label>
// 						<input type="text" placeholder="Enter password" className="bg-green-200 w-full input input-bordered h-10 m-2" />
// 					</div>
// 					<a href="#" className="text-sm text-gray-300 hover:text-blue-600 hover:underline mt-2 inline-block">
// 						{"Don't"} have an account?
// 					</a>

// 					<button className="btn btn-primary w-full mt-4">Login</button>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }