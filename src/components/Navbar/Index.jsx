import { useState,useEffect } from "react";
import { Container } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  Button,

} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link ,useNavigate} from "react-router-dom";
import "./Index.css";
import logo from '../images/infeet circle.jpeg'
import NavbarContent from '../NavbarContent/Index'
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const showUpMd = useMediaQuery("(min-Width: 701px)");
  const showDownMd = useMediaQuery("(max-Width: 700px)");

  async function handleClick() {
    await setNavbarOpen(!navbarOpen);
  }
  const handleChangeButton = () => {
    setNavbarOpen(false);
    setIsOpen(false);
  }
  const clearData = () => {
    setCount(prevCount => prevCount + 1);
    const storedData = localStorage.getItem('login');
  
    if (storedData) {
      localStorage.removeItem('login');
      setData('');
    }else{
        navigate('/login');
    }
   
  };
  useEffect(() => {
    // Get the data from local storage
    const storedData = localStorage.getItem('login');
    if (storedData) {
      // If data exists in local storage, update the component state
      setData(JSON.parse(storedData));
    }
  }, [count])
  return (
    <div className="nav-bar">
      <AppBar
        sx={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "0px 20px",
        }}
        className={navbarOpen ? "nav-bar-open" : ""}
      >
        <Container
          maxWidth="xl"
          sx={{
            color: "bisque",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
          }}
          className={navbarOpen ? "nav-bar-container" : ""}
          disableGutters
        >
          {(navbarOpen || showUpMd) && (
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <Typography
                color="whiteSmoke"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  display: "block",
                  fontSize: "22px",
                  cursor: "pointer",
                  fontWeight: 600,

                }}
                className={navbarOpen ? "nav-home-link" : ""}
              >

                <div className='log-div'>
                  <img className="logo-img " src={logo} alt='' />
                  <h1>InFeet&nbsp;Inc.</h1>
                </div>

              </Typography>
            </Link>
          )}

          {(showUpMd || navbarOpen) && (
            <Toolbar
              style={{
                display: "flex",
                color: "white",
                margin: "auto auto",
                alignItems: "center",
                zIndex: 121,
              }}
              className={navbarOpen ? "toolbar" : ""}
            >
              {/* <Link
                to="/"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  onClick={handleChangeButton}
                  className="nav-item"
                  color="inherit"
                  variant="text"
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  Home
                </Button>
              </Link> */}

              <Link
                to="/"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : "nav-items"}
              >


                <Button
                  // className="nav-item"
                  onClick={toggleDropdown}
                  // onClick={handleChangeButton}
                  color="inherit"

                  variant="text"
                  style={{
                    color: "white",
                    margin: "auto 23px",
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                 

                  }}
                >
                  Projects<ArrowDropDownIcon />
                </Button>
              </Link>
              <span className="line">|</span>

              <Link
                to="/resale"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : "nav-items"}
              >
                <Button
                  // className="nav-item"
                  color="inherit"
                  onClick={handleChangeButton}
                  variant="text"
                  style={{
                    color: "White",
                    margin: "auto 23px",
                    textTransform: "capitalize",
                    fontSize: "1.6rem",
                    // fontFamily: `PublicSans,'sans-serif'`,
                  }}
                >
                  Resale
                </Button>
              </Link>
              <span className="line">|</span>

              <Link
                to="/news"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : "nav-items"}
              >
                <Button
                  // className="nav-item"
                  color="inherit"
                  onClick={handleChangeButton}
                  variant="text"
                  style={{
                    color: "white",
                    margin: "auto 23px",
                    textTransform: "capitalize",
                    fontSize: "1.6rem",
                    // fontFamily: `PublicSans,'sans-serif'`,
                  }}
                >
                  News
                </Button>
              </Link>
              <span className="line">|</span>

              <Link

                to="/about"
                underline="none"
                
                className={navbarOpen ? "toolbar-btn" : "nav-items"}
              >
                <Button
                  // className="nav-item"
                  variant="text"
                  onClick={handleChangeButton}
                  style={{
                    color: "white",
                    margin: "auto 23px",
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                    // fontFamily: `PublicSans,'sans-serif'`,
                  }}
                >
                  About Us
                </Button>
              </Link>
              <span className="line">|</span>
              <Link

                to="/contactus"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : "nav-items"}
              >
                <Button
                 
                  variant="text"
                  onClick={handleChangeButton}
                  style={{
                    color: "white",
                    margin: "auto 23px",
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                    // fontFamily: `PublicSans,'sans-serif'`,
                  }}
                >
                  Contact Us
       
                </Button>
              </Link>

            </Toolbar>
          )}

          {showDownMd && (
            <Box width={"70%"}>
              <Button

                color="inherit"
                className="nav-open-btn nav-item"
                onClick={handleClick}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                id={navbarOpen ? "nav-btn-open" : ""}
              >
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
              </Button>
            </Box>
          )}

          {!navbarOpen && (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                right: "20px",
              }}
            >
              {/* <Link href="/login" underline="none">
                <Button
                  style={{
                    backgroundColor: "#D1D4DB",
                    height: "80px",
                    borderRadius: "0px",
                    color: "#12172B",
                    textTransform: "none",
                  }}
                  className="btn-reg"
                  variant="contained"
                  disableElevation
                  disableFocusRipple
                >
                  Sign-In
                </Button>
              </Link> */}
              <Link to="/login">
                <Button

                  className="nav-item"
                  variant="text"
                  onClick={clearData }
                  style={{
                    color: "black",
                    margin: "auto 23px",
                    fontSize: "16px",
                    fontWeight: "600",
                    // border: "1px solid #A6A8AA",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    textTransform: "capitalize",
                    letterSpacing: "-0.1px"


                  }}


                // disableElevation
                >
              <a >{data?"Logout":"login"}</a>
                </Button>
              </Link>
              <Link to="/signup">
                <Button

                  className="nav-item"
                  variant="text"
                  style={{
                    color: "white",
                    margin: "auto 23px",
                    fontSize: "16px",
                    fontWeight: "550",
                    // border: "1px solid #A6A8AA",
                    borderRadius: "10px",
                    backgroundColor: "#ca974b",
                    textTransform: "capitalize",
                    letterSpacing: "-0.1px"


                  }}


                // disableElevation
                >
                  Register
              {/* <a onClick={clearData }>{data?"Logout":"login"}</a> */}
                </Button>
              </Link>
            </Box>
          )}
        </Container>
        {isOpen && (
          <NavbarContent />
        )}
      </AppBar>

    </div>
  );
}
