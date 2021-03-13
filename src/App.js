
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";


import Navigation from './Navigation';


function App() {
  return (
    <>

    
    <Navigation defaultTab={window.location.pathname} className="header"/>
    
    

    
    </>
  );
}



export default App;
