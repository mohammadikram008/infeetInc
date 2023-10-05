import React, { Fragment, useRef, useEffect, useState, createElement } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './Properties.css'
import emailjs from "@emailjs/browser";
import Skeleton from '../SkeletonComponent'
import { Col, Row } from 'reactstrap'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import ApartmentCard from '../ApartmentCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//slider 
import { UncontrolledCarousel } from 'reactstrap';
//avatar
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar4.png'
import bgabout from '../../images/bg-agents.jpg'
import pakistanflag from './pk.png'
//imagesimport s1 from '../../images/slide_1.jpg'
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


import Navbar from '../../Navbar/Index';

const Container = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay :true,
        autoplaySpeed: 1000
      };
    const [cardvalue, setCardValue] = useState("");
    // const { Contact } = content;
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const handleNavigation = (prop) => {

        console.log("prop",prop)
        window.open('https://infeetinvestordashboard.netlify.app/#/explore/propertydetail', '_blank');
        // navigate('/investordashboard',{ state: prop });
        // const storedData = localStorage.getItem('login');
        // if (storedData) {
        //     // If data exists in local storage, update the component state
        //     //   setData(JSON.parse(storedData));
        //     navigate('/investordashboard',{ state: prop });
        // } else {
        //     navigate('/login');
        // }

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
            // altText: 'Slide 1',
            // caption: 'Slide 1',
            // header: 'Buying Real State inFeet'
        },
        {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',
            // header: 'Sale Real State in Feet'
        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',
            // header: 'Hold Real State in Feet'



        }
    ];
    useEffect(() => {
        axios.get('http://localhost:3005/api/tasks/')
            .then((res) => {
                setCardValue(res);
            })
            .catch(error => {
                console.error('Login error:', error);
                // setOpen(true);
                // setMessage({ text: "Invalid username or password", type: "success" });
            });
    }, [])
    console.log('cardvalue', cardvalue);
    return (
        <Fragment>
            <div id="fh5co-page">
                <Navbar/>
                


                {/* slider area */}
                <div className="slides">
                    <UncontrolledCarousel items={items} />
                </div>


                {/* offer  rent area */}
                <div id="best-deal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center  animate-box mb-5" data-animate-effect="fadeIn">
                                <h2 className='head-text'>Browse Properties</h2>
                                </div>
                            <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                                 <div className="mian-proprty-div" data-animate-effect="fadeIn">
                        <div className="fh5co-property" >
                            
                            <div className="custom-carousel">
                                <UncontrolledCarousel  {...settings} items={items} />
                            </div>
                        
                            <div className="fh5co-property-innter">
                          
                            <span className="rented">
                                 <img src={pakistanflag}/>Islamabad
                                 </span>
                                 <span className="rented mx-5">Rented</span>
                                <div className='contain-div ' onClick={() => handleNavigation()}>
                                    <h5 >House no 45, Street 45, E-11/4</h5>
                                    <div className="price-status">
                                        <Row>
                                            <Col></Col>
                                        </Row>
                                        <span className="price">PKR 450,000 </span> <span className="investor">Investors: 6778</span>
                                    </div>
                                    <p className="fh5co-property-specification p-4">
                                      <span>Area:</span>  <span><strong>4567</strong>  Sqft</span><br/>
                                      <span>funded Date:</span>  <span><strong>4/5/2022</strong></span><br/>
                                      <span>Current Vale:</span>  <span><strong> PKR 488,900</strong></span>
                                    </p>
                                    <p>Click for more details...</p>
                                </div>

                            </div>
                        </div>
                    </div> 
                                {/* <div className="fh5co-property" >
                                    <figure>
                                        <img src={pro3} alt="Free Website Templates FreeHTML5.co" className="img-responsive" />
                                        <a href="#" className="tag">long term</a>
                                    </figure>
                                    <div className="fh5co-property-innter">
                                    <div onClick={()=>handleNavigation()}>
                                                      <h3><a href="#">House no 45, Street 45, E11/4</a></h3>
                                                    <div className="price-status">
                                                        <span className="price">$ 450000 </span>
                                                                    </div>
                                                          <p>CLick for more details....</p>
                                                    <p className="fh5co-property-specification">
                                                        <span><strong>4567</strong>Sqft</span>  <span><strong>4</strong> Beds</span>  <span><strong>3</strong> Baths</span>
                                                    </p>
                                    </div>
      {
                                     cardvalue?
                                        cardvalue &&  cardvalue.data.length > 0 &&
                                            cardvalue.data.slice(0, 1).map((item, index) => (
                                                 <div key={index} onClick={()=>handleNavigation(item)}>
                                                      <h3><a href="#">{item.appartmentaddres}</a></h3>
                                                    <div className="price-status">
                                                        <span className="price">${item.price} </span>
                                                                    </div>
                                                          <p>CLick for more details....</p>
                                                    <p className="fh5co-property-specification">
                                                        <span><strong>{item.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                                    </p>
                                                </div>

                                            ))
                                    :<Skeleton/>} 
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

                                <div className="fh5co-property">
                                    <figure>
                                        <img src={s2} alt="Free Website Templates FreeHTML5.co" className="img-responsive" />
                                        <a href="#" className="tag">short term</a>
                                    </figure>
                                    <div className="fh5co-property-innter">
                                        {
                                            cardvalue?

                                    cardvalue &&  cardvalue.data.length > 0 &&
                                            cardvalue.data.slice(1, 2).map((item, index) => (
                                                <div key={index}  onClick={()=>handleNavigation(item)}>
                                                    <h3><a href="#">{item.appartmentaddres}</a></h3>
                                                    <div className="price-status">
                                                        <span className="price">${item.price} </span>
                                                    </div>
                                                    <p>CLick for more details....</p>
                                                    <p className="fh5co-property-specification">
                                                        <span><strong>{item.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                                    </p>
                                                </div>

                                            ))
                                        :<Skeleton/>}
                                    </div>

                                </div>

                            </div> */}
                            {/* <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

                                <div className="fh5co-property" >
                                    <figure>
                                        <img src={pro2} alt="Free Website Templates FreeHTML5.co" className="img-responsive" />
                                        <a href="#" className="tag">self stay</a>
                                    </figure>
                                    <div className="fh5co-property-innter" >
                                      {
                                        cardvalue?
                                      
                                        cardvalue &&  cardvalue.data.length > 0 &&
                                            cardvalue.data.slice(2).map((item, index) => (
                                                <div key={index} onClick={()=>handleNavigation(item)}>
                                                    <h3><a href="#">{item.appartmentaddres}</a></h3>
                                                    <div className="price-status">
                                                        <span className="price">${item.price} </span>
                                                    </div>
                                                    <p>CLick for more details....</p>
                                                    <p className="fh5co-property-specification">
                                                        <span><strong>{item.area}</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                                    </p>
                                                </div>

                                            ))
                                        :<Skeleton/>}
                                    </div>

                                </div>
                            </div> */}

                        {/* <Slider {...settings}>
                                    { cardvalue?
                                        cardvalue &&  cardvalue.data.length > 0 &&
                                            cardvalue.data.map((apartment, index) => (
                                         <div key={index}>
                                     <ApartmentCard apartment={apartment} />
                                                 </div>
                                            )):<Skeleton/>}
                             </Slider> */}
                        </div>
                    </div>
                </div>

                {/* blog area */}
                <div className="fh5co-section-with-image">

                    <img src={bgabout} alt="" className="img-responsives" />
                    <div className="fh5co-box animate-box">
                        <h2>Security, Comfort, &amp; Convenience</h2>
                        <p>How are our properties different from your average fractionalized real estate projects?</p>
                        <p className='mt-5'><Link to="/learnmore" className="submit-btn btn-primary btn-outline with-arrow  ">Learn more... <i className="icon-arrow-right"></i></Link></p>
                    </div>

                </div>

                {/* company agent */}
                {/* <div id="fh5co-agents">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading white animate-box" data-animate-effect="fadeIn">
                                <h2>Our Trusted Agents</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                            <div className="col-md-4 text-center item-block animate-box " data-animate-effect="fadeIn">

                                <div className="fh5co-agent ">
                                    <figure>
                                        <img src={avatar1} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" className="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>

                            </div>
                            <div className="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <div className="fh5co-agent">
                                    <figure>
                                        <img src={avatar2} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" className="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <div className="fh5co-agent">
                                    <figure>
                                        <img src={avatar3} alt="" />
                                    </figure>
                                    <h3>John Doe</h3>
                                    <p>Veniam laudantium rem odio quod, beatae voluptates natus animi fugiat provident voluptatibus. Debitis assumenda, possimus ducimus omnis.</p>
                                    <p><a href="#" className="btn btn-primary btn-outline">Contact Me</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* client area */}
                {/* <div id="fh5co-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box" data-animate-effect="fadeIn">
                                <h2>Happy Clients</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                            <div className="col-md-4 text-center item-block animate-box " data-animate-effect="fadeIn">
                                <blockquote >
                                    <p>&ldquo; She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of. &rdquo;</p>
                                    <p><span className="fh5co-author"><cite>Jason Davidson</cite></span><i className="icon twitter-color icon-twitter pull-right"></i></p>
                                </blockquote>
                            </div>
                            <div className="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">
                                <blockquote>
                                    <p>&ldquo; Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. She had a last view back on the skyline of her hometown Bookmarksgrove, the headline of. &rdquo;</p>
                                    <p><span className="fh5co-author"><cite>Kyle Smith</cite></span><i className="icon googleplus-color icon-google-plus pull-right"></i></p>
                                </blockquote>
                            </div>
                            <div className="col-md-4 text-center item-block animate-box" data-animate-effect="fadeIn">

                                <blockquote>
                                    <p>&ldquo; The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. S	he had a last view back on the skyline of her hometown Bookmarksgrove. &rdquo;</p>
                                    <p><span className="fh5co-author"><cite>Rick Cook</cite></span><i className="icon facebook-color icon-facebook pull-right"></i></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Form get in touch */}
                {/* <div className="divider"/>Get InTouch */}
                <div id="fh5co-blog" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center  fh5co-heading animate-box" data-animate-effect="fadeIn">
                                <h2>Book a Call</h2>
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
                                placeholder="Email "
                                required
                                className="input-feild border border-slate-600 mt-4 p-3 rounded "
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="input-feild border textarea border-slate-600 mt-4  m-4 rounded "
                                required
                            ></textarea>
                            <button
                                className="submit-btn btn-primary btn-outline with-arrow  mt-4  "
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>

                {/* <div className="fh5co-cta" style={{ backgroundImage: `url(${s4})` }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="col-md-12 text-center animate-box" data-animate-effect="fadeIn">
                            <h3>We Try To Update The Site Everyday</h3>
                            <p><a href="#" className="btn btn-primary btn-outline with-arrow">Get started now! <i className="icon-arrow-right"></i></a></p>
                        </div>
                    </div>
                </div> */}




            </div>

        </Fragment>
    )
}

export default Container


// <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
//                                 <div className="fh5co-property" >

//                                     <div className="fh5co-property-innter">
//                                         {
//                                             cardvalue ?
//                                                 cardvalue && cardvalue.data.length > 0 &&
//                                                 cardvalue.data.slice(0, 1).map((item, index) => (

//                                                     <div key={index} onClick={() => handleNavigation(item)}>
//                                                         <figure>
//                                                             <img src={`http://localhost:3005/${item.image}`} alt="Apartment"  className="img-responsive"/>

//                                                                <a href="#" className="tag">long term</a>
//                                                         </figure>
//                                                         <h3><a href="#">{item.appartmentaddres}</a></h3>
//                                                         <div className="price-status">
//                                                             <span className="price">${item.price} </span>
//                                                         </div>
//                                                         <p>CLick for more details....</p>
//                                                         <p className="fh5co-property-specification">
//                                                             <span><strong>{item.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
//                                                         </p>
//                                                     </div>

//                                                 ))
//                                                 : <Skeleton />}

//                                     </div>

//                                 </div>


//                             </div>
//                             <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

//                                 <div className="fh5co-property">
                                   
//                                     <div className="fh5co-property-innter">
//                                         {
//                                             cardvalue ?

//                                                 cardvalue && cardvalue.data.length > 0 &&
//                                                 cardvalue.data.slice(1, 2).map((item, index) => (
//                                                     <div key={index} onClick={() => handleNavigation(item)}>
//                                                          <figure>
//                                                             <img src={`http://localhost:3005/${item.image}`} className="img-responsive"  alt="Apartment" />

//                                                              <a href="#" className="tag">long term</a>
//                                                         </figure>
//                                                         <h3><a href="#">{item.appartmentaddres}</a></h3>
//                                                         <div className="price-status">
//                                                             <span className="price">${item.price} </span>
//                                                         </div>
//                                                         <p>CLick for more details....</p>
//                                                         <p className="fh5co-property-specification">
//                                                             <span><strong>{item.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
//                                                         </p>
//                                                     </div>

//                                                 ))
//                                                 : <Skeleton />}
//                                     </div>

//                                 </div>

//                             </div>
//                             <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">

//                                 <div className="fh5co-property" >
                                    
//                                     <div className="fh5co-property-innter" >
//                                         {
//                                             cardvalue ?

//                                                 cardvalue && cardvalue.data.length > 0 &&
//                                                 cardvalue.data.slice(2).map((item, index) => (
//                                                     <div key={index} onClick={() => handleNavigation(item)}>
//                                                         <figure>
//                                                             <img src={`http://localhost:3005/${item.image}`} className="img-responsive"  alt="Apartment" />

//                                                             <a href="#" className="tag">long term</a>
//                                                         </figure>
//                                                         <h3><a href="#">{item.appartmentaddres}</a></h3>
//                                                         <div className="price-status">
//                                                             <span className="price">${item.price} </span>
//                                                         </div>
//                                                         <p>CLick for more details....</p>
//                                                         <p className="fh5co-property-specification">
//                                                             <span><strong>{item.area}</strong> Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
//                                                         </p>
//                                                     </div>

//                                                 ))
//                                                 : <Skeleton />}
//                                     </div>

//                                 </div>
//                             </div>