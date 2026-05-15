import Contacts from "./pages/Contacts";
import Navbar from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
