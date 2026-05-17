import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
        <Routes>
         
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectPage/>} />

          </Route>
          
            
        </Routes>
    </>
  );
};

export default App;
