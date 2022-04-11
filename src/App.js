import "./App.css";
import Distributions from "./components/Distributions/Distributions";
import Landing from "./components/Home/Landing";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Promotion from "./components/Promotion/Promotion";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Popup from "./components/ad/Popup";
import SendDemo from "./components/SendDemo/SendDemo";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Popup />
        <Routes>
          <Route path="/" element={<Landing title="Saal Kather Sajaru" />} />
          <Route path="/sks-play-md" element={<Landing title="Saal Kather Sajaru" />} />
          <Route path="/distribution" element={<Distributions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/about" element={<About />} />
          <Route path="/senddemo" element={<SendDemo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
