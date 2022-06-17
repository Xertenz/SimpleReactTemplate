import Home from "./routes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Project from "./routes/Project/Project";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
