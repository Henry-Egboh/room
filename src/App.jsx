import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <header className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </header>
  );
}

export default App;
