import "./App.css";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Contents from "./Pages/Contents";
import About from "./Pages/About";
import PastProjects from "./Pages/PastProjects";
import Projects from "./Pages/Projects";
import Comments from "./Pages/Comments";
import Error from "./Pages/Error";
import Contacts from "./Pages/Contacts";
import { useScroll, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />}>
            <Route index element={<Contents />} />
            <Route path="projects" element={<PastProjects />} />
            <Route path="about" element={<About />} />
            <Route path="comments" element={<Comments />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
