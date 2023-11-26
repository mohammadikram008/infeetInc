import './App.css';
import React, { Suspense } from "react";
import Fallback from './components/layouts/Fallback'
import LearnMore from './components/layouts/LearnMore'
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar/Index';
import InvestorDashboard from './components/layouts/InvestorDashboard';
// import LoginPage from './components/Login/LoginPage';
// import SignUpPage from './components/SignIn/SignUpPage';
import ResalePage from './components/layouts/ResalePage';
import News from './components/layouts/News';
import Aboutus from './components/Aboutus/Index'
import Contactus from './components/Contact/index'
// import Footer from './components/Footer/Index'

const MainComponent = React.lazy(() => import('./components/layouts/mainpage/index'));
const SignUpPage = React.lazy(() => import('./components/SignIn/SignUpPage'));
const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));
const Footer = React.lazy(() => import('./components/Footer/Index'));

function App() {
  return (
    <div className="">
      <Suspense fallback={<Fallback />} >
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          {/* <Route path='/learnmore' element={<Aboutus />} /> */}
          {/* <Route path='/investordashboard' element={<InvestorDashboard />} /> */}
          {/* <Route path='/resale' element={<ResalePage />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} /> */}
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
