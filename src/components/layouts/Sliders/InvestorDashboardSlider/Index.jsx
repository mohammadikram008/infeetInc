import React, { Fragment } from 'react'
import { ApiHeader } from '../../../APILinks/Links'
const Index = ( props ) => {
    console.log("props",props.data.image)
    return (
        <Fragment>
            <figure>
                <img src={`${ApiHeader}/${props.data.image}`} className="img-responsive" alt="Apartment" />
            </figure>
        </Fragment>
    )
}

export default Index