import React, { Fragment,useState,useEffect } from 'react'
import logo from '../images/infeet circle.jpeg'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    const clearData = () => {
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
      }, [])
  return (
    <Fragment>
         <div id="fh5co-page">
                {/* header area */}
                <header id="fh5co-header" role="banner">
                    <div className="container">
                        <div className="row">
                            <div className="header-inner">
                                <div className='log-div'>
                                    <img className="logo-img " src={logo} alt='' />
                                    <h1 className='mx-3'><a href="/">InFeet Inc.</a></h1>
                                </div>
                                <div>
                                    <nav role="navigation">
                                        <ul className='ul-item'>
                                            <li><a href='/'>Home</a></li>
                                            <li><a href='#fh5co-agents'>News</a></li>
                                            <li><a href='#best-deal'>Resale </a></li>
                                            <li><a href='#fh5co-blog'>Book a Call</a></li>
                                            <li className="cta" onClick={clearData }><a>{data?"Logout":"login"}</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                </div>
    </Fragment>
  )
}

export default Navbar