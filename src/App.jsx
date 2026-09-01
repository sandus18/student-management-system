import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import Landing from "./pages/Landing";

function App() {
  return (
   <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/students" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>
  </>
  );
}

export default App;
