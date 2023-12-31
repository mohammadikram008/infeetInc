import React, { Fragment } from 'react'
//icon 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-router-dom';
const Index = () => {
  return (
    <Fragment>
         {/* footer */}
         <footer id="fh5co-footer" role="contentinfo">
                    <div className="container">
                        <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>What We Do</h3>
                            <p className='text-white'>Infeet: Redefining Real Estate Investment. Invest in feet, not properties. Accessible, flexible, and inclusive. Empowering everyone to grow wealth. </p>
                            <p className='mt-5 mb-1'><a href="#" className="submit-btn btn-primary btn-outline with-arrow btn-sm"><ArrowCircleUpIcon fontSize='large' /> </a></p>
                        </div>
                        <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>Our Services</h3>
                            <ul className="float">
                              
                                <li><Link to="https://infeetinvestordashboard.netlify.app/#/explore/propertydetail">Investor Dashboard</Link></li>
                                {/* <li><a href="#">Infeet Exchange</a></li> */}
                                {/* <li><a href="#">Terms of Use</a></li> */}
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>Our Offices</h3>
                            <p className='text-white'>Meydan Free Zone,<br/>Dubai, United Arab Emirates.</p>
                            {/* <p className='text-white'>Office1201,12th Floor  Green Trust Tower,Jinnah Avenue Sector F-6/1 , Islamabad ICT Pakistan </p> */}

                        </div>
                        <div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3 className='followus-text'>Follow Us</h3>
                            <ul className="socailicon">
                                <li ><a href="#"><FacebookOutlinedIcon fontSize='large' /></a></li>
                                <li ><a href="#"><TwitterIcon fontSize='large' /></a></li>
                                <li><a href="#"><InstagramIcon fontSize='large' /></a></li>
                                <li><a href="#"><LinkedInIcon fontSize='large' /></a></li>

                            </ul>
                        </div>
                        <div className=" fh5co-copyright text-center text-white">
                            <p>&copy; 2023 InFeet Inc. All Rights Reserved. </p>
                        </div>

                    </div>
                </footer>
    </Fragment>
  )
}

export default Index