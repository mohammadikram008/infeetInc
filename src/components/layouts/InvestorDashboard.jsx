import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { Routes, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Index';
import { Colorize } from '@mui/icons-material';
import SliderShow from './Sliders/InvestorDashboardSlider/Index'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/InvestorDashBoard.css'

import pro3 from '../../components/images/pro3.jpg'
import Skeleton from './SkeletonComponent'
import Details from './InvestorDashboardComponent/DetailLayout/Index'
import Financial from './InvestorDashboardComponent/FinancialLayout/Index'
import SideBar from './InvestorDashboardComponent/Sidebar/Index'
import Home from '../layouts/mainpage/index'
import Contact from '../Contact/index'
//slider 
import { UncontrolledCarousel } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const InvestorDashboard = () => {
    const location = useLocation();
    const [data, setData] = useState("");
    const [loadfram, setLoadFram] = useState("");
    useEffect(() => {
        setData(location.state)

    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 1000
    };
    const handleChange = (props) => {
        setLoadFram(props);
    }

    return (
        <Fragment>
            <Navbar />
            {/* <div className='text-center '><h1 >Investor DashBoard</h1></div> */}
            {/* <div className="App">
                <SideBar />
                <div className="content">
                    <Routes>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/settings" component={Settings} />
                    </Routes>
                   
                </div>
            </div> */}
            <div className='title-div'>
            
            <p className='investor-title'>House no 45,Street 45,E11/4</p>
                {/* <p className='investor-title'>{data && data ? data.appartmentaddres : ""}</p> */}
            </div>
            <Row className='m-0'>
                <Col md='12'>
                    <figure>
                        <img src={pro3} className="img-investor" alt="Apartment" />
                   
                        {/* <img src={`http://localhost:3005/${data.image}`} className="img-investor" alt="Apartment" /> */}
                    </figure>
                </Col>
            </Row>
            <Row className='m-0  sec-row'>
                <div className='second-row'>

                    <Col md='12' className='detail-col'>
                        <div className='mini-navbar'>
                            <ul>
                                <li onClick={() => handleChange("Details")}>Details</li>|
                                <li onClick={() => handleChange("Financial")}>Financial</li>|
                                <li className="tooltip-btn" data-tooltip="Owner Access">Owner's</li>
                            </ul>
                        </div>

                    </Col>
                    <Col md='10'>

                        {loadfram === "Details" ? <Details /> : <Financial />}



                    </Col>
                </div>
            </Row>
        </Fragment>
    )
}

export default InvestorDashboard