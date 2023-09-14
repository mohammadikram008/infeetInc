import React, { Fragment } from 'react'

const Index = ( props ) => {
    console.log("props",props.data.image)
    return (
        <Fragment>
            <figure>
                <img src={`http://localhost:3005/${props.data.image}`} className="img-responsive" alt="Apartment" />
            </figure>
        </Fragment>
    )
}

export default Index