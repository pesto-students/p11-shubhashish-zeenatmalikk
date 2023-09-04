import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
