import React, { Fragment, useRef, useEffect,useState, createElement } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from "@emailjs/browser";
import { Col, Row } from 'reactstrap'
import toast, { Toaster } from "react-hot-toast";
//slider 
import { UncontrolledCarousel } from 'reactstrap';
//avatar
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar4.png'
import bgabout from '../../images/bg-agents.jpg'

//images
import s1 from '../../images/slide_1.jpg'
import s2 from '../../images/slide_2.jpg'
import pro2 from '../../images/pro2.jpg'
import pro3 from '../../images/pro3.jpg'
import logo from '../../images/infeet circle.jpeg'
import bgimage from '../../images/bg-images.jpg';
// import s3 from './images/slide_3.jpg'
// import s4 from './images/slide_4.jpg'
// import s5 from './images/slide_5.jpg'
// import s6 from './images/slide_6.jpg'
// import pro1 from './images/pro1.jpg'
// import person2 from './images/testimonial_person2.jpg'
// import person3 from './images/testimonial_person3.jpg'
// import person4 from './images/testimonial_person4.jpg'
// import loc from './images/loc.png'
// import image_1 from './images/image_1.jpg'

//icon 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = () => {
    // const { Contact } = content;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/investordashboard');
      };
      const form = useRef();
      const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
      });

    // Sending Email
    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(form.current);
        emailjs
          .sendForm(
            "service_vwudzb3",
            "template_8zpkczl",
            form.current,
            "LQad53V3lCpEpXeiv"
          )
          .then(
            (result) => {
              console.log(result);
              // Clear all input field values
              form.current.reset();
              // Success toast message
              toast.success("Email send Successfully");
            },
            (error) => {
              console.log(error.text);
              toast.error(error.text);
            }
          );
    };
    const items = [
        {
            src: `https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg`,
            altText: 'Slide 1',
            caption: 'Slide 1',
            header: 'Slide 1 Header'
        },
        {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            altText: 'Slide 2',
            caption: 'Slide 2',
            header: 'Slide 2 Header'
        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            altText: 'Slide 3',
            caption: 'Slide 3',
            header: 'Slide 3 Header'



        }
    ];
    return (
        <Fragment>
            <div id="fh5co-page">
                {/* header area */}
                {/* <header id="fh5co-header" role="banner">
                    <div class="container">
                        <div class="row">
                            <div class="header-inner">
                                <div className='log-div'>
                                    <img className="logo-img " src={logo} alt='' />
                                    <h1 className='mx-3'><a href="/">Infeet Inc.</a></h1>
                                </div>
                                <div>
                                    <nav role="navigation">
                                        <ul className='ul-item'>
                                            <li><a>Home</a></li>
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
                </header> */}


                {/* slider area */}
                <div class="slides">
                    <UncontrolledCarousel items={items} />
                </div>


                {/* <aside id="fh5co-hero" clsas="js-fullheight">
                            <div class="flexslider js-fullheight">
                                <ul class="slides">
                                    <li style={{backgroundImage: `url(${s1})`}}>
                                        <div class="container">
                                            <div class="col-md-12 text-center js-fullheight fh5co-property-brief slider-text">
                                                <div class="fh5co-property-brief-inner">
                                                    <div class="fh5co-box">

                                                        <h3><a href="#">Villa In Hialeah, Dade County</a></h3>
                                                        <div class="price-status">
                                                            <span class="price">$540,000 <a href="#" class="tag">For Sale</a></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>

                                                        <p class="fh5co-property-specification">
                                                            <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
                                                        </p>

                                                        <p><a href="#" class="btn btn-primary">Learn more</a></p>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{backgroundImage: `url(${s2})`}}>
                                        <div class="container">
                                            <div class="col-md-12 text-center js-fullheight fh5co-property-brief slider-text">
                                                <div class="fh5co-property-brief-inner">
                                                    <div class="fh5co-box">
                                                        <h3><a href="#">15 Apartments Of Type B</a></h3>
                                                        <div class="price-status">
                                                            <span class="price">$2,200<span class="per">/Month</span> <a href="#" class="tag">For Rent</a></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>
                                                        <p class="fh5co-property-specification">
                                                            <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
                                                        </p>
                                                        <p><a href="#" class="btn btn-primary">Learn more</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{backgroundImage: `url(${s3})`}}>
                                        <div class="container">
                                            <div class="col-md-12 text-center js-fullheight fh5co-property-brief slider-text">
                                                <div class="fh5co-property-brief-inner">
                                                    <div class="fh5co-box">
                                                        <h3><a href="#">401 Biscayne Boulevard, Miami</a></h3>
                                                        <div class="price-status">
                                                            <span class="price">$1,540,000 <a href="#" class="tag">For Sale</a></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>
                                                        <p class="fh5co-property-specification">
                                                            <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  <span><strong>2</strong> Garages</span>
                                                        </p>
                                                        <p><a href="#" class="btn btn-primary">Learn more</a></p>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </aside> */}

                        {/* offer  rent area */}
                <div id="best-deal">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center  animate-box mb-5" data-animate-effect="fadeIn">
                                <h2>TRY OUR VIRTUAL TOURS</h2>
                                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p> */}
                            </div>
                            <div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co-property" onClick={handleNavigation}>
                                    <figure>
                                        <img src={pro3} alt="Free Website Templates FreeHTML5.co" class="img-responsive" />
                                        <a href="#" class="tag">long term</a>
                                    </figure>
                                    <div class="fh5co-property-innter">
                                        <h3><a href="#">Villa In Hialeah, Dade County</a></h3>
                                        <div class="price-status">
                                            <span class="price">$540,000 </span>
                                        </div>
                                        <p>CLick for more details....</p>
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p> */}
                                    </div>
                                    <p class="fh5co-property-specification">
                                        <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span> 
                                    </p>
                                </div>


                            </div>
                            <div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

                                <div class="fh5co-property" onClick={handleNavigation}>
                                    <figure>
                                        <img src={s2} alt="Free Website Templates FreeHTML5.co" class="img-responsive" />
                                        <a href="#" class="tag">short term</a>
                                    </figure>
                                    <div class="fh5co-property-innter">
                                        <h3><a href="#">15 Apartments Of Type B</a></h3>
                                        <div class="price-status">
                                            <span class="price">$2,000</span>
                                        </div>
                                        <p>CLick for more details....</p>
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p> */}
                                    </div>
                                    <p class="fh5co-property-specification">
                                        <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>  
                                    </p>
                                </div>

                            </div>
                            <div class="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

                                <div class="fh5co-property" onClick={handleNavigation}>
                                    <figure>
                                        <img src={pro2} alt="Free Website Templates FreeHTML5.co" class="img-responsive" />
                                        <a href="#" class="tag">self stay</a>
                                    </figure>
                                    <div class="fh5co-property-innter">
                                        <h3><a href="#">401 Biscayne Boulevard, Miami</a></h3>
                                        <div class="price-status">
                                            <span class="price">$1,540,000</span>
                                        </div>
                                        <p>CLick for more details....</p>
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p> */}
                                    </div>
                                    <p class="fh5co-property-specification">
                                        <span><strong>3500</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span> 
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* blog area */}
                <div class="fh5co-section-with-image">

                    <img src={bgabout} alt="" class="img-responsive" />
                    <div class="fh5co-box animate-box">
                        <h2>Security, Comfort, &amp; Convenience</h2>
                        <p>How are our properties different from your average fractionalized real estate projects?</p>
                        <p><a href="/learnmore" class="btn btn-primary btn-outline with-arrow">Learn more... <i class="icon-arrow-right"></i></a></p>
                    </div>

                </div>

                {/* company agent */}
                {/* <div id="fh5co-agents">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading white animate-box" data-animate-effect="fadeIn">
                                <h2>Our Trusted Agents</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                            <div class="col-md-4 text-center item-block animate-box " data-animate-effect="fadeIn">

                                <div class="fh5co-agent ">
                                    <figure>
                                        <img src={avatar1} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" class="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>

                            </div>
                            <div class="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co-agent">
                                    <figure>
                                        <img src={avatar2} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" class="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <div class="fh5co-agent">
                                    <figure>
                                        <img src={avatar3} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" class="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* client area */}
                {/* <div id="fh5co-testimonial">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box" data-animate-effect="fadeIn">
                                <h2>Happy Clients</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                            <div class="col-md-4 text-center item-block animate-box " data-animate-effect="fadeIn">
                                <blockquote >
                                    <p>&ldquo; She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of. &rdquo;</p>
                                    <p><span class="fh5co-author"><cite>Jason Davidson</cite></span><i class="icon twitter-color icon-twitter pull-right"></i></p>
                                </blockquote>
                            </div>
                            <div class="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <blockquote>
                                    <p>&ldquo; Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. She had a last view back on the skyline of her hometown Bookmarksgrove, the headline of. &rdquo;</p>
                                    <p><span class="fh5co-author"><cite>Kyle Smith</cite></span><i class="icon googleplus-color icon-google-plus pull-right"></i></p>
                                </blockquote>
                            </div>
                            <div class="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">

                                <blockquote>
                                    <p>&ldquo; The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. S	he had a last view back on the skyline of her hometown Bookmarksgrove. &rdquo;</p>
                                    <p><span class="fh5co-author"><cite>Rick Cook</cite></span><i class="icon facebook-color icon-facebook pull-right"></i></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Form get in touch */}
                {/* <div className="divider"/>Get InTouch */}
                <div id="fh5co-blog" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center  fh5co-heading animate-box" data-animate-effect="fadeIn">
                                <h2>Book<em> a</em> Call</h2>
                                <p>ENQUIRE NOW </p>
                            </div>
                        </div>
                    </div>
                    <div className="touch-us">
                    <Toaster />
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            data-aos="fade-up"
                            className="touchus-form"
                        >
                            {/* Input Name as same as email js templates values */}
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                required
                                className="input-feild border border-slate-600 mt-4 p-3 rounded"
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email Id"
                                required
                                className="input-feild border border-slate-600 mt-4 p-3 rounded "
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="input-feild border border-slate-600 mt-4 p-3 rounded "
                                required
                            ></textarea>
                            <button
                                className="btn btn-primary btn-outline with-arrow  mt-4  "
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>

                {/* <div class="fh5co-cta" style={{ backgroundImage: `url(${s4})` }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="col-md-12 text-center animate-box" data-animate-effect="fadeIn">
                            <h3>We Try To Update The Site Everyday</h3>
                            <p><a href="#" class="btn btn-primary btn-outline with-arrow">Get started now! <i class="icon-arrow-right"></i></a></p>
                        </div>
                    </div>
                </div> */}


                        {/* footer */}
                <footer id="fh5co-footer" role="contentinfo">
                    <div class="container">
                        <div class="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>What We Do</h3>
                            <p className='text-white'>InFeet Inc. is a multinational property fractionalization firm that  aims to make investments in real estate more accessible by offering investments "in feet" </p>
                            <p><a href="#" class="btn btn-primary btn-outline with-arrow btn-sm"><ArrowCircleUpIcon fontSize='large'/> </a></p>
                        </div>
                        <div class="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>Our Services</h3>
                            <ul class="float">
                                <li><a href="#">AboutUs</a></li>
                                <li><a href="/investordashboard">Investor Dashboard</a></li>
                                <li><a href="#">Infeet Exchange</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>Our Offices</h3>
                            <p className='text-white'>Dubia Office placeholder</p>
                            <p className='text-white'>Office1201,12th Floor  Green Trust Tower,Jinnah Avenue Sector F-6/1 , Islamabad ICT Pakistan </p>

                        </div>
                        <div class="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                            <h3>Follow Us</h3>
                            <ul class="socailicon">
                                <li ><a href="#"><FacebookOutlinedIcon  fontSize='large'/></a></li>
                                <li ><a href="#"><TwitterIcon fontSize='large'/></a></li>
                                <li><a href="#"><InstagramIcon fontSize='large'/></a></li>
                                <li><a href="#"><LinkedInIcon fontSize='large'/></a></li>
                              
                            </ul>
                        </div>
                        <div class="col-md-12 fh5co-copyright text-center text-white">
                            <p>&copy; 2023 InFeet Inc. All Rights Reserved. </p>
                        </div>

                    </div>
                </footer>

            </div>

        </Fragment>
    )
}

export default Container