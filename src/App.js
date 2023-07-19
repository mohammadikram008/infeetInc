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
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignIn/SignUpPage';
import ResalePage from './components/layouts/ResalePage';
import News from './components/layouts/News';
import Aboutus from './components/Aboutus/Index'
import Contactus from './components/Contact/index'
import Footer from './components/Footer/Index'
import Chatus from './components/Chat/Index'
import Home from './components/Chat/Home'
import ChatPage from './components/Chat/ChatPage';
import socketIO from 'socket.io-client';
const MainComponent = React.lazy(() => import('./components/layouts/mainpage/index'));
const socket = socketIO.connect('http://localhost:8080');
function App() {


  return (
    <div className="App">

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
          <Route path='/about' element={<Aboutus/>} /> 
          <Route path='/contactus' element={<Contactus/>} /> 
          {/* <Route path='/chat' element={<Chatus/>} />  */}
          {/* <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}
        </Routes>
        <Footer/>
        </Suspense>


    </div>
  );
}

export default App;
