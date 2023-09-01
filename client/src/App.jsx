import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Signup from './components/SignUp';
import Login from './components/SignIn';
import About from './components/About';
import Blog from './components/Blog';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Exercises from './components/Exercises';
import TrainersPage from './components/TrainersPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showFooter = !(location.pathname === '/sign_up' ||
                       location.pathname === '/login' ||
                       location.pathname.startsWith('/classes/'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Nav path={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers/*" element={<TrainersPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default App;
