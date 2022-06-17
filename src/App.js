import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Contents from './Pages/Contents';
import About from "./Pages/About";
import PastProjects from "./Pages/PastProjects";
import Comments from "./Pages/Comments";
import Error from "./Pages/Error"
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}>
        <Route index element={<Contents />} />
          <Route path="projects" element={<PastProjects />} />
          <Route path="about" element={<About />} />
          <Route path="comments" element={<Comments/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
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
