import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";




function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
