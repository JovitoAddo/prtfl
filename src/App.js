import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Contents from './Pages/Contents';
import UnConst from './Pages/UnConst';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UnConst />}>
        <Route index element={<UnConst />} />
          <Route path="home" element={<UnConst />} />
          <Route path="about" element={<UnConst />} />
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
