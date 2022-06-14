import "./index.css";

import { Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import AboutPage from "./_pages/AboutPage";
import BlogPage from "./_pages/BlogPage";
import ContactPage from "./_pages/ContactPage";
import HomePage from "./_pages/HomePage";
import LoadingPage from "./_pages/LoadingPage";
import PortfolioPage from "./_pages/PortfolioPage";
import ProjectsPage from "./_pages/ProjectsPage";
import ResponsiveTopNav from "./_components/ResponsiveTopNav";
import Stars from "./_components/Stars";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <header>
            <ResponsiveTopNav />
          </header>
          <main className="page-content">
            <Stars />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
