import { SiMeilisearch } from "react-icons/si";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type="text" placeholder='Search' className=' input input-bordered rounded-full' />

			<button className='btn btn-circle bg-yellow-500 text-white'>
				<SiMeilisearch className="w-6 h-6 outline-none text-black" />
			</button>
		</form>
	)
}

export default SearchInput
