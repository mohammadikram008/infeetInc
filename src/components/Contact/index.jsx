import React, { Fragment } from 'react'
import {
    Container,
    FormControl,
    Input,
    createTheme,
    ThemeProvider,
    Button,
    FormLabel,
    Typography,
    Box,
    Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import "./Index.css";
import { pink } from "@mui/material/colors";
import Navbar from '../Navbar/Index';
const index = () => {
    return (
        <div className="abt-pg">
            <Navbar/>
            <div className='contacts'>

                <form
                    action=""
                    method="post"
                    className="form"
                    maxWidth="100%"
                >
                    <FormLabel>
                        <Typography
                            variant="h6"
                            component="h1"
                            color="black"
                            sx={{
                                fontSize: "25px",
                            }}
                        >
                            GET IN TOUCH WITH US
                        </Typography>
                    </FormLabel>
                    <FormControl
                        color="primary"
                        className='input-contact'
                        variant="standard"
                        sx={{
                            margin: "6px 0px",
                            padding: "2px 4px",
                        }}
                        focused
                    >
                        <Input
                            className='input-contact'
                            sx={{
                                margin: "10px 0px",
                                fontSize:"16px",
                                color: "black",
                                padding: "2px 5px",
                            }}
                            type="email"
                            startAdornment={
                                <EmailIcon
                                   
                                />
                            }
                            placeholder="Email"
                            required
                        />
                    </FormControl>
                    <FormControl
                        color="primary"
                        variant="standard"
                        className='input-contact'
                        sx={{
                            // width: "50%",
                            color: "black",
                            margin: "10px 0px",
                            padding: "2px 4px",
                        }}
                        focused
                    >
                        <Input
                            className='input-contact'
                            sx={{
                                margin: "10px 0px",
                                // width: "50%",
                                fontSize:"16px",
                                color: "black",

                                padding: "2px 5px",
                            }}
                            type="text"
                            startAdornment={
                                <MessageIcon
                                    
                                />
                            }
                            placeholder="Enter your message"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{
                                width: "110px",
                            }}
                        >
                            Send &nbsp;{<SendIcon />}
                        </Button>
                    </FormControl>
                </form>
                {/* <div>
                    <div style={{ zIndex: "3", position: "absolute", height:" 100%", width: "100%", padding: "0px", borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}>
                    <div style={{zIndex: 4, position: "absolute", left: '50%', top: '50%', width: '100%', willChange: "transform", transform: 'translate(0px, 0px)'}}>
                        <div style={{position: "absolute", left: '0px', top: '0px', zIndex: '104', width: '100%'}}>
                            </div>
                            <div style={{position: 'absolute', left: '0px', top: '0px' ,zIndex: '105', width: '100%'}}>
                                </div>
                                <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: '106', width: '100%'}}>
                        <span id="F66B5308-1A80-4A8E-8E29-19C9C2F31E95" style={{display: "none"}}>To navigate, press the arrow keys.</span>
                    </div>
                        <div style={{position: "absolute", left: '0px', top: '0px', zIndex: '107', width: '100%'}}>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>

        </div >

    )
}

export default index