import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const timeslots = [
  { id: 1, seatnum: "U1" },
  { id: 2, seatnum: "U2" },
  { id: 3, seatnum: "U3" },
  { id: 4, seatnum: "U4" },
  { id: 5, seatnum: "U5" },
  { id: 6, seatnum: "U6" },
  { id: 7, seatnum: "U7" },
  { id: 8, seatnum: "U8" },
  { id: 9, seatnum: "U9" },
  { id: 10, seatnum: "P1" },
  { id: 11, seatnum: "P2" },
  { id: 12, seatnum: "P3" },
  { id: 13, seatnum: "P4" },
  { id: 14, seatnum: "P5" },
  { id: 15, seatnum: "P6" },
  { id: 16, seatnum: "P7" },
  { id: 17, seatnum: "P8" },
  { id: 18, seatnum: "P9" },
];

const SeatSlot = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [activeButton, setActiveButton] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleTimeSlotClick = (timeslotId) => {
    setSelectedTimeSlot(timeslotId);
  };

  const navigate = useNavigate();

  const handleSuccessMsg = () => {
    // console.log('Signing up with:', { username, password });
    if (selectedSeats.length > 0) navigate("/success");
    else alert("Please Select aleast one Seat");
  };

  const handleSeatClick = (seatId) => {
    const seatIndex = selectedSeats.indexOf(seatId);
    if (seatIndex === -1) {
      // Add seat to selectedSeats
      setSelectedSeats([...selectedSeats, seatId]);
      // Increase totalPrice by seat price (assuming each seat has the same price)
      setTotalPrice((prevPrice) => prevPrice + 180); // Update the price accordingly
    } else {
      // Remove seat from selectedSeats
      const updatedSeats = selectedSeats.filter((seat) => seat !== seatId);
      setSelectedSeats(updatedSeats);
      // Decrease totalPrice by seat price (assuming each seat has the same price)
      setTotalPrice((prevPrice) => prevPrice - 180); // Update the price accordingly
    }
  };

  useEffect(() => {
    if (selectedSeats.length > 0 && totalPrice) {
      const res = {
        seatstotal: selectedSeats.length,
        price: totalPrice,
        seats: timeslots
          .filter((val) => selectedSeats.includes(val.id))
          .map((data) => data.seatnum),
      };
      sessionStorage.setItem("seats", JSON.stringify(res));
    }
  }, [selectedSeats, totalPrice]);

  return (
    <section id="timeslot" style={{ overflowX: "hidden" }}>
      <Row>
        <Col
          sm="4"
          className="border-end border-dark"
          style={{ padding: "10px 30px 10px 42px" }}
        >
          <div className="d-flex justify-content-center flex-column vh-100">
            <h3 className="pb-4">Hi, Gowtham</h3>
            <Button
              className={`mb-3 ${activeButton === 1 ? "active" : ""}`}
              style={{
                backgroundColor: activeButton === 1 ? "black" : "white",
                color: activeButton === 1 ? "white" : "black",
                outline: "none",
                borderRadius: "0",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => handleButtonClick(1)}
            >
              Account
            </Button>
            <Button
              className={`mb-3 ${activeButton === 2 ? "active" : ""}`}
              style={{
                backgroundColor: activeButton === 2 ? "black" : "white",
                color: activeButton === 2 ? "white" : "black",
                outline: "none",
                borderRadius: "0",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => handleButtonClick(2)}
            >
              Please Select Your Time
            </Button>
            <Button
              className={`mb-3 ${activeButton === 3 ? "active" : ""}`}
              style={{
                backgroundColor: activeButton === 3 ? "black" : "white",
                color: activeButton === 3 ? "white" : "black",
                outline: "none",
                borderRadius: "0",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => handleButtonClick(3)}
            >
              Please Select Your Seats
            </Button>
            <hr />
          </div>
        </Col>

        <Col
          sm="8"
          className="d-flex justify-content-center align-items-center"
        >
          <Row className="container">
            {timeslots.map((timeslot) => (
              <Col key={timeslot.id} md={1} xs={2} className="mb-4">
                <Card
                  className="align-items-center"
                  style={{
                    border: 0,
                    borderRadius: "0",
                    background: selectedSeats.includes(timeslot.id)
                      ? "#00FF00"
                      : "#D9D9D9",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSeatClick(timeslot.id)}
                >
                  <Card.Body className="mb-2 mt-2">
                    <h6>{timeslot.seatnum}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
              style={{ paddingTop: "10rem" }}
            >
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Total Seats: <b>{selectedSeats.length}</b>
                  </p>
                  <p>
                    Price: <b>{totalPrice}</b>
                  </p>
                </div>
                <Button
                  style={{
                    width: "100%",
                    background: "black",
                    color: "white",
                    border: "0",
                    borderRadius: "0",
                    padding: "8px 40px",
                  }}
                  onClick={handleSuccessMsg}
                >
                  Book Your Seats
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default SeatSlot;
