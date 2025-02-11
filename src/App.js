
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/CFSWebsite" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
