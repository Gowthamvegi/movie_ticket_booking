import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Success = () => {
console.log(sessionStorage.getItem('movie'))
  return (
    <section id='Success' >
      <Container className="d-flex justify-content-center flex-column vh-100">
        <Row>
          <Col md={4} xs={12}>
            <div className='d-flex justify-content-between'>
              <p>Movie Name: <b>{sessionStorage.getItem('movie')}</b></p>
              <p>Show time: <b>{sessionStorage.getItem('timeslot')}</b></p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Total seats: <b>{JSON.parse(sessionStorage.getItem('seats')).seatstotal}</b></p>
              <div>
                <p>Price: <b>{JSON.parse(sessionStorage.getItem('seats')).price} Rs.</b></p>
                <p>Seats: <b>{JSON.parse(sessionStorage.getItem('seats')).seats.join(', ')}</b></p>
              </div>
            </div>
          </Col>


        </Row>

        <Row>
          <Col xs={12} className='mt-4'>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: '#30E720',wordBreak:'break-all' }}>Successfully Booked</h1>
            <h6>Booking information will be sent to your email ids</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Success;
