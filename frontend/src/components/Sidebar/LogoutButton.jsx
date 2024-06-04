import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";

function LogoutButton() {
	const { loading, logout } = useLogout();  // Используйте деструктуризацию объекта

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className="w-6 h-6 text-white cursor-pointer"
					onClick={logout}
				/>
			) : (
				<span className="loading loading-spinner"></span>
			)}
		</div>
	);
}

export default LogoutButton;
