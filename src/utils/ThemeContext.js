import React from 'react';

const ThemeContext = React.createContext({
  theme: 'dark', // Default theme
  toggleTheme: () => {}, // Placeholder for the toggle function
});

export default ThemeContext;
