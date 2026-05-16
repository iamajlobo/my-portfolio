import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Container from "./pages/Container";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Container/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
        </Route>
        <Route path="*"  element={<PageNotFound/>}/>
      </Routes>
    </>
  );
};

export default App;
