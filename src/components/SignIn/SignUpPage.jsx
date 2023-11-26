import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Snackbar from '../layouts/SnackBar'
import Navbar from '../Navbar/Index';
import { ApiHeader } from '../APILinks/Links';
import './Index.css'
const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [email, setEmail] = useState('');
    const [autoText, setAutoText] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState({}),
        [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
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
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setConfirmError('Passwords do not match');
            return; // Don't proceed with signup if passwords don't match
        }
        // Create an object with the login data
        const loginData = {
            username: "",
            email: email,
            password: password
        };

        // Make a POST request to the login API
        await axios.post(`${ApiHeader}/api/tasks/signup`, loginData)
            // axios.post(`http://localhost:3005/api/tasks/signup`, loginData)
            .then(response => {
                // Handle successful login
                // console.log('Logged in successfully', response.data);
                // localStorage.setItem('login', JSON.stringify(response.data));
                setData(response.data);
                setEmail("")
                setConfirmPassword("")
                setPassword("")
                setConfirmError("")
                window.open('http://infeetinvestordashboard.s3-website.ap-south-1.amazonaws.com', '_blank');
                // navigate('http://infeetinvestordashboard.s3-website.ap-south-1.amazonaws.com');
                setOpen(true);
                setMessage({ text: "Account Created ", type: "success" });

            })
            .catch(error => {
                // Handle login error
                setError(`${error}`);
                setOpen(true);
                setMessage({ text: `${error}`, type: "success" });
                console.error('Login error:', error);
            });

    };
    return (
        <Fragment>
            <Navbar />
            <Snackbar open={open} message={message} setOpen={setOpen} />
            <Row className=' signin'>
                <div className='login-heading'>
                    <h1 > Sign Up</h1>
                </div>
                <Col md="4"></Col>
                <Col md="4">
                    <div>

                        {/* {error && <p className="emailreqtext"> {error}</p>} */}
                        <form
                            onSubmit={handleSubmit}
                            className="touchus-form touchus-form-login"
                        >
                            {/* <input
                                type="text" value={username} onChange={handleUsernameChange}
                                required
                                placeholder='Enter UserName here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50"
                            /> */}

                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                // required
                                placeholder="Enter Email here"
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50 "
                            />
                            {autoText && <p className="emailreqtext">{autoText}</p>}

                            <input
                                type="password" value={password} onChange={handlePasswordChange}
                                required
                                placeholder='Enter Password here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50"
                            />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                                placeholder='Confirm Password'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50"
                            />
                            {confirmError && <p className="emailreqtext">{confirmError}</p>}
                            <button
                                className="submit-btn btn-primary  with-arrow  mt-4 text-white w-50 "
                                type="submit"
                            >
                                Sign Up
                            </button>
                            <Link to='/login' className='text-white mt-5'><p>Already have account</p></Link>
                        </form>
                    </div>
                </Col>
                <Col md="4"></Col>
            </Row>
        </Fragment>
    )
}

export default SignUpPage