import React from 'react'
import './Bootstrap.css'
import { Container, Row, Carousel, Accordion, Col } from 'react-bootstrap'

import image from '../../images/background.jpg'
import image2 from '../../images/background2.jpg'
import image3 from '../../images/background3.jpg'

import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout'

export default function Bootstrap() {
    const {logout, currentUser} = useAuth();

    return (
        <section className="bootstrap">
            <main>
                <Carousel>
                    <Carousel.Item>
                        <img src={image} alt="First Slide" className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>This is the first slide caption.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image2} alt="2nd Slide" className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Second Slide Label</h3>
                            <p>This is the 2nd slide caption.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image3} alt="First Slide" className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Third Slide Label</h3>
                            <p>This is the
                                3rd slide caption.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <Row className="pt-5 pb-5 text-center">
                        <Col md={{span: 8, offset: 2}}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h4>Install the React-Bootstrap package from NPM</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>npm install react-bootstrap</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h4>Step 2 - Import the components you are using</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p><a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer" className="m-2 btn btn-outline-primary">Visit here for the docs</a></p>
                                    </Accordion.Body>                                    
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h4>Step 3 - Call to the components</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="text-center p-2">Using the code example from their documentation, call to the components as needed in order to implement the Bootstrap component in your UI.</p>
                                    </Accordion.Body>                                    
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col md={3} className="alert alert-primary">
                            <h4>col-md-3<hr/>
                                will take 3 of 12 columns in the grid
                            </h4>
                        </Col>
                        <Col md={6} className="alert alert-danger">
                            <h4>col-md-6<hr/>
                                will take 6 of 12 columns in the grid
                            </h4>
                        </Col>
                        <Col md={3} className="alert alert-success">
                            <h4>col-md-3<hr/>
                                will take 3 of 12 columns in the grid
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </main>
            {currentUser &&
                <Logout />
            }
        </section>
    )
}
