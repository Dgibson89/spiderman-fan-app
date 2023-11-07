import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import GalleryPage from './pages/GalleryPage';
import MediaPage from './pages/MediaPage';
import NavigationBar from "./components/common/Navbar"
import ThemeToggle from './components/theme/ThemeToggle';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/theme/GlobalStyles';
import { lightTheme, darkTheme } from './utils/themes';



const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggle theme={theme} toggleTheme={themeToggler} />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
