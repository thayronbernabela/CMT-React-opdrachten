import "./App.css";
import Layout from "./components/Layout";
import Navigation from "./Pages/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Books from "./Pages/Books";  
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;