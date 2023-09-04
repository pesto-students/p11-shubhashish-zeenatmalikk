import React, { createContext, useState, useContext } from 'react';

// Create a ThemeContext and provide a default theme value
const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  // Define the state for the theme and a function to toggle it
  const [theme, setTheme] = useState('light');

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
