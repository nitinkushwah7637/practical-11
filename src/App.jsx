
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our React application!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This application demonstrates React Router navigation.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>My Website</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
