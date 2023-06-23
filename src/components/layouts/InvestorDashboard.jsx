import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'

const InvestorDashboard = () => {
    return (
        <Fragment>
            <Row className='m-0'>
                <Col md='1'></Col>
                <Col md='3'>
                    <div className='investor-cel  '>
                        <h1>Purchase point</h1>
                    </div>
                </Col>
                <Col md='3' className='investor-cel   '> <div>
                    <h1>OwnerShip</h1>
                </div></Col>
                <Col md='3' className='investor-cel  '> <div>
                    <h1>Saler point</h1>
                </div></Col>
                <Col md='1'></Col>
            </Row>
        </Fragment>
    )
}

export default InvestorDashboard