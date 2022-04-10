import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Logo from "./Components/Logo";
import MainPage from "./MainPage";
import Slide from "./Components/Slide";

function App() {
  return (
	<div>
		<Logo />

		<Routes>
			<Route path ="/" element={<MainPage />} />
			<Route path ="/slide" element={<Slide />} />
			<Route path ="/test" element={<TestPage />} />
			<Route path ="/reacthome" element={<Home />} />
		</Routes>
	</div>
  );
}

function Home() {
	return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.!!!!!!!DEREK WAS HERE
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			</header>
		</div>
	)
}

function TestPage() {
	return (
		<div className="App">
			<header className="App-header">
			<p>
				You have reached the test page.
			</p>
			</header>
		</div>
	)
}

export default App;