import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Contents from './Pages/Contents'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}>
        <Route index element={<Contents />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
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
