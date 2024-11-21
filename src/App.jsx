import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './Components/Project';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
