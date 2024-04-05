import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const timeslots = [
  { id: 1, time: "09:30 AM" },
  { id: 2, time: "09:45 AM" },
  { id: 3, time: "10:30 AM" },
  { id: 4, time: "11:30 AM" },
  { id: 5, time: "12:30 PM" },
  { id: 6, time: "02:20 PM" },
  { id: 7, time: "02:45 PM" },
  { id: 8, time: "03:00 PM" },
  { id: 9, time: "04:30 PM" },
  { id: 10, time: "06:30 PM" },
];

const TimeSlot = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleTimeSlotClick = (timeslotId, time) => {
    sessionStorage.setItem("timeslot", time);
    setSelectedTimeSlot(timeslotId);
  };

  const handelSeatSelect = () => {
    if (selectedTimeSlot) navigate("/seatslot");
    else alert("Please Select Time Slot");
  };

  return (
    <section id="timeslot" style={{ overflowX: "hidden" }}>
      <Row>
        <Col
          sm="4"
          className="border-end border-dark"
          style={{ padding: "10px 30px 10px 42px" }}
        >
          <div className="d-flex justify-content-center flex-column vh-100">
            <h3 className="pb-4">Hi, Palguna</h3>
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
              <Col key={timeslot.id} md={3} className="mb-4">
                <Card
                  className="align-items-center"
                  style={{
                    border: 0,
                    borderRadius: "0",
                    background:
                      selectedTimeSlot === timeslot.id ? "#00FF00" : "#D9D9D9",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleTimeSlotClick(timeslot.id, timeslot.time)
                  }
                >
                  <Card.Body>
                    <Card.Text>
                      <h5>{timeslot.time}</h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <div>
              <p className="mb-1">Please select your time slot</p>
              <p>Now select your seats</p>
              <Button
                onClick={handelSeatSelect}
                style={{
                  background: "black",
                  color: "white",
                  borderRadius: "0",
                  border: "0",
                  padding: "8px 20px",
                }}
              >
                Select Your Seat
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default TimeSlot;
