import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GalleryPage from "./pages/GalleryPage";
import MediaPage from "./pages/MediaPage";
import NavigationBar from "./components/common/Navbar";
import ThemeToggle from "./components/theme/ThemeToggle";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./utils/ThemeContext";
import { GlobalStyles } from "./components/theme/GlobalStyles";
import { lightTheme, darkTheme } from "./utils/themes";
import Footer from "./components/common/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: themeToggler }}>
      <ThemeProvider
        theme={theme === "light" ? lightTheme : darkTheme}
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <GlobalStyles />
        <div className="content">
          <ThemeToggle theme={theme} toggleTheme={themeToggler} />
          <NavigationBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/media" element={<MediaPage />} />
          </Routes>
        </div>

        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;