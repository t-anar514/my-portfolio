import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const html = window.document.documentElement;
    const prevTheme = darkMode ? 'light' : 'dark';
    html.classList.remove(prevTheme);
    const nextTheme = darkMode ? 'dark' : 'light';
    html.classList.add(nextTheme);

    localStorage.setItem('theme', nextTheme);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='bg-white dark:bg-black text-black dark:text-white py-2 px-3 rounded dark:text-whtie'>
      {darkMode ? 'Dark Mode' : 'Light mode '}
    </button>
  );
};

export default DarkModeToggle;
