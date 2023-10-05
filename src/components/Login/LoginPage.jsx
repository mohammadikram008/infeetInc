import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Index.css'
import bgimg from '../images/bg-images.jpg'
import Snackbar from '../layouts/SnackBar'
import Navbar from '../Navbar/Index';
import { Divider } from '@mui/material';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState({}),
        [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object with the login data
        const loginData = {
            username: username,
            password: password
        };

        // Make a POST request to the login API
        axios.post('http://localhost:3005/api/tasks/login', loginData)
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
                setError('Invalid username or password');
                console.error('Login error:', error);
                setOpen(true);
                setMessage({ text: "Invalid username or password", type: "success" });
            });
    };


    return (
        <Fragment >
            <Navbar/>
            <Snackbar open={open} message={message} setOpen={setOpen} />
            <Row className=' login'  >
          <div className='login-heading'>
              <h1 className=''> LogIn</h1>
            </div>
                <Col md="4" className=''>
                </Col>
                <Col md="4">
                    <div>

                        {error && <p>{error}</p>}
                        <form
                            onSubmit={handleSubmit}
                            className="touchus-form touchus-form-login"
                        >

                           
                            <input
                                type="email" value={username} onChange={handleUsernameChange}
                                required
                                placeholder='Enter  Email here '
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50"
                            />
                            <input
                                type="password" value={password} onChange={handlePasswordChange}
                                required
                                placeholder='Enter  Password here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded w-50"
                            />

                            <button
                                className="submit-btn btn-primary btn-outline with-arrow  mt-4 text-white w-50 "
                                type="submit"
                            >
                                Login
                            </button>
                            {/* <Divider color='white'/> */}
                            <a href='/signup' className='text-white mt-5'><p>Create Account</p></a>
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