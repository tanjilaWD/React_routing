import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import Dashboard from './Components/Dashboard';

const App = () => {
  const isLoggedIn = true;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* যদি লগইন থাকে তাহলে Dashboard দেখাবে, না থাকলে Login */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Login page ধরো পরে তৈরি করবে */}
        <Route path="/login" element={<Home />} />

        {/* ভুল রুট ধরার জন্য */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
