import React from 'react';

// Create a context with a default value
const ThemeContext = React.createContext({
  theme: 'dark', // Default theme
  toggleTheme: () => {}, // Placeholder for the toggle function
});

export default ThemeContext;
