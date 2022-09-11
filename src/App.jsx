import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';

function App() {
	return (
		<div className='ct-main-home'>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/favorite' element={<Favorite />} />
					<Route exact path='/' element={<Loading />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
