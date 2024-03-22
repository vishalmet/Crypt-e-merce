import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';
import Button from './Components/Navbar';


function App() {

  return (
    <div>
    
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
            </Routes>
          </Router>
      
    </div>
  );
}

export default App;