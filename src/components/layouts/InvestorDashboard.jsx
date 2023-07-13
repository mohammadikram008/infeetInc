import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
const InvestorDashboard = () => {
    const location = useLocation();
  
const [ownerShipValue,setOwnerShipValue]=useState("");
const [salerValue,setSalerValue]=useState("");
const [data,setData]=useState("");

useEffect(()=>{
    setData(location.state) 
},[])
    const ownerShip=()=>{
        
        setOwnerShipValue({
            appartmentaddres:data.appartmentaddres,
            price:data.price,
            area:data.area
        })
    // setData("")
        // data=""
    }
    const sallerValue=()=>{
        console.log("click")
    setSalerValue({
        appartmentaddres:ownerShipValue.appartmentaddres,
        price:ownerShipValue.price,
        area:ownerShipValue.area
    })
    // setSalerValue(ownerShipValue)

    // setOwnerShipValue("")
    // data=""
}
    console.log("ownerShipValue",ownerShipValue);
    console.log("salerValue",salerValue);
    return (
        <Fragment>
            <Navbar/>
             <div className='text-center '><h1 >Investor DashBoard</h1></div>
            <Row className='m-0'>
                <Col md='4'>
                    {data?
                     <div id="best-deal">
                     <div className="container">
                         <div className="row">
                             <div className="  animate-box mb-5" >
                                 <h2 className='text-black'>Purchase product</h2>
                                 {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p> */}
                             </div>
                             <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                                 <div className="fh5co-property" >
                                    
                                     <div className="fh5co-property-innter">
                                     {data  &&
                                            
                                            <div  >
                                                <h3><a href="#">{data.appartmentaddres}</a></h3>
                                                <div className="price-status">
                                                    <span className="price">${data.price} </span>
                                                </div>
                                               
                                                <p className="fh5co-property-specification">
                                                    <span><strong>{data.area}</strong></span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                                </p>
                                            </div>
 
                             
                                    }
                                    <Button className='mt-4' onClick={ownerShip}> Buy Now</Button>
 
                                     </div>
 
                                 </div>
 
 
                             </div>
                            
 
 
                         </div>
                     </div>
                 </div>
                    :""}
                </Col>
                <Col md='4'   > 
                {
                    ownerShipValue?<div id="best-deal">
                    <div className="container">
                        <div className="row">
                            <div className="  animate-box mb-5" >
                                <h2 className='text-black'>OwnerShip product</h2>
                                </div>
                            <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                                <div className="fh5co-property" >
                                   
                                    <div className="fh5co-property-innter">
                                    {ownerShipValue  &&
                                           
                                           <div  >
                                               <h3><a href="#">{ownerShipValue.appartmentaddres}</a></h3>
                                               <div className="price-status">
                                                   <span className="price">${ownerShipValue.price} </span>
                                               </div>
                                              
                                               <p className="fh5co-property-specification">
                                                   <span><strong>{ownerShipValue.area}</strong></span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                               </p>
                                           </div>

                            
                                   }
                                   <Button className='mt-4' onClick={sallerValue}> Sale Now</Button>

                                    </div>

                                </div>


                            </div>
                           


                        </div>
                    </div>
                </div>:''
                }
                
                </Col>
                <Col md='4'  > 
                {
                    salerValue?<div id="best-deal">
                    <div className="container">
                        <div className="row">
                            <div className="  animate-box mb-5" >
                                <h2 className='text-black'>Saller product</h2>
                                </div>
                            <div className="col-md-4 item-block animate-box" data-animate-effect="fadeIn">
                                <div className="fh5co-property" >
                                   
                                    <div className="fh5co-property-innter">
                                    {salerValue  &&
                                           
                                           <div  >
                                               <h3><a href="#">{salerValue.appartmentaddres}</a></h3>
                                               <div className="price-status">
                                                   <span className="price">${salerValue.price} </span>
                                               </div>
                                              
                                               <p className="fh5co-property-specification">
                                                   <span><strong>{salerValue.area}</strong></span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                                               </p>
                                           </div>

                            
                                   }
                                   <Button className='mt-4' onClick={()=>sallerValue}> ReSale Now</Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>:''
                }
                </Col>
              
            </Row>
        </Fragment>
    )
}

export default InvestorDashboard