import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
