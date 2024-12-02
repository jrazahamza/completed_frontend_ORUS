import React, { useState } from 'react'
import Header from './header';
import Footer from './Footer';
import { Col, Container, Row, Button, Card, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "../Images/Frame 127.png";
import CardImage from '../Images/activities-card-img.png'
import { Link } from 'react-router-dom';
import HotelReviews from './HotelReviews';



const ActivitiesDetails = () => {
    const [invoiceData, setInvoiceData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        cardName: "",
        cardNumber: "",
        baseFare: 240,
        taxes: 20,
        serviceFee: 5,
        total: 265,
    });

    const updateInvoiceData = (field, value) => {
        setInvoiceData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const BookNow = () => {
        const { firstName, lastName, contact, email, cardName, cardNumber } = invoiceData;

        if (!firstName || !lastName || !contact || !email || !cardName || !cardNumber) {
            alert("All fields must be filled out!");
        } else {
            alert("Your ticket has been confirmed!");
        }
        setInvoiceData('');

    };
    return (
        <>
            {/* Header */}
            <div className='m-5'>
                <Header />
            </div>

            {/* CONTENT */}
            <Container>
                <Row>
                    <Col>
                        <h3>Dubai Desert Safari</h3>
                        <p>Dune bashing followed by cultural activities, live entertainment and barbecue dinner</p>
                        <h3 className='warning'>4.2</h3> very Good Reviews
                    </Col>
                    <Col>
                        <h1>$240</h1>
                        <Button className='btn btn-warning'>Book Now</Button>
                    </Col>
                </Row>
                <div class="row gallery mt-4">
                    <div class="col-lg-6 col-sm-12 mb-3">
                        <img src={Image} alt="Main Image" class="main-image" />
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <img src={Image} alt="Room Image 1" class="small-image" />
                            </div>
                            <div class="col-12 mb-3">
                                <img src={Image} alt="Room Image 2" class="small-image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <img src={Image} alt="Room Image 1" class="small-image" />
                            </div>
                            <div class="col-12 mb-3">
                                <img src={Image} alt="Room Image 2" class="small-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <br />


            <div>
                <Container>
                    <Row>
                        <Col className='border p-5 shadow'>
                            <h1>
                                OverView
                            </h1>
                            <p>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this
                                hospitality mission. With its 452 luxurious rooms and suites,
                                8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and
                                3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2)
                                and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the
                                popular attraction point of the city. Room and suite categories at various sizes with city
                                and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests
                                as a wide variety of selection.</p>
                            <br />

                            <div className='m-5'>
                                <h1>What’s Included</h1>
                                <hr />
                                <h1>Additional Information</h1>
                                <hr />
                                <h1>Cancelation Policy</h1>
                                <hr />
                            </div>

                            <div>
                                <h4> Age: 06-65</h4>
                                <h4>Duration: 8–10 hours</h4>
                                <h4>Start time: Check availability</h4>
                                <h4>Live guide: English</h4>
                                <h4>Free Wi-Fi</h4>
                            </div>
                            <hr />
                            <div>
                                <h4>Itinerary</h4>
                                <p className='ms-5'>You'll get picked up</p>
                                <p className='ms-5'>See departure details</p>
                                <Card>
                                    <img src={CardImage} alt="" className='img-fluid' />
                                    <Card.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <Card className='p-5'>
                                <Card.Body>
                                    <h5 className="card-title">Invoice Summary</h5>
                                    <img src={Image} alt="Invoice" className='img-fluid' />
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>First Name</span>
                                        <span>{invoiceData.firstName}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Last Name</span>
                                        <span>{invoiceData.lastName}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Contact Number</span>
                                        <span>{invoiceData.contact}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Taxes</span>
                                        <span>${invoiceData.taxes}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Service Fee</span>
                                        <span>${invoiceData.serviceFee}</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <strong>Total</strong>
                                        <strong>${invoiceData.total}</strong>
                                    </div>
                                    <Button variant="warning" className="mt-3 w-100" onClick={BookNow}>
                                        Book Now
                                    </Button>
                                    <Link to="/ticket" className="btn btn-warning mt-2 w-100">
                                        View Ticket
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <div className="container mt-5">
    
    <Carousel>
      <Carousel.Item>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
            <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
                <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
                <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
                <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
                <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={CardImage} />
              <Card.Body>
                <Card.Title className='m-2'>Dubai Desert Safari</Card.Title>
                <Card.Text>This is a simple card using React Bootstrap.</Card.Text>
                <Link to='/ActivitiesChecout'> <Button variant="warning">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
    </div>
    <h3>Reviews</h3>
      <div class="rating-box" bis_skin_checked="1">
        <div class="rating-score" bis_skin_checked="1">4.2</div>
        <div class="rating-text" bis_skin_checked="1">
          Very Good <br />
          <span >371 reviews</span>
        </div>
      </div>
      <HotelReviews />
      <HotelReviews />
      <HotelReviews />
      <HotelReviews />
      <HotelReviews />
            </div>


            {/* FOOTER  */}
            <div className='m-5'>
                <Footer />
            </div>



        </>
    )
}

export default ActivitiesDetails;