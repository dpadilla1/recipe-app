import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Logo from "./Logo";
import MainPage from "./MainPage";

function App() {
  return (
	<div>
		<Logo />

		<Routes>
			<Route path ="/" element={<Home />} />
			<Route path ="/test" element={<TestPage />} />
			<Route path ="/main" element={<MainPage />} />
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