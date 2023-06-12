import './App.css';

import Navbar from './components/Navbar'
import Index from './components/index'
import React, { Suspense } from "react";
const AboutComponent = React.lazy(() => import('./components/index'));
function App() {


  return (
    <div className="App">
      <Suspense fallback={<div> Please Wait... </div>} >
        <AboutComponent />
        </Suspense>


    </div>
  );
}

export default App;
