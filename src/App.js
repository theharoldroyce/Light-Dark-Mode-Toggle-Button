import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {

  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

  return (

    <>
    <button type="button" onClick={handleThemeSwitch} className="fixed z-10 right-2 top-5 bg-black dark:bg-white text-md p-1 rounded-md">
			{theme === 'dark' ? '🌙' : '🌞'}
		</button>
    <div className="bg-white text-black dark:bg-black dark:text-white">
    <Navbar/>
    <Home/>
    </div>
    </>
  );
}

export default App;
