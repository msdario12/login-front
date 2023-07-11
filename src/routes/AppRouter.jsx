import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/pages/LoginScreen';
import { SignUpScreen } from '../auth/pages/SignUpScreen';
import { HomeScreen } from '../home/pages/HomeScreen';

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<HomeScreen />} />
					<Route path='/login' element={<LoginScreen />} />
					<Route path='/signup' element={<SignUpScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
