import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Prediction from './pages/Prediction';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
function App() {
  return(
   <Router>
    <h1>Stock Market</h1>
      <div>
         <nav>
            <ul>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/prediction'>Prediction</Link></li>
              <li><Link to='/settings'>Settings</Link></li>
              <li><Link to='/logout'>Logout</Link></li>
            </ul>
         </nav>
         <Routes>
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/predict' element={<Prediction />} />
            <Route path='/set' element={<Settings />} />
            <Route path='/log' element={<Logout />} />
         </Routes>
      </div>
   </Router>
  );
}
export default App;