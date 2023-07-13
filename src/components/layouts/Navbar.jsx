import React, { Fragment,useState,useEffect } from 'react'
import logo from '../images/infeet circle.jpeg'
import { useNavigate,Link } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);
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
     console.log("count",count)
    useEffect(() => {
        // Get the data from local storage
        const storedData = localStorage.getItem('login');
        if (storedData) {
          // If data exists in local storage, update the component state
          setData(JSON.parse(storedData));
        }
      }, [count])
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
                                    <h1 className='mx-3'><Link to="/">InFeet Inc.</Link></h1>
                                </div>
                                <div>
                                    <nav role="navigation">
                                        <ul className='ul-item'>
                                            <li><Link to='/'>Home</Link></li>
                                            <li><Link to='/news'>News</Link></li>
                                            <li><Link to='/resale'>Resale </Link></li>
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