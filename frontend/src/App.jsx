import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;