import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
const App = () => {
  return (
    <Router>
         <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

         <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
