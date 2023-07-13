import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bgimg from '../components/images/bg-images.jpg'
import Snackbar from './layouts/SnackBar'
import Navbar from './layouts/Navbar';
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
        axios.post('http://localhost:3001/api/tasks/login', loginData)
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
            <Row className='m-0' >
                <Col md="4" className=''>
                </Col>
                <Col md="4">
                    <div>

                        {error && <p>{error}</p>}
                        <form
                            onSubmit={handleSubmit}
                            className="touchus-form"
                        >

                            <h1>Login Form</h1>
                            <input
                                type="email" value={username} onChange={handleUsernameChange}
                                required
                                placeholder='Email here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded"
                            />
                            <input
                                type="password" value={password} onChange={handlePasswordChange}
                                required
                                placeholder='Password here'
                                className="input-feild border border-slate-600 mt-4 p-3 rounded "
                            />

                            <button
                                className="btn btn-primary btn-outline with-arrow  mt-4 text-white  "
                                type="submit"
                            >
                                Login
                            </button>
                            <a href='/signup' className='text-white'><p>Create Account!</p></a>
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