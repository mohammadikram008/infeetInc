import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'

const Container = () => {
  return (
    <Fragment>
        <Row className='m-0'>
            <Col>
            <div class="container">
			<div class="row">
				<div class="header-inner">
					<h1><a href="index.html">Infeet <span>Inc.</span></a></h1>
					<nav role="navigation">
						<ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact US</li>
                            <li class="call"><a href="tel://123456789"><i class="icon-phone"></i> +92 123 456 789</a></li>
							{/* <li><a href="buy.html">Buy</a></li>
							<li><a href="rent.html">Rent</a></li>
							<li><a href="properties.html">Properties</a></li>
							<li class="call"><a href="tel://123456789"><i class="icon-phone"></i> +1 123 456 789</a></li>
							<li class="cta"><a href="contact.html">Contact us</a></li> */}
						</ul>
					</nav>
				</div>
			</div>
		</div>
            </Col>
        </Row>
    </Fragment>
  )
}

export default Container