
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import './App.css'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {


	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>

		</div>
	)
}

export default App
