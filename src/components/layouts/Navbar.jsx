import React, { Fragment } from 'react'
import logo from '../images/infeet circle.jpeg'
const Navbar = () => {
  return (
    <Fragment>
         <div id="fh5co-page">
                {/* header area */}
                <header id="fh5co-header" role="banner">
                    <div class="container">
                        <div class="row">
                            <div class="header-inner">
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
                                            <li class="cta"><a href="#fh5co-blog">login</a></li>
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