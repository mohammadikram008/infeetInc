import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Snackbar from '../layouts/SnackBar'
import Navbar from '../Navbar/Index';
const SignUpPage = () => {
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
        axios.post('http://localhost:3005/api/tasks/signup', loginData)
            .then(response => {
                // Handle successful login
                console.log('Logged in successfully', response.data);
                // localStorage.setItem('login', JSON.stringify(response.data));
                setData(response.data);
                navigate('/');
                setOpen(true);
                setMessage({ text: "SignUp successfully ", type: "success" });

            })
            .catch(error => {
                // Handle login error
                setError('This email is already register ,please try another one!');
                setOpen(true);
                setMessage({ text: "This email is already register ,please try another one!", type: "success" });
                console.error('Login error:', error);
            });
    };
  return (
    <Fragment>
          <Navbar/>
    <Row className='m-0'>
    <Snackbar open={open} message={message} setOpen={setOpen} />
        <Col md="4"></Col>
        <Col md="4">
            <div>
                
            {error && <p>{error}</p>}
                        <form
                            onSubmit={handleSubmit}
                            className="touchus-form"
                        >

                            <h1>Registeration Form</h1>
                            <input
                                type="email" value={username} onChange={handleUsernameChange}
                                placeholder='Email here'
                                required
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
                                Sign Up
                            </button>
                            <a href='/login' className='text-white'><p>Already have account!</p></a>
                        </form>
            </div>
        </Col>
        <Col md="4"></Col>
    </Row>
</Fragment>
  )
}

export default SignUpPage