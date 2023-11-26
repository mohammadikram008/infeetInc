import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Index.css'
import bgimg from '../images/bg-images.jpg'
import Snackbar from '../layouts/SnackBar'
import Navbar from '../Navbar/Index';
import { Divider } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { ApiHeader } from '../APILinks/Links';
const LoginPage = () => {
    const location = useLocation();
    const { fromHome } = location.state?location.state:"";

    const [email, setEmail] = useState('');
    const [autoText, setAutoText] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState({}),
        [open, setOpen] = useState(false);
        const [recaptchaValue, setRecaptchaValue] = useState('');

        const handleRecaptchaChange = (value) => {
          setRecaptchaValue(value);
        };
    const dataReceived = location.state?location.state:"";
    if (dataReceived) {
        const userRole = dataReceived; // Access the user role from the state
        console.log(userRole);
    }
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        const enteredEmail = event.target.value;
        setEmail(enteredEmail);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(enteredEmail)) {
            // If the entered email doesn't match the pattern, you can display auto-text for correction
            // For instance, to display "Enter a valid email address"
            setAutoText('Enter a valid email address');
        } else {
            setAutoText(''); // Clear auto-text if the email is in the correct format
        }

    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Recaptcha Value:', recaptchaValue);
        // // Create an object with the login data
        const loginData = {
            email: email,
            password: password
        };


        // Make a POST request to the login API
        if (fromHome) {

            if (email === "ikram@gmail.com" && password === "123") {
                window.open('http://ineetmanagerdashboard.s3-website.ap-south-1.amazonaws.com', '_blank');
                // navigate('/infeetmanagement.netlify.app')
            } else {
                alert("Incorrect UserName/Password")
            }
        } else {
            await axios.post(`${ApiHeader}/api/tasks/login`, loginData)
                //    axios.post(`http://localhost:3005/api/tasks/login`, loginData)
                .then(response => {
                    // Handle successful login
                    console.log('Logged in successfully', response.data);
                    localStorage.setItem('login', JSON.stringify(response.data));
                    setData(response.data);

                    setOpen(true);
                    setMessage({ text: "login successfully ", type: "success" });
                    navigate('/');

                })
                .catch(error => {
                    // Handle login error
                    setError(error);
                    console.error('Login error:', error);
                    setOpen(true);
                    setMessage({ text: error, type: "danger" });
                });
        }
    };


    return (
        <Fragment >
            <Navbar />
            <Snackbar open={open} message={message} setOpen={setOpen} />
            <Row className=' login'  >
                <div className='login-heading'>
                    <h1 className=''> LogIn</h1>
                </div>
                <Col md="4" className=''>
                </Col>
                <Col md="4">
                    <div>

                        {/* {error && <p>{error}</p>} */}
                        <form
                            onSubmit={handleSubmit}
                            className="touchus-form touchus-form-login"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={handleUsernameChange}
                                // required
                                placeholder="Enter Email here"
                                className="input-feild border border-slate-600 mt-4 p-3 rounded  "
                            />
                            {autoText && <p className="emailreqtext">{autoText}</p>}

                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                placeholder='Enter  Password here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded "
                            />
                            <ReCAPTCHA
                            className='mt-4'
                                sitekey="6LeQCh0pAAAAAOL5xxIkMs2gBnEOAtOmyBc_da0o" // Replace with your ReCAPTCHA site key
                                onChange={handleRecaptchaChange}
                            />
                            <button
                                className="submit-btn btn-primary  with-arrow  mt-4 text-white w-50 "
                                type="submit"
                            >
                                Login
                            </button>
                            {/* <Divider color='white'/> */}
                            {fromHome && fromHome ? "" :
                                <Link to='/signup' className='text-white mt-5'><p>Create Account</p></Link>
                            }
                        </form>
                        {/* <form onSubmit={handleSubmit}>
                            <div>
                                <label>Username:</label>
                                <input type="text" value={username} onChange={handleUsernameChange} />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" value={password} onChange={handlePasswordChange} />
                            </div>
                            <button type="submit">Login</button>
                        </form> */}
                    </div>
                </Col>
                <Col md="4"></Col>
            </Row>
        </Fragment>
    )
}

export default LoginPage