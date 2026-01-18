import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CloudSolutions from "./Pages/CloudSolutions";
import CyberSecrity from "./Pages/CyberSecrity";
import FacilityManagementServices from "./Pages/FacilityManagementServices";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-to-do/CloudSolutions" element={<CloudSolutions />} />
        <Route path="/what-to-do/CyberSecrity" element={<CyberSecrity />} />
        <Route path="/what-to-do/FacilityManagementServices" element={<FacilityManagementServices />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
