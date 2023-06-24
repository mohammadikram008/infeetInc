import './App.css';
import React, { Suspense } from "react";
import Fallback from './components/layouts/Fallback'
import LearnMore from './components/layouts/LearnMore'
import {
 
  Route,
  Router,
  BrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import InvestorDashboard from './components/layouts/InvestorDashboard';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
const AboutComponent = React.lazy(() => import('./components/layouts/mainpage/index'));
function App() {


  return (
    <div className="App">
      {/* <Fallback/> */}
      <Suspense fallback={<Fallback/>} >
        <Navbar/>
        <Routes>
          <Route path='/' element={  <AboutComponent />} /> 
          <Route path='/learnmore' element={<LearnMore/>} /> 
          <Route path='/investordashboard' element={<InvestorDashboard/>} /> 
          <Route path='/login' element={<LoginPage/>} /> 
          <Route path='/signup' element={<SignUpPage/>} /> 


      
        </Routes>
        
      
        </Suspense>


    </div>
  );
}

export default App;
