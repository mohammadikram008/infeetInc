import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiHeader } from '../APILinks/Links';
function ApartmentCard({ apartment }) {
    const navigate = useNavigate();
    const handleNavigation = (prop) => {

        console.log("prop",prop)
        const storedData = localStorage.getItem('login');
        if (storedData) {
            // If data exists in local storage, update the component state
            //   setData(JSON.parse(storedData));
            navigate('/investordashboard',{ state: prop });
        } else {
            navigate('/login');
        }

    };
    return (
        <Fragment>
            <div className="col-md-10 item-block animate-box" data-animate-effect="fadeIn">
                <div className="fh5co-property" >

                    <div className="fh5co-property-innter">

                        <div
                        onClick={() => handleNavigation(apartment
                            )}
                        >
                            <figure>
                                <img src={`${ApiHeader}/${apartment.image}`} className="img-responsive" alt="Apartment" />
                                <a href="#" className="tag">long term</a>
                            </figure>
                            <h3><a href="#">{apartment.appartmentaddres}</a></h3>
                            <div className="price-status">
                                <span className="price">${apartment.price} </span>
                            </div>
                            <p>CLick for more details....</p>
                            <p className="fh5co-property-specification">
                                <span><strong>{apartment.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            {/* <div className="card">
            <img src={`${ApiHeader}/${apartment.image}`} alt="Apartment" />
            <h3>{apartment.appartmentaddres}</h3>
            <div className="price-status">
                <span className="price">${apartment.price} </span>
            </div>
            <p>CLick for more details....</p>
            <p className="fh5co-property-specification">
                <span><strong>{apartment.area}</strong>Sq Ft</span>  <span><strong>3</strong> Beds</span>  <span><strong>3.5</strong> Baths</span>
            </p>

           
        </div> */}
        </Fragment>
    );
}

export default ApartmentCard;
