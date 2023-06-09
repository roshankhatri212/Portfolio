import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Notfound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';


const App = () => {
	const location = useLocation();
	return (
		<div className="app">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/portfolio-react/" element={<Home />} />
					<Route path="/portfolio-react/home" element={<Home />} />
					<Route path="/portfolio-react/about" element={<About />} />
					
					<Route path="/portfolio-react/projects" element={<Projects />} />
					
					<Route
						path="/portfolio-react/contact"
						element={<Contact />}
					/>
					<Route path="/portfolio-react/*" element={<Notfound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default App;
