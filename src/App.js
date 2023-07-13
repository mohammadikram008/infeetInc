import './App.css';
import React, { Suspense } from "react";
import Fallback from './components/layouts/Fallback'
import LearnMore from './components/layouts/LearnMore'
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import InvestorDashboard from './components/layouts/InvestorDashboard';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ResalePage from './components/layouts/ResalePage';
import News from './components/layouts/News';
const MainComponent = React.lazy(() => import('./components/layouts/mainpage/index'));

function App() {


  return (
    <div className="App">
      {/* <Fallback/> */}
      <Suspense fallback={<Fallback/>} >
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={  <MainComponent />} /> 
          <Route path='/learnmore' element={<LearnMore/>} /> 
          <Route path='/investordashboard' element={<InvestorDashboard/>} /> 
          <Route path='/login' element={<LoginPage/>} /> 
          <Route path='/signup' element={<SignUpPage/>} /> 
          <Route path='/resale' element={<ResalePage/>} /> 
          <Route path='/news' element={<News/>} /> 


      
        </Routes>
        
      
        </Suspense>


    </div>
  );
}

export default App;
