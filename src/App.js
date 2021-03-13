
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';


function App() {
  return (
    <>

    <Router>
    
    <Navigation defaultTab={window.location.pathname} className="header"/>
    
    
    </Router>

    
    </>
  );
}



export default App;
