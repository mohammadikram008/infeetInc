import './App.css';
import React, { Suspense } from "react";

import Navbar from './components/Navbar'
import Index from './components/index'
import Fallback from './components/Fallback'
const AboutComponent = React.lazy(() => import('./components/index'));
function App() {


  return (
    <div className="App">
      {/* <Fallback/> */}
      <Suspense fallback={<Fallback/>} >
        <AboutComponent />
        </Suspense>


    </div>
  );
}

export default App;
